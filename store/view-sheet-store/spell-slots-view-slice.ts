import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpellSlotTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSheetFieldArgs } from "@/components/types/sheet-types/update-args";
import { validSpellSlotsFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";


const initialViewSpellSlotsState: SpellSlotTypes = {
    first_available: null || 0,
    first_max: null || 0,
    second_available: null || 0,
    second_max: null || 0,
    third_available: null || 0,
    third_max: null || 0,
    fourth_available: null || 0,
    fourth_max: null || 0,
    fifth_available: null || 0,
    fifth_max: null || 0,
    sixth_available: null || 0,
    sixth_max: null || 0,
    seventh_available: null || 0,
    seventh_max: null || 0,
    eighth_available: null || 0,
    eighth_max: null || 0,
    nineth_available: null || 0,
    nineth_max: null || 0,
    isLoading: false,
    error: null
  };
  

const baseURL = "/api/character-sheet-view/spell-slots-view";

//Fetch data for view sheet subsection
export const fetchSpellSlotsData = createAsyncThunk(
  "spellSlotsView/fetchSpellSlotsData",
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
export const updateSpellSlotsField = createAsyncThunk(
  "spellSlotsView/updateField",
  async (
    { characterId, fieldName, value }: UpdateSheetFieldArgs,
    { rejectWithValue }
  ) => {
    if (!validSpellSlotsFieldNames.includes(fieldName)) {
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

const spellSlotsViewSlice = createSlice({
  name: "spellSlotsView",
  initialState: initialViewSpellSlotsState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchSpellSlotsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSpellSlotsData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchSpellSlotsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateSpellSlotsField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateSpellSlotsField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewSpellSlotsActions = spellSlotsViewSlice.actions;
export default spellSlotsViewSlice.reducer;