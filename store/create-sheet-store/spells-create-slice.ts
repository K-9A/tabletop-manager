import { createSlice } from "@reduxjs/toolkit";
import { SpellsTypes } from "@/components/types/sheet-types/field-types";


const initialSpellsCreateState:SpellsTypes = {
    spells: [],
    isLoading: false,
    isValid: false,
    error: null,
  };
  
  const spellsCreateSlice = createSlice({
    name: "spellsCreate",
    initialState: initialSpellsCreateState,
    reducers: {
      addSpell: (state) => {
        if (state.spells.length < 40) {
          state.spells.push({
            spell_name: "",
            spell_description: "",
            spell_tier: ""
          });
        }
      },
      removeSpells: (state, action) => {
        const index = action.payload; // Get the index from the action payload
        if (index >= 0 && index < state.spells.length) {
          state.spells.splice(index, 1); // Remove the spell at the specified index
        }
      },
      updateSpellsField: (state, action) => {
        const { index, name, value } = action.payload;
        state.spells[index][name] = value;
      },
      markSectionAsValid: (state) => {
        state.isValid = true;
      },
      markSectionAsInvalid: (state) => {
        state.isValid = false;
      },
      resetSpells: (state) => {
        state.spells = [];
      },
    },
  });
  
  export const createSpellsActions = spellsCreateSlice.actions;
  export default spellsCreateSlice.reducer;
  