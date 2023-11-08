import { createSlice } from "@reduxjs/toolkit";
import { EquipmentTypes } from "@/components/types/sheet-types/field-types";

const initialEquipmentCreateState:EquipmentTypes = {
  equipment: [],
  isLoading: false,
  isValid: false,
  error: null,
};

const equipmentCreateSlice = createSlice({
  name: "equipmentCreate",
  initialState: initialEquipmentCreateState,
  reducers: {
    addEquipment: (state) => {
      if (state.equipment.length < 20) {
        state.equipment.push({
          equipment_name: "",
          equipment_category: "",
          equipment_properties: "",
        });
      }
    },
    removeEquipment: (state, action) => {
      const index = action.payload; // Get the index from the action payload
      if (index >= 0 && index < state.equipment.length) {
        state.equipment.splice(index, 1); // Remove the equipment at the specified index
      }
    },
    updateEquipmentField: (state, action) => {
      const { index, name, value } = action.payload;
      state.equipment[index][name] = value;
    },
    markSectionAsValid: (state) => {
      state.isValid = true;
    },
    markSectionAsInvalid: (state) => {
      state.isValid = false;
    },
    resetEquipment: (state) => {
      state.equipment = [];
    },
  },
});

export const createEquipmentActions = equipmentCreateSlice.actions;
export default equipmentCreateSlice.reducer;
