import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "@/socket-middleware/core-stats-middleware/socket-middleware";
import thunk from "redux-thunk";

// Misc Imports
import darkModeReducer from "./dark-slice";
import authReducer from "./auth-slice";

// View Sheet Slice Imports
import coreProfileViewReducer from "./view-sheet-store/core-stats-view/core-profile-view-slice";

// Create Sheet Slice Imports
import coreProfileCreateReducer from "./create-sheet-store/core-stats-create/core-profile-create-slice";
import backgroundCreateReducer from "./create-sheet-store/core-stats-create/background-create-slice";


const store = configureStore({
    reducer: { 

        darkMode: darkModeReducer,
        auth: authReducer,

        //View Sheet Reducers
        coreProfileView: coreProfileViewReducer,
        
        //Create Sheet Reducers
        coreProfileCreate: coreProfileCreateReducer,
        backgroundCreate: backgroundCreateReducer,
    },
    middleware: [thunk, socketMiddleware]
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
