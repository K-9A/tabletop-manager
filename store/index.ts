import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "@/socket-middleware/core-stats-middleware/socket-middleware";
import thunk from "redux-thunk";

// Misc Imports
import darkModeReducer from "./dark-slice";
import authReducer from "./auth-slice";

// View Sheet Slice Imports
import coreReducer from "./core-stats-store/core-profile-slice";

// Create Sheet Slice Imports
import createCoreProfileReducer from "./create-sheet-store/core-stats-create/core-stats-profile-slice"


const store = configureStore({
    reducer: { 

        darkMode: darkModeReducer,
        auth: authReducer,

        core: coreReducer,
        
        createCore: createCoreProfileReducer,
    },
    middleware: [thunk, socketMiddleware]
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
