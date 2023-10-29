import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CoreProfileState {
    name: string;
    loading: boolean;
    error: string | null;
    // ... other states for core stats
}

const initialCoreState: CoreProfileState = {
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
export const submitCoreProfileData = createAsyncThunk(
    'coreProfileView/submitCoreProfile',
    async (coreProfile: Partial<typeof initialCoreState>) => {
        const response = await axios.post("/api/character/core-stats/core-profile", coreProfile);
        return response.data;
    }
);

export const fetchCoreProfileData = createAsyncThunk(
    'coreProfileView/fetchCoreProfile',
    async () => {
        const response = await axios.get('/api/character/core-stats/core-profile');
        return response.data;
    }
);

const coreProfileViewSlice = createSlice({
    name: 'coreProfileView',
    initialState: initialCoreState,
    reducers: {
        updateField: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        characterUpdateReceived(state, action: PayloadAction<CharacterType>) {
            // Update the state with the new character data
            state = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitCoreProfileData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitCoreProfileData.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.data;
            })
            .addCase(submitCoreProfileData.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(fetchCoreProfileData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoreProfileData.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.data; 
            })
            .addCase(fetchCoreProfileData.rejected, (state, action) => {
                state.loading = false;
                state.error = null;  // capture the error if there's any
            });
            
    }
});

export const coreProfileViewActions = coreProfileViewSlice.actions;
export default coreProfileViewSlice.reducer;
