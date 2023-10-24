import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialSpellsCreateState = {
    spells: [
      {
        spell_name: "",
        spell_description: "",
        spell_tier: "",
      },
    ],
  
    loading: false,
    isValid: false,
    error: null,
  };
  
  const spellsCreateSlice = createSlice({
    name: "spellsCreate",
    initialState: initialSpellsCreateState,
    reducers: {
      addSpell: (state) => {
        if (state.spells.length < 50) {
          state.spells.push({
            spell_name: "",
            spell_description: "",
            spell_tier: ""
          });
        }
      },
      removeSpell: (state) => {
        state.spells.pop();
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
        return initialSpellsCreateState;
      },
    },
  });
  
  export const createSpellsActions = spellsCreateSlice.actions;
  export default spellsCreateSlice.reducer;
  