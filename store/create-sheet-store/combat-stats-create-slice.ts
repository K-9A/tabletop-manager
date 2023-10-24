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
      resetCombatStats: (state) => {
        return initialCreateCombatStatsState;
      },
    },
})

export const createCombatStatsActions = combatStatsCreateSlice.actions;
export default combatStatsCreateSlice.reducer;