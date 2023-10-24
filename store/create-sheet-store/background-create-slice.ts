import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface BackgroundCreateState {
    personality: string;
    backstory: string;
    bonds: string;
    appearance: string;
    ideals: string;
    flaws: string;
    valuables: string;
    additional_traits: string;
    isValid: false;
    error: string | null;
}


const initialBackgroundCreateState = {

    personality: "",
    backstory: "",
    bonds: "",
    appearance: "",
    ideals: "",
    flaws: "",
    valuables: "",
    additional_traits: "",
    loading: false,
    isValid: false,
    error: null

};


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
      resetBackground: (state) => {
        return initialBackgroundCreateState;
      },
    },

})

export const createBackgroundActions = backgroundCreateSlice.actions;
export default backgroundCreateSlice.reducer;