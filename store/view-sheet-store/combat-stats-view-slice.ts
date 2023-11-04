import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CombatStatsTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSheetFieldArgs } from "@/components/types/sheet-types/update-args";
import { validCombatStatsFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialViewCombatStatsState: CombatStatsTypes = {
    current_hp: null || 0,
    max_hp: null || 0,
    temp_hp: null || 0,
    armor_class: null || 0,
    hit_dice: null || 0,
    max_hit_dice: null || 0,
    speed: null || 0,
    initiative: null || 0,
    inspiration: null || 0,
    spell_casting: "",
    spell_save: null || 0,
    spell_attack: null || 0,
    isLoading: false,
    error: null,
  };

const baseURL = "/api/character-sheet-view/combat-stats-view";

//Fetch data for view sheet subsection
export const fetchCombatStatsData = createAsyncThunk(
  "combatStatsView/fetchCombatStatsData",
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
export const updateCombatStatsField = createAsyncThunk(
  "combatStatsView/updateField",
  async (
    { characterId, fieldName, value }: UpdateSheetFieldArgs,
    { rejectWithValue }
  ) => {
    if (!validCombatStatsFieldNames.includes(fieldName)) {
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

const combatStatsViewSlice = createSlice({
  name: "combatStatsView",
  initialState: initialViewCombatStatsState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchCombatStatsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCombatStatsData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchCombatStatsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateCombatStatsField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateCombatStatsField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewCombatStatsActions = combatStatsViewSlice.actions;
export default combatStatsViewSlice.reducer;
