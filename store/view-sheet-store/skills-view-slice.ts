import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SkillsTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSkillFieldArgs } from "@/components/types/sheet-types/update-args";
import { validSkillsFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialSkillsViewState: SkillsTypes = {
  skills: [
    {
      skill_id: null,
      skill_name: "",
      skill_description: "",
      skill_cooldown: "",
      skill_available: "",
    },
  ],
  isLoading: false,
  error: null,
};

const baseURL = "/api/character-sheet-view/skills-view";

//Fetch data for view sheet subsection
export const fetchSkillsData = createAsyncThunk(
  "skillsView/fetchSkillsData",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}?characterId=${characterId}`);
      // Assuming the API returns an array of skills
      if (Array.isArray(response.data)) {
        // Normalize data if necessary or return directly
        return response.data.map((skill) => ({
          ...skill,
          // Include the id from the response
          id: skill.id,

          // Ensure all fields are present or provide defaults
          skill_name: skill.skill_name || "",
          skill_description: skill.skill_description || "",
          skill_cooldown: skill.skill_cooldown || "",
          skill_available: skill.skill_available || "",
        }));
      } else {
        return rejectWithValue("Invalid data format received from API");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to fetch character data");
    }
  }
);

//Inserting a skill when the user hits "add" button
export const addSkill = createAsyncThunk(
  "skillsView/addSkill",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}`, { characterId });
      if (response.status === 201) {
        return response.data; // The new skill, including its ID
      } else {
        return rejectWithValue("Failed to add skill");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to add skill");
    }
  }
);

//Removing a skill when the user clicks the delete icon
export const removeSkill = createAsyncThunk(
  "skillsView/removeSkill",
  async (
    { characterId, skillId }: { characterId: string; skillId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.delete(
        `${baseURL}?characterId=${characterId}&skillId=${skillId}`
      );
      if (response.status === 200) {
        return skillId; // Return the ID of the skill to remove from state
      } else {
        return rejectWithValue("Failed to remove skill");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to remove skill");
    }
  }
);

//Handle user updates via PUT requests for view sheet subsection
export const updateSkillsField = createAsyncThunk(
  "skillsView/updateField",
  async (
    { characterId, skillId, fieldName, value }: UpdateSkillFieldArgs, // Include skillId in the arguments
    { rejectWithValue }
  ) => {
    if (!validSkillsFieldNames.includes(fieldName)) {
      return rejectWithValue("Invalid field");
    }

    try {
      const response = await axios.put(
        `${baseURL}/${skillId}`, // Use RESTful convention by including skillId in the URL
        {
          characterId,
          fieldName,
          value,
        }
      );
      if (response.status === 200) {
        return { skillId, fieldName, value }; // Include skillId in the return value
      } else {
        return rejectWithValue("Failed to update field");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to update field");
    }
  }
);

const skillsViewSlice = createSlice({
  name: "skillsView",
  initialState: initialSkillsViewState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchSkillsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSkillsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.skills = action.payload; // Set the fetched skills into the state
      })
      .addCase(fetchSkillsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data insertion
      .addCase(addSkill.fulfilled, (state, action) => {
        state.skills.push(action.payload);
      })

      //For data removal
      .addCase(removeSkill.fulfilled, (state, action) => {
        const skillId = action.payload;
        state.skills = state.skills.filter(
          (skill) => skill.skill_id !== skillId
        );
      })

      //For data updates
      .addCase(updateSkillsField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateSkillsField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewSkillsActions = skillsViewSlice.actions;
export default skillsViewSlice.reducer;
