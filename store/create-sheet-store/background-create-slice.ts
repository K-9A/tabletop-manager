import { createSlice } from '@reduxjs/toolkit';
import { BackgroundTypes } from '@/components/types/sheet-types/field-types';


const initialBackgroundCreateState:BackgroundTypes = {

    personality: "",
    backstory: "",
    bonds: "",
    appearance: "",
    ideals: "",
    flaws: "",
    valuables: "",
    additional_traits: "",
    isLoading: false,
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
      markSectionAsValid: (state) => {
        state.isValid = true;
      },
      markSectionAsInvalid: (state) => {
        state.isValid = false;
      },
      resetBackground: () => {
        return initialBackgroundCreateState;
      },
    },

})

export const createBackgroundActions = backgroundCreateSlice.actions;
export default backgroundCreateSlice.reducer;