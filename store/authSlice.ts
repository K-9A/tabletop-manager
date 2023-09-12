import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state shape using TypeScript interfaces
interface AuthState {
    isAuthenticated: boolean;
}

// Type the initial state
const initialAuthState: AuthState = {
    isAuthenticated: false,
};

//Auth Slice logic itself
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});


//Export section
export const authActions = authSlice.actions;

export default authSlice.reducer;
