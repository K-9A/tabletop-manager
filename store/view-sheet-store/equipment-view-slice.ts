import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EquipmentTypes } from "@/components/types/sheet-types/field-types";
import { UpdateEquipmentFieldArgs } from "@/components/types/sheet-types/update-args";
import { validEquipmentFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialEquipmentViewState: EquipmentTypes = {
  equipment: [],
  isLoading: false,
  error: null,
};

const baseURL = "/api/character-sheet-view/equipment-view";

//Fetch data for view sheet subsection
export const fetchEquipmentData = createAsyncThunk(
  "equipmentView/fetchEquipmentData",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}?characterId=${characterId}`);
      // Assuming the API returns an array of equipment

      // Check if the response has a 'data' property and it is an array
      if (response.data && Array.isArray(response.data.data)) {
        // Map over the array inside the 'data' property
        return response.data.data.map((equipment) => ({
          equipment_id: equipment.equipment_id,
          equipment_name: equipment.equipment_name || "",
          equipment_category: equipment.equipment_category || "",
          equipment_properties: equipment.equipment_properties || "",
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

//Inserting a equipment when the user hits "add" button
export const addEquipment = createAsyncThunk(
  "equipmentView/addEquipment",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}?characterId=${characterId}`);
      if (response.status === 201) {
        return response.data; // The new equipment, including its ID
      } else {
        return rejectWithValue("Failed to add equipment");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to add equipment");
    }
  }
);

//Handle user updates via PUT requests for view sheet subsection
export const updateEquipmentField = createAsyncThunk(
  "equipmentView/updateField",
  async (
    { characterId, equipmentId, fieldName, value }: UpdateEquipmentFieldArgs, // Include equipmentId in the arguments
    { rejectWithValue }
  ) => {

    if (!validEquipmentFieldNames.includes(fieldName)) {
      return rejectWithValue("Invalid field");
    }

    try {
      const response = await axios.put(
        `${baseURL}?characterId=${characterId}&equipmentId=${equipmentId}&fieldName=${fieldName}&value=${value}` // Use RESTful convention by including equipmentId in the URL
      );
      if (response.status === 200) {
        return { equipmentId, fieldName, value }; // Include equipmentId in the return value
      } else {
        return rejectWithValue("Failed to update field");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to update field");
    }
  }
);

//Removing a equipment when the user clicks the delete icon
export const removeEquipment = createAsyncThunk(
  "equipmentView/removeEquipment",
  async (
    { characterId, equipmentId }: { characterId: string; equipmentId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.delete(
        `${baseURL}?characterId=${characterId}&equipmentId=${equipmentId}`
      );
      if (response.status === 200) {
        return equipmentId; // Return the ID of the equipment to remove from state
      } else {
        return rejectWithValue("Failed to remove equipment");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to remove equipment");
    }
  }
);


const equipmentViewSlice = createSlice({
  name: "equipmentView",
  initialState: initialEquipmentViewState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchEquipmentData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEquipmentData.fulfilled, (state, action) => {
        state.isLoading = false;
        // If no equipment are returned, the state.equipment will just be an empty array
        state.equipment = action.payload; // Set the fetched equipment into the state
      })
      .addCase(fetchEquipmentData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data insertion
      .addCase(addEquipment.fulfilled, (state, action) => {
        // Add the new equipment to the equipment array
        state.equipment.push(action.payload);
      })

      //For data removal
      .addCase(removeEquipment.fulfilled, (state, action) => {
        // Remove the equipment with the given equipment_id
        state.equipment = state.equipment.filter(
          (equipment) => equipment.equipment_id !== action.payload
        );
      })

      //For data updates
      .addCase(updateEquipmentField.fulfilled, (state, action) => {
        const { equipmentId, fieldName, value } = action.payload;
        const equipmentIndex = state.equipment.findIndex(
          (equipment) => equipment.equipment_id === equipmentId
        );
        if (equipmentIndex !== -1) {
          state.equipment[equipmentIndex][fieldName] = value;
        }
      })
      .addCase(updateEquipmentField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewEquipmentActions = equipmentViewSlice.actions;
export default equipmentViewSlice.reducer;
