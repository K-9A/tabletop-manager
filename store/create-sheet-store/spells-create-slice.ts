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
  

  //TODO: For the submission process to be done later with Axios
export const saveSpellsData = createAsyncThunk(
    "createSpells/save",
    async (spellsData, thunkAPI) => {
      try {
        const response = "todo";
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


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
    },
  });
  
  export const createSpellsActions = spellsCreateSlice.actions;
  export default spellsCreateSlice.reducer;
  