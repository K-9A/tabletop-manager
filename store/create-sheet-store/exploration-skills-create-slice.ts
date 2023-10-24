import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";


const initialCreateExplorationSkillsState = {
    acrobatics: "",
    animal: "",
    arcana: "",
    athletics: "",
    deception: "",
    history: "",
    insight: "",
    intimidation: "",
    investigation: "",
    medicine: "",
    nature: "",
    perception: "",
    performance: "",
    persuasion: "",
    religion: "",
    sleight: "",
    stealth: "",
    survival: "",
    loading: false,
    isValid: false,
    error: null
  };

  const explorationSkillsCreateSlice = createSlice({
    name: 'explorationScoresCreate',
    initialState: initialCreateExplorationSkillsState,
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
      //Probably don't need this
      updateCoreProfileCreate: (state, action: PayloadAction<Partial<typeof initialCreateExplorationSkillsState>>) => {
        Object.assign(state, action.payload);
      },
      setValidity: (state, action: PayloadAction<boolean>) => {
        state.isValid = action.payload;
      },
      resetExplorationSkills: (state) => {
        return initialCreateExplorationSkillsState;
      },
    },
})


export const createExplorationSkillsActions = explorationSkillsCreateSlice.actions;
export default explorationSkillsCreateSlice.reducer;