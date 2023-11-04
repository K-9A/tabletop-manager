import { createSlice } from "@reduxjs/toolkit";
import { FeatsTraitsTypes } from "@/components/types/sheet-types/field-types";

const initialFeatsTraitsCreateState: FeatsTraitsTypes = {

  feats_traits: "",
  weapon_proficiency: "",
  armor_proficiency: "",
  other_proficiency: "",
  buffs: "",
  debuffs: "",
  isLoading: false,
  isValid: false,
  error: null,

};

const featsTraitsCreateSlice = createSlice({
  name: "featsTraitsCreate",
  initialState: initialFeatsTraitsCreateState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    markSectionAsValid: (state) => {
      state.isValid = true;
    },
    markSectionAsInvalid: (state) => {
      state.isValid = false;
    },
    resetFeatsTraits: () => {
      return initialFeatsTraitsCreateState;
    },
  },
});

export const createFeatsTraitsActions = featsTraitsCreateSlice.actions;
export default featsTraitsCreateSlice.reducer;
