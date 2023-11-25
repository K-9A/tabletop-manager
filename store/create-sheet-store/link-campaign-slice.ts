import { createSlice } from '@reduxjs/toolkit';
import { CampaignLinkTypes } from '@/components/types/sheet-types/field-types';

const initialCampaignLinkState:CampaignLinkTypes = {
  campaignId: null,
  isValid: false,
  isLoading: false,
  error: null
};

//Slice responsible for linking sheet to campaign during character creation process
const campaignLinkSlice = createSlice({
 
  name: 'campaignLink',
  initialState: initialCampaignLinkState,
  reducers: {
    checkCampaignIdStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    checkCampaignIdSuccess(state, action) {
      state.campaignId = action.payload;
      state.isValid = true;
      state.isLoading = false;
    },
    checkCampaignIdFailure(state, action) {
      state.isLoading = false;
      state.isValid = false;
    },
    resetCampaignId(state) {
      state.campaignId = null;
      state.isValid = false;
      state.isLoading = false;
    },
  },
});

export const campaignLinkActions = campaignLinkSlice.actions;
export default campaignLinkSlice.reducer;