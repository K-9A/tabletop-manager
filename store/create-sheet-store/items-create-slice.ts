import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialItemsCreateState = {
    items: [
      {
        item_name: "",
        item_description: "",
        item_amount: "",
        item_max: ""
      },
    ],
  
    loading: false,
    isValid: false,
    error: null,
  };

    //TODO: For the submission process to be done later with Axios
export const saveItemsData = createAsyncThunk(
    "createItems/save",
    async (itemsData, thunkAPI) => {
      try {
        const response = "todo";
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  const itemsCreateSlice = createSlice({
    name: "itemsCreate",
    initialState: initialItemsCreateState,
    reducers: {
      addItem: (state) => {
        if (state.items.length < 40) {
          state.items.push({
            item_name: "",
            item_description: "",
            item_amount: "",
            item_max: ""
          });
        }
      },
      removeItem: (state) => {
        state.items.pop();
    },
      updateItemsField: (state, action) => {
        const { index, name, value } = action.payload;
        state.items[index][name] = value;
      },
      markSectionAsValid: (state) => {
        state.isValid = true;
      },
      markSectionAsInvalid: (state) => {
        state.isValid = false;
      },
    },
  });
  
  export const createItemsActions = itemsCreateSlice.actions;
  export default itemsCreateSlice.reducer;