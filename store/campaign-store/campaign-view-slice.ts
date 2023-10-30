import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UpdateFieldArgs {
  campaignId: string;
  fieldName: string;
  value: string;
}

interface CampaignViewDataState {
  campaign_id: string;
  campaign_name: string;
  campaign_description: string;
  user_id: string;
  username: string;
  isLoading: boolean;
  error: string | null;
}

const initialCampaignDataView: CampaignViewDataState = {
  campaign_id: "",
  campaign_name: "",
  campaign_description: "",
  user_id: "",
  username: "",
  isLoading: false,
  error: null,
};

const baseURL = "/api/campaign/campaign-view";

//Fetch campaign data
export const fetchCampaignData = createAsyncThunk(
  "campaignView/fetchCampaignData",
  async (campaignId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}?campaignId=${campaignId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch campaign data");
    }
  }
);

//Handle user updates via PUT requests
export const updateCampaignField = createAsyncThunk(
  "campaignView/updateField",
  async (
    { campaignId, fieldName, value }: UpdateFieldArgs,
    { rejectWithValue }
  ) => {
    if (fieldName !== "campaign_name" && fieldName !== "campaign_description") {
      return rejectWithValue("Invalid field name");
    }

    try {
      const response = await axios.put(
        `${baseURL}?campaignId=${campaignId}&fieldName=${fieldName}&value=${value}`
      );
      if (response.status === 200) {
        return { fieldName, value };
      } else {
        return rejectWithValue("Failed to update field");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue("Failed to update field");
    }
  }
);

const campaignViewSlice = createSlice({
  name: "campaignView",
  initialState: initialCampaignDataView,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For data fetching
      .addCase(fetchCampaignData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampaignData.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload.data);
      })
      .addCase(fetchCampaignData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //For data sending
      .addCase(updateCampaignField.fulfilled, (state, action) => {
        const { fieldName, value } = action.payload;
        state[fieldName] = value;
      })
      .addCase(updateCampaignField.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const viewCampaignActions = campaignViewSlice.actions;
export default campaignViewSlice.reducer;
