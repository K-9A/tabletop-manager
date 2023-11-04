import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AbilityScoreTypes } from "@/components/types/sheet-types/field-types";


const initialCreateAbilityScoresState: AbilityScoreTypes = {
  str_score: null,
  dex_score: null,
  con_score: null,
  int_score: null,
  wis_score: null,
  chr_score: null,
  str_mod: null,
  dex_mod: null,
  con_mod: null,
  int_mod: null,
  wis_mod: null,
  chr_mod: null,
  str_save: null,
  dex_save: null,
  con_save: null,
  int_save: null,
  wis_save: null,
  chr_save: null,
  passive_perception: null,
  isLoading: false,
  isValid: false,
  error: null
};


  const abilityScoresCreateSlice = createSlice({
    name: 'abilityScoresCreate',
    initialState: initialCreateAbilityScoresState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      setValidity: (state, action: PayloadAction<boolean>) => {
        state.isValid = action.payload;
      },
      resetAbilityScores: () => {
        return initialCreateAbilityScoresState;
      },
    },
})


export const createAbilityScoresActions = abilityScoresCreateSlice.actions;
export default abilityScoresCreateSlice.reducer;