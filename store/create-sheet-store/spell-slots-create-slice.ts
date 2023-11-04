import { createSlice } from "@reduxjs/toolkit";
import { SpellSlotTypes } from "@/components/types/sheet-types/field-types";

const initialCreateSpellSlotsState: SpellSlotTypes = {
    first_available: null,
    first_max: null,
    second_available: null,
    second_max: null,
    third_available: null,
    third_max: null,
    fourth_available: null,
    fourth_max: null,
    fifth_available: null,
    fifth_max: null,
    sixth_available: null,
    sixth_max: null,
    seventh_available: null,
    seventh_max: null,
    eighth_available: null,
    eighth_max: null,
    nineth_available: null,
    nineth_max: null,
    isLoading: false,
    isValid: false,
    error: null
  };
  

  const spellSlotsCreateSlice = createSlice({
    name: 'spellSlotsCreate',
    initialState: initialCreateSpellSlotsState,
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
      resetSpellSlots: () => {
        return initialCreateSpellSlotsState;
      },
    },
})


export const createSpellSlotsActions = spellSlotsCreateSlice.actions;
export default spellSlotsCreateSlice.reducer;