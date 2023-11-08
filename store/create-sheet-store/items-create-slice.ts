import { createSlice } from "@reduxjs/toolkit";
import { ItemsTypes } from "@/components/types/sheet-types/field-types";

const initialItemsCreateState:ItemsTypes = {
  items: [],
  isLoading: false,
  isValid: false,
  error: null,
};

const itemsCreateSlice = createSlice({
  name: "itemsCreate",
  initialState: initialItemsCreateState,
  reducers: {
    addItem: (state) => {
      if (state.items.length < 30) {
        state.items.push({
          item_name: "",
          item_description: "",
          item_amount: "",
          item_max: ""
        });
      }
    },
    removeItem: (state, action) => {
      const index = action.payload; // Get the index from the action payload
      if (index >= 0 && index < state.items.length) {
        state.items.splice(index, 1); // Remove the item at the specified index
      }
    },
    updateItemField: (state, action) => {
      const { index, name, value } = action.payload;
      state.items[index][name] = value;
    },
    markSectionAsValid: (state) => {
      state.isValid = true;
    },
    markSectionAsInvalid: (state) => {
      state.isValid = false;
    },
    resetItems: (state) => {
      state.items = [];
    },
  },
});

export const createItemsActions = itemsCreateSlice.actions;
export default itemsCreateSlice.reducer;
