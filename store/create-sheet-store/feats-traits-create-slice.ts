import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialFeatsTraitsCreateState = {
  feats_traits: "",
  weapon_proficiency: "",
  armor_proficiency: "",
  other_proficiency: "",
  buffs: "",
  debuffs: "",

  loading: false,
  isValid: false,
  error: null,
};

//TODO: For the submission process to be done later with Axios
export const saveFeatsTraitsData = createAsyncThunk(
  "createFeatsTraits/save",
  async (backgroundData, thunkAPI) => {
    try {
      const response = "todo";
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const featsTraitsCreateSlice = createSlice({
  name: "featsTraitsCreate",
  initialState: initialFeatsTraitsCreateState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    //Probably don't need this
    updateFeatsTraitsCreate: (
      state,
      action: PayloadAction<Partial<typeof initialFeatsTraitsCreateState>>
    ) => {
      Object.assign(state, action.payload);
    },
    markSectionAsValid: (state) => {
      state.isValid = true;
    },
    markSectionAsInvalid: (state) => {
      state.isValid = false;
    },
  },
});

export const createFeatsTraitsActions = featsTraitsCreateSlice.actions;
export default featsTraitsCreateSlice.reducer;
