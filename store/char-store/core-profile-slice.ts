import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CoreState {
    name: string;
    // ... other states for core stats
}

const initialCoreState: CoreState = {
    name: "",

};

const coreSlice = createSlice({
    name: 'core',
    initialState: initialCoreState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },

    },
});

export const coreProfileActions = coreSlice.actions;

export default coreSlice.reducer;
