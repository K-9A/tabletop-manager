import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExplorationSkillsTypes } from "@/components/types/sheet-types/field-types";


const initialCreateExplorationSkillsState: ExplorationSkillsTypes = {
    acrobatics: null,
    animal: null,
    arcana: null,
    athletics: null,
    deception: null,
    history: null,
    insight: null,
    intimidation: null,
    investigation: null,
    medicine: null,
    nature: null,
    perception: null,
    performance: null,
    persuasion: null,
    religion: null,
    sleight: null,
    stealth: null,
    survival: null,
    isLoading: false,
    isValid: false,
    error: null
  };

  const explorationSkillsCreateSlice = createSlice({
    name: 'explorationSkillsCreate',
    initialState: initialCreateExplorationSkillsState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      setValidity: (state, action: PayloadAction<boolean>) => {
        state.isValid = action.payload;
      },
      resetExplorationSkills: () => {
        return initialCreateExplorationSkillsState;
      },
    },
})


export const createExplorationSkillsActions = explorationSkillsCreateSlice.actions;
export default explorationSkillsCreateSlice.reducer;