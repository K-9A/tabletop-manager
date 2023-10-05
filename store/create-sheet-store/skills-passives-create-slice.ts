import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialSkillsPassivesCreateState = {
    skill_name: "",
    skill_description: "",
    skill_cooldown: "",
    skill_available: "",
    passive_name: "",
    passive_description: "",
    passive_cooldown: "",
    passive_available: "",
  
    loading: false,
    isValid: false,
    error: null,
  };


  //TODO: For the submission process to be done later with Axios
export const saveSkillsPassivesData = createAsyncThunk(
    "createSkillsPassives/save",
    async (skillsPassivesData, thunkAPI) => {
      try {
        const response = "todo";
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  

const skillsPassivesCreateSlice = createSlice({
    name: "skillsPassivesCreate",
    initialState: initialSkillsPassivesCreateState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      //Probably don't need this
      updateSkillsPassivesCreate: (
        state,
        action: PayloadAction<Partial<typeof initialSkillsPassivesCreateState>>
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
  
  export const createSkillsPassivesActions = skillsPassivesCreateSlice.actions;
  export default skillsPassivesCreateSlice.reducer;
  