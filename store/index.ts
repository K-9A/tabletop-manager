import { configureStore } from "@reduxjs/toolkit";
//import { socketMiddleware } from "@/socket-middleware/core-stats-middleware/socket-middleware";
import thunk from "redux-thunk";

// Misc Imports
import darkModeReducer from "./dark-slice";
import authReducer from "./auth-slice";

// Campaign Imports
import campaignViewReducer from "./campaign-store/campaign-view-slice";

// View Sheet Slice Imports
import coreProfileViewReducer from "./view-sheet-store/core-profile-view-slice";

// Create Sheet Slice Imports
import coreProfileCreateReducer from "./create-sheet-store/core-profile-create-slice";
import featsTraitsCreateReducer from "./create-sheet-store/feats-traits-create-slice";
import backgroundCreateReducer from "./create-sheet-store/background-create-slice"
import abilityScoresCreateReducer from "./create-sheet-store/ability-scores-create-slice";
import combatStatsCreateReducer from "./create-sheet-store/combat-stats-create-slice";
import explorationSkillsCreateReducer from "./create-sheet-store/exploration-skills-create-slice";
import skillsCreateReducer from "./create-sheet-store/skills-create-slice";
import spellSlotsReducer from "./create-sheet-store/spell-slots-create-slice";
import spellsCreateReducer from "./create-sheet-store/spells-create-slice";
import equipmentCreateReducer from "./create-sheet-store/equipment-create-slice";
import itemsCreateReducer from "./create-sheet-store/items-create-slice";


const store = configureStore({
    reducer: { 

        //Misc Reducers
        darkMode: darkModeReducer,
        auth: authReducer,

        //Campaign Rducers
        campaignView: campaignViewReducer,

        //View Sheet Reducers
        coreProfileView: coreProfileViewReducer,
        
        //Create Sheet Reducers
        coreProfileCreate: coreProfileCreateReducer,
        featsTraitsCreate: featsTraitsCreateReducer,
        backgroundCreate: backgroundCreateReducer,
        abilityScoresCreate: abilityScoresCreateReducer,
        combatStatsCreate: combatStatsCreateReducer,
        explorationSkillsCreate: explorationSkillsCreateReducer,
        skillsCreate: skillsCreateReducer,
        spellSlotsCreate: spellSlotsReducer,
        spellsCreate: spellsCreateReducer,
        equipmentCreate: equipmentCreateReducer,
        itemsCreate: itemsCreateReducer,
    },
    middleware: [thunk]
    //middleware: [thunk, socketMiddleware]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
