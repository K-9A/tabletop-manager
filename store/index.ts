import { configureStore } from "@reduxjs/toolkit";

// Slice Imports
import authReducer from "./authSlice";
import coreReducer from "./char-store/coreSlice";

const store = configureStore({
    reducer: { 
        auth: authReducer,
        core: coreReducer 
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
