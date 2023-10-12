import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";


const initialCreateSpellSlotsState = {
    first_available: "",
    first_max: "",
    second_available: "",
    second_max: "",
    third_available: "",
    third_max: "",
    fourth_available: "",
    fourth_max: "",
    fifth_available: "",
    fifth_max: "",
    sixth_available: "",
    sixth_max: "",
    seventh_available: "",
    seventh_max: "",
    eighth_available: "",
    eighth_max: "",
    nineth_available: "",
    nineth_max: "",
    loading: false,
    isValid: false,
    error: null
  };
  
  
export const saveSpellSlotsData = createAsyncThunk(
    'createSpellSlots/save',
    async (spellSlotsData, thunkAPI) => {
      try {
        const response = "todo";
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  const spellSlotsCreateSlice = createSlice({
    name: 'spellSlotsCreate',
    initialState: initialCreateSpellSlotsState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      //Probably don't need this
      updateSpellSlotsCreate: (state, action: PayloadAction<Partial<typeof initialCreateSpellSlotsState>>) => {
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


export const createSpellSlotsActions = spellSlotsCreateSlice.actions;
export default spellSlotsCreateSlice.reducer;