import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';


const initialCreateCombatStatsState = {

    current_hp: "",
    max_hp: "",
    temp_hp: "",
    armor_class: "",
    hit_dice: "",
    max_hit_dice: "",
    speed: "",
    initiative: "",
    inspiration: "",
    spell_casting: "",
    spell_save: "",
    spell_attack: "",
    loading: false,
    isValid: false,
    error: null

};

//TODO: For the submission process to be done later with Axios
export const saveCombatStatsData = createAsyncThunk(
    'createCombatStats/save',
    async (combatStatsData, thunkAPI) => {
      try {
        const response = "todo";
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  const combatStatsCreateSlice = createSlice({
    name: 'combatStatsCreate',
    initialState: initialCreateCombatStatsState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      //Probably don't need this
      updateCombatStatsCreate: (state, action: PayloadAction<Partial<typeof initialCreateCombatStatsState>>) => {
        Object.assign(state, action.payload);
      },
      setValidity: (state, action: PayloadAction<boolean>) => {
        state.isValid = action.payload;
      },
    },
})

export const createCombatStatsActions = combatStatsCreateSlice.actions;
export default combatStatsCreateSlice.reducer;