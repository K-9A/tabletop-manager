import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CombatStatsTypes } from "@/components/types/sheet-types/view-types";

const initialCreateCombatStatsState: CombatStatsTypes = {
  current_hp: null,
  max_hp: null,
  temp_hp: null,
  armor_class: null,
  hit_dice: null,
  max_hit_dice: null,
  speed: null,
  initiative: null,
  inspiration: null,
  spell_casting: "",
  spell_save: null,
  spell_attack: null,
  isValid: false,
  error: null,
};

const combatStatsCreateSlice = createSlice({
  name: "combatStatsCreate",
  initialState: initialCreateCombatStatsState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setValidity: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    resetCombatStats: (state) => {
      return initialCreateCombatStatsState;
    },
  },
});

export const createCombatStatsActions = combatStatsCreateSlice.actions;
export default combatStatsCreateSlice.reducer;
