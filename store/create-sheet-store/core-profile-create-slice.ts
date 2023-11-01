import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoreProfileTypes } from '@/components/types/sheet-types/view-types';


const initialCreateCoreProfileState:CoreProfileTypes = {

    name: "",
    char_class: null,
    race: "",
    proficiency: null,
    char_level: null,
    experience: null,
    next_level: null,
    affinity: "",
    isLoading: false,
    isValid: false,
    error: null

};

const coreProfileCreateSlice = createSlice({
    name: 'coreProfileCreate',
    initialState: initialCreateCoreProfileState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      setValidity: (state, action: PayloadAction<boolean>) => {
        state.isValid = action.payload;
      },
      resetCoreProfile: () => {
        return initialCreateCoreProfileState;
      },
    },
})

export const createCoreProfileActions = coreProfileCreateSlice.actions;
export default coreProfileCreateSlice.reducer;