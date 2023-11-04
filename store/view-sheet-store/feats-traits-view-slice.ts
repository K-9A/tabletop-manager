import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FeatsTraitsTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSheetFieldArgs } from "@/components/types/sheet-types/update-args";
import { validFeatsTraitsFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";


const initialFeatsTraitsViewState:FeatsTraitsTypes = {

    feats_traits: "",
    weapon_proficiency: "",
    armor_proficiency: "",
    other_proficiency: "",
    buffs: "",
    debuffs: "",
    isLoading: false,
    error: null,

};


const baseURL = "/api/character-sheet-view/feats-traits-view";

//Fetch data for view sheet subsection
export const fetchFeatsTraitsData = createAsyncThunk(
  "featsTraitsView/fetchFeatsTraitsData",
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
export const updateFeatsTraitsField = createAsyncThunk(
  "featsTraitsView/updateField",
  async (
    { characterId, fieldName, value }: UpdateSheetFieldArgs,
    { rejectWithValue }
  ) => {
    if (!validFeatsTraitsFieldNames.includes(fieldName)) {
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

const featsTraitsViewSlice = createSlice({
  name: "featsTraitsView",
  initialState: initialFeatsTraitsViewState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchFeatsTraitsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeatsTraitsData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchFeatsTraitsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateFeatsTraitsField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateFeatsTraitsField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewBackgroundActions = featsTraitsViewSlice.actions;
export default featsTraitsViewSlice.reducer;
