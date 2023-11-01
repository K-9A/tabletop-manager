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
      //Probably don't need this
      updateCoreProfileCreate: (state, action: PayloadAction<Partial<typeof initialCreateCoreProfileState>>) => {
        Object.assign(state, action.payload);
      },
      setValidity: (state, action: PayloadAction<boolean>) => {
        state.isValid = action.payload;
      },
      resetCoreProfile: (state) => {
        return initialCreateCoreProfileState;
      },
    },
})

export const createCoreProfileActions = coreProfileCreateSlice.actions;
export default coreProfileCreateSlice.reducer;