import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CoreState {
    name: string;
    // ... other states for core stats
}

const initialCoreState: CoreState = {
    name: "",
    // ... initial values for other core stats
};

const coreSlice = createSlice({
    name: 'core',
    initialState: initialCoreState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        // ... other reducers for core stats
    },
});

export const coreActions = coreSlice.actions;

export default coreSlice.reducer;
