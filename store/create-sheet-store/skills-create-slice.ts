import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialSkillsCreateState = {
  skills: [
    {
      skill_name: "",
      skill_description: "",
      skill_cooldown: "",
      skill_available: "",
    },
  ],

  loading: false,
  isValid: false,
  error: null,
};

//TODO: For the submission process to be done later with Axios
export const saveSkillsData = createAsyncThunk(
  "createSkills/save",
  async (skillsData, thunkAPI) => {
    try {
      const response = "todo";
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const skillsCreateSlice = createSlice({
  name: "skillsCreate",
  initialState: initialSkillsCreateState,
  reducers: {
    addSkill: (state) => {
      if (state.skills.length < 30) {
        state.skills.push({
          skill_name: "",
          skill_description: "",
          skill_cooldown: "",
          skill_available: "",
        });
      }
    },
    removeSkill: (state) => {
      state.skills.pop();
  },
    updateSkillField: (state, action) => {
      const { index, name, value } = action.payload;
      state.skills[index][name] = value;
    },
    markSectionAsValid: (state) => {
      state.isValid = true;
    },
    markSectionAsInvalid: (state) => {
      state.isValid = false;
    },
  },
});

export const createSkillsActions = skillsCreateSlice.actions;
export default skillsCreateSlice.reducer;
