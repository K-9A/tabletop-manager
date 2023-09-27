import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "@/utils/socket-middleware";
import thunk from "redux-thunk";

// Slice Imports
import authReducer from "./auth-slice";
import coreReducer from "./char-store/core-profile-slice";
import darkModeReducer from "./dark-slice";


const store = configureStore({
    reducer: { 
        darkMode: darkModeReducer,
        auth: authReducer,
        core: coreReducer 
    },
    middleware: [thunk, socketMiddleware]
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
