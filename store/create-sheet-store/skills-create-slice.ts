import { createSlice } from "@reduxjs/toolkit";
import { SkillsTypes } from "@/components/types/sheet-types/field-types";

const initialSkillsCreateState:SkillsTypes = {
  skills: [],
  isLoading: false,
  isValid: false,
  error: null,
};

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
    removeSkill: (state, action) => {
      const index = action.payload; // Get the index from the action payload
      if (index >= 0 && index < state.skills.length) {
        state.skills.splice(index, 1); // Remove the skill at the specified index
      }
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
    resetSkills: (state) => {
      state.skills = [];
    },
  },
});

export const createSkillsActions = skillsCreateSlice.actions;
export default skillsCreateSlice.reducer;
