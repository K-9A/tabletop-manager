import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CoreProfileTypes } from "@/components/types/sheet-types/view-types";
import { UpdateSheetFieldArgs } from "@/components/types/sheet-types/update-args";
import { validCoreProfileFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialViewCoreProfileState: CoreProfileTypes = {
  character_name: "",
  char_class: "",
  race: "",
  proficiency: null || 0,
  char_level: null || 0,
  experience: null || 0,
  next_level: null || 0,
  affinity: "",
  isLoading: false,
  error: null,
};

const baseURL = "/api/character-sheet-view/core-profile-view";

//Fetch data for view sheet subsection
export const fetchCoreProfileData = createAsyncThunk(
  "coreProfileView/fetchCoreProfileData",
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
export const updateCoreProfileField = createAsyncThunk(
  "coreProfileView/updateField",
  async (
    { characterId, fieldName, value }: UpdateSheetFieldArgs,
    { rejectWithValue }
  ) => {
    if (!validCoreProfileFieldNames.includes(fieldName)) {
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

const coreProfileViewSlice = createSlice({
  name: "coreProfileView",
  initialState: initialViewCoreProfileState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchCoreProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoreProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchCoreProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateCoreProfileField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateCoreProfileField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewCoreProfileActions = coreProfileViewSlice.actions;
export default coreProfileViewSlice.reducer;
