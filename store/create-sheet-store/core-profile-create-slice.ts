import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface CreateCoreProfileState {
    name: string;
    char_class: number;
    race: string;
    proficiency: number;
    char_level: number;
    experience: number;
    next_level: number;
    affinity: string;
    isValid: false;
    error: string | null;
}


const initialCreateCoreProfileState = {

    name: "",
    char_class: "",
    race: "",
    proficiency: "",
    char_level: "",
    experience: "",
    next_level: "",
    affinity: "",
    loading: false,
    isValid: false,
    error: null

};

interface CharacterType {
    id: string;
    name: string;
    isValid: boolean;
    error: string;

}

//TODO: For the submission process to be done later with Axios
export const saveCoreProfileData = createAsyncThunk(
  'createCoreProfile/save',
  async (coreProfileData, thunkAPI) => {
    try {
      const response = "todo";
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


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
    },
})

export const createCoreProfileActions = coreProfileCreateSlice.actions;
export default coreProfileCreateSlice.reducer;