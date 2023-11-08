import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpellsTypes } from "@/components/types/sheet-types/field-types";
import { UpdateSpellFieldArgs } from "@/components/types/sheet-types/update-args";
import { validSpellsFieldNames } from "@/components/helper/valid-character-fields";
import axios from "axios";

const initialSpellsViewState: SpellsTypes = {
  spells: [],
  isLoading: false,
  error: null,
};

const baseURL = "/api/character-sheet-view/spells-view";

//Fetch data for view sheet subsection
export const fetchSpellsData = createAsyncThunk(
  "spellssView/fetchSpellsData",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}?characterId=${characterId}`);
      // Assuming the API returns an array of spells

      // Check if the response has a 'data' property and it is an array
      if (response.data && Array.isArray(response.data.data)) {
        // Map over the array inside the 'data' property
        return response.data.data.map((spell) => ({
          spell_id: spell.spell_id,
          spell_name: spell.spell_name || "",
          spell_description: spell.spell_description || "",
          spell_tier: spell.spell_tier || "",
        }));
      } else {
        // Handle the case where the data is not in the expected format
        throw new Error("Invalid data format received from API");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to fetch character data");
    }
  }
);

//Inserting a spell when the user hits "add" button
export const addSpell = createAsyncThunk(
  "spellsView/addSpell",
  async (characterId: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}?characterId=${characterId}`);
      if (response.status === 201) {
        return response.data; // The new spell, including its ID
      } else {
        return rejectWithValue("Failed to add spell");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to add spell");
    }
  }
);

//Handle user updates via PUT requests for view sheet subsection
export const updateSpellsField = createAsyncThunk(
  "spellsView/updateField",
  async (
    { characterId, spellId, fieldName, value }: UpdateSpellFieldArgs, // Include spellId in the arguments
    { rejectWithValue }
  ) => {

    if (!validSpellsFieldNames.includes(fieldName)) {
      return rejectWithValue("Invalid field");
    }

    try {
      const response = await axios.put(
        `${baseURL}?characterId=${characterId}&spellId=${spellId}&fieldName=${fieldName}&value=${value}` // Use RESTful convention by including spellId in the URL
      );
      if (response.status === 200) {
        return { spellId, fieldName, value }; // Include spellId in the return value
      } else {
        return rejectWithValue("Failed to update field");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to update field");
    }
  }
);

//Removing a spell when the user clicks the delete icon
export const removeSpell = createAsyncThunk(
  "spellsView/removeSpell",
  async (
    { characterId, spellId }: { characterId: string; spellId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.delete(
        `${baseURL}?characterId=${characterId}&spellId=${spellId}`
      );
      if (response.status === 200) {
        return spellId; // Return the ID of the spell to remove from state
      } else {
        return rejectWithValue("Failed to remove spell");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to remove spell");
    }
  }
);



const spellsViewSlice = createSlice({
  name: "spellsView",
  initialState: initialSpellsViewState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchSpellsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSpellsData.fulfilled, (state, action) => {
        state.isLoading = false;
        // If no spells are returned, the state.spells will just be an empty array
        state.spells = action.payload; // Set the fetched spells into the state
      })
      .addCase(fetchSpellsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data insertion
      .addCase(addSpell.fulfilled, (state, action) => {
        // Add the new spell to the spells array
        state.spells.push(action.payload);
      })

      //For data removal
      .addCase(removeSpell.fulfilled, (state, action) => {
        // Remove the spell with the given spell_id
        state.spells = state.spells.filter(
          (spell) => spell.spell_id !== action.payload
        );
      })

      //For data updates
      .addCase(updateSpellsField.fulfilled, (state, action) => {
        const { spellId, fieldName, value } = action.payload;
        const spellIndex = state.spells.findIndex(
          (spell) => spell.spell_id === spellId
        );
        if (spellIndex !== -1) {
          state.spells[spellIndex][fieldName] = value;
        }
      })
      .addCase(updateSpellsField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewSpellsActions = spellsViewSlice.actions;
export default spellsViewSlice.reducer;
