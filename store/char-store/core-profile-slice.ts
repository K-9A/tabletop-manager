import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CoreState {
    name: string;
    loading: boolean;
    error: string | null;
    // ... other states for core stats
}

const initialCoreState: CoreState = {
    name: "",
    loading: false,
    error: null
};


interface CharacterType {
    id: string;
    name: string;
    loading: boolean;
    error: string;

}

// Async thunk action for submitting name data
export const submitNameData = createAsyncThunk(
    'core/submitName',
    async (name: string) => {
        const response = await axios.post("/api/character/core-stats/core-profile", {
            name: name,
        });
        return response.data;
    }
);



const coreSlice = createSlice({
    name: 'core',
    initialState: initialCoreState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        characterUpdateReceived(state, action: PayloadAction<CharacterType>) {
            // Update the state with the new character data
            state = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitNameData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitNameData.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.name; // assuming the response contains the name
            })
            .addCase(submitNameData.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const coreProfileActions = coreSlice.actions;

export default coreSlice.reducer;
