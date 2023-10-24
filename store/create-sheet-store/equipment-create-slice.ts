import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialEquipmentCreateState = {
    equipment: [
      {
        equipment_name: "",
        equipment_category: "",
        equipment_properties: "",
      },
    ],
  
    loading: false,
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
      removeEquipment: (state) => {
        state.equipment.pop();
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
        return initialEquipmentCreateState;
      },
    },
  });
  
  export const createEquipmentActions = equipmentCreateSlice.actions;
  export default equipmentCreateSlice.reducer;
  