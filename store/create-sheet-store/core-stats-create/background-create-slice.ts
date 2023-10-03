import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface BackgroundCreateState {
    personality: string;
    backstory: string;
    bonds: string;
    appearance: string;
    ideas: string;
    flaws: string;
    valuables: string;
    additional_traits: string;
    additional_features: string;
    isValid: false;
    error: string | null;
}


const initialBackgroundCreateState = {

    personality: "",
    backstory: "",
    bonds: "",
    appearance: "",
    ideas: "",
    flaws: "",
    valuables: "",
    additional_traits: "",
    additional_features: "",
    loading: false,
    isValid: false,
    error: null

};



//TODO: For the submission process to be done later with Axios
export const saveBackgroundData = createAsyncThunk(
  'createBackgrond/save',
  async (backgroundData, thunkAPI) => {
    try {
      const response = "todo";
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const backgroundCreateSlice = createSlice({
    name: 'backgroundCreate',
    initialState: initialBackgroundCreateState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      //Probably don't need this
      updateBackgroundCreate: (state, action: PayloadAction<Partial<typeof initialBackgroundCreateState>>) => {
        Object.assign(state, action.payload);
      },
      markSectionAsValid: (state) => {
        state.isValid = true;
      },
      markSectionAsInvalid: (state) => {
        state.isValid = false;
      },
    },

})

export const createBackgroundActions = backgroundCreateSlice.actions;
export default backgroundCreateSlice.reducer;