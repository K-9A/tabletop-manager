import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialCreateAbilityScoresState = {
  str_score: "",
  dex_score: "",
  con_score: "",
  int_score: "",
  wis_score: "",
  chr_score: "",
  str_mod: "",
  dex_mod: "",
  con_mod: "",
  int_mod: "",
  wis_mod: "",
  chr_mod: "",
  str_save: "",
  dex_save: "",
  con_save: "",
  int_save: "",
  wis_save: "",
  chr_save: "",
  passive_perception: "",
  loading: false,
  isValid: false,
  error: null
};


export const saveAbilityScoresData = createAsyncThunk(
    'createAbilityScores/save',
    async (coreProfileData, thunkAPI) => {
      try {
        const response = "todo";
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  const abilityScoresCreateSlice = createSlice({
    name: 'abilityScoresCreate',
    initialState: initialCreateAbilityScoresState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      //Probably don't need this
      updateCoreProfileCreate: (state, action: PayloadAction<Partial<typeof initialCreateAbilityScoresState>>) => {
        Object.assign(state, action.payload);
      },
      setValidity: (state, action: PayloadAction<boolean>) => {
        state.isValid = action.payload;
      },
    },
})


export const createAbilityScoresActions = abilityScoresCreateSlice.actions;
export default abilityScoresCreateSlice.reducer;