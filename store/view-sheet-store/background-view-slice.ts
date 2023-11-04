import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BackgroundTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSheetFieldArgs } from "@/components/types/sheet-types/update-args";
import { validBackgroundFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";


const initialBackgroundViewState:BackgroundTypes = {

    personality: "",
    backstory: "",
    bonds: "",
    appearance: "",
    ideals: "",
    flaws: "",
    valuables: "",
    additional_traits: "",
    isLoading: false,
    error: null,

};


const baseURL = "/api/character-sheet-view/background-view";

//Fetch data for view sheet subsection
export const fetchBackgroundData = createAsyncThunk(
  "backgroundView/fetchBackgroundData",
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
export const updateBackgroundField = createAsyncThunk(
  "backgroundView/updateField",
  async (
    { characterId, fieldName, value }: UpdateSheetFieldArgs,
    { rejectWithValue }
  ) => {
    if (!validBackgroundFieldNames.includes(fieldName)) {
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

const backgroundViewSlice = createSlice({
  name: "backgroundView",
  initialState: initialBackgroundViewState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchBackgroundData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBackgroundData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchBackgroundData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateBackgroundField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateBackgroundField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewBackgroundActions = backgroundViewSlice.actions;
export default backgroundViewSlice.reducer;
