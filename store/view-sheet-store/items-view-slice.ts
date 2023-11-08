import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsTypes } from "@/components/types/sheet-types/field-types";
import { UpdateItemFieldArgs } from "@/components/types/sheet-types/update-args";
import { validItemsFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialItemsViewState: ItemsTypes = {
  items: [],
  isLoading: false,
  error: null,
};

const baseURL = "/api/character-sheet-view/items-view";

//Fetch data for view sheet subsection
export const fetchItemsData = createAsyncThunk(
  "itemsView/fetchItemsData",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}?characterId=${characterId}`);
      // Assuming the API returns an array of items

      // Check if the response has a 'data' property and it is an array
      if (response.data && Array.isArray(response.data.data)) {
        // Map over the array inside the 'data' property
        return response.data.data.map((item) => ({
          item_id: item.item_id,
          item_name: item.item_name || "",
          item_description: item.item_description || "",
          item_amount: item.item_amount || "",
          item_max: item.item_max || "",
        }));
      } else {
        // Handle the case where the data is not in the expected format
        throw new Error("Invalid data format received from API");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to fetch character data");
    }
  }
);

//Inserting a item when the user hits "add" button
export const addItem = createAsyncThunk(
  "itemsView/addItem",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}?characterId=${characterId}`);
      if (response.status === 201) {
        return response.data; // The new item, including its ID
      } else {
        return rejectWithValue("Failed to add item");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to add item");
    }
  }
);

//Handle user updates via PUT requests for view sheet subsection
export const updateItemsField = createAsyncThunk(
  "itemsView/updateField",
  async (
    { characterId, itemId, fieldName, value }: UpdateItemFieldArgs, // Include itemId in the arguments
    { rejectWithValue }
  ) => {

    if (!validItemsFieldNames.includes(fieldName)) {
      return rejectWithValue("Invalid field");
    }

    try {
      const response = await axios.put(
        `${baseURL}?characterId=${characterId}&itemId=${itemId}&fieldName=${fieldName}&value=${value}` // Use RESTful convention by including itemId in the URL
      );
      if (response.status === 200) {
        return { itemId, fieldName, value }; // Include itemId in the return value
      } else {
        return rejectWithValue("Failed to update field");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to update field");
    }
  }
);

//Removing a item when the user clicks the delete icon
export const removeItem = createAsyncThunk(
  "itemsView/removeItem",
  async (
    { characterId, itemId }: { characterId: string; itemId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.delete(
        `${baseURL}?characterId=${characterId}&itemId=${itemId}`
      );
      if (response.status === 200) {
        return itemId; // Return the ID of the item to remove from state
      } else {
        return rejectWithValue("Failed to remove item");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to remove item");
    }
  }
);


const itemsViewSlice = createSlice({
  name: "itemsView",
  initialState: initialItemsViewState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchItemsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItemsData.fulfilled, (state, action) => {
        state.isLoading = false;
        // If no items are returned, the state.items will just be an empty array
        state.items = action.payload; // Set the fetched items into the state
      })
      .addCase(fetchItemsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data insertion
      .addCase(addItem.fulfilled, (state, action) => {
        // Add the new item to the items array
        state.items.push(action.payload);
      })

      //For data removal
      .addCase(removeItem.fulfilled, (state, action) => {
        // Remove the item with the given item_id
        state.items = state.items.filter(
          (item) => item.item_id !== action.payload
        );
      })

      //For data updates
      .addCase(updateItemsField.fulfilled, (state, action) => {
        const { itemId, fieldName, value } = action.payload;
        const itemIndex = state.items.findIndex(
          (item) => item.item_id === itemId
        );
        if (itemIndex !== -1) {
          state.items[itemIndex][fieldName] = value;
        }
      })
      .addCase(updateItemsField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewItemsActions = itemsViewSlice.actions;
export default itemsViewSlice.reducer;
