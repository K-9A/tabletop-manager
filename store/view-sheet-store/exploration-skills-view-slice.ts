import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ExplorationSkillsTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSheetFieldArgs } from "@/components/types/sheet-types/update-args";
import { validExplorationSkillsFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialViewExplorationSkillsState: ExplorationSkillsTypes = {
    acrobatics: null || 0,
    animal: null || 0,
    arcana: null || 0,
    athletics: null || 0,
    deception: null || 0,
    history: null || 0,
    insight: null || 0,
    intimidation: null || 0,
    investigation: null || 0,
    medicine: null || 0,
    nature: null || 0,
    perception: null || 0,
    performance: null || 0,
    persuasion: null || 0,
    religion: null || 0,
    sleight: null || 0,
    stealth: null || 0,
    survival: null || 0,
    isLoading: false,
    error: null,
  };


const baseURL = "/api/character-sheet-view/exploration-skills-view";

//Fetch data for view sheet subsection
export const fetchExplorationSkillsData = createAsyncThunk(
  "explorationSkillsView/fetchExplorationSkillsData",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}?characterId=${characterId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch character data");
    }
  }
);

//Handle user updates via PUT requests for view sheet subsection
export const updateExplorationSkillsField = createAsyncThunk(
  "explorationSkillsView/updateField",
  async (
    { characterId, fieldName, value }: UpdateSheetFieldArgs,
    { rejectWithValue }
  ) => {
    if (!validExplorationSkillsFieldNames.includes(fieldName)) {
      return rejectWithValue("Invalid field");
    }

    try {
      const response = await axios.put(
        `${baseURL}?characterId=${characterId}&fieldName=${fieldName}&value=${value}`
      );
      if (response.status === 200) {
        return { fieldName, value };
      } else {
        return rejectWithValue("Failed to update field");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to update field");
    }
  }
);

const explorationSkillsViewSlice = createSlice({
  name: "explorationSkillsView",
  initialState: initialViewExplorationSkillsState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchExplorationSkillsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchExplorationSkillsData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchExplorationSkillsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateExplorationSkillsField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateExplorationSkillsField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewExplorationSkillsActions = explorationSkillsViewSlice.actions;
export default explorationSkillsViewSlice.reducer;
