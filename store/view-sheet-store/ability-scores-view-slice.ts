import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AbilityScoreTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSheetFieldArgs } from "@/components/types/sheet-types/update-args";
import { validAbilityScoresFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialViewAbilityScoresState: AbilityScoreTypes = {
    str_score: null,
    dex_score: null,
    con_score: null,
    int_score: null,
    wis_score: null,
    chr_score: null,
    str_mod: null,
    dex_mod: null,
    con_mod: null,
    int_mod: null,
    wis_mod: null,
    chr_mod: null,
    str_save: null,
    dex_save: null,
    con_save: null,
    int_save: null,
    wis_save: null,
    chr_save: null,
    passive_perception: null,
    isLoading: false,
    isValid: false,
    error: null
  };

const baseURL = "/api/character-sheet-view/ability-scores-view";

//Fetch data for view sheet subsection
export const fetchAbilityScoresData = createAsyncThunk(
  "abilityScoresView/fetchAbilityScoresData",
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
export const updateAbilityScoresField = createAsyncThunk(
  "abilityScoresView/updateField",
  async (
    { characterId, fieldName, value }: UpdateSheetFieldArgs,
    { rejectWithValue }
  ) => {
    if (!validAbilityScoresFieldNames.includes(fieldName)) {
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

const abilityScoresViewSlice = createSlice({
  name: "abilityScoresView",
  initialState: initialViewAbilityScoresState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchAbilityScoresData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAbilityScoresData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchAbilityScoresData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateAbilityScoresField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateAbilityScoresField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewAbilityScoresActions = abilityScoresViewSlice.actions;
export default abilityScoresViewSlice.reducer;
