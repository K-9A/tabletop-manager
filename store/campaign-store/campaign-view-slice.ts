import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncThunkCases } from "@/components/helper/async-thunk-cases";
import axios from "axios";

interface UpdateFieldArgs {
  campaignId: string;
  value: string;
}

interface CampaignViewDataState {
  campaign_name: string;
  campaign_description: string;
  isLoading: boolean;
  error: string | null;
}

interface CampaignViewInfoState {
  campaign_id: string;
  user_id: string;
  username: string;
  isLoading: boolean;
  error: string | null;
}

const initialCampaignDataView: CampaignViewDataState = {
  campaign_name: "",
  campaign_description: "",
  isLoading: false,
  error: null
};

const initialCampaignInfoView: CampaignViewInfoState = {
  campaign_id: "",
  user_id: "",
  username: "",
  isLoading: false,
  error: null
};


const baseURL = "/api/campaign/campaign-view";

//Fetch overall data that isn't going to be edited by the user.
export const fetchCampaignInfo = createAsyncThunk(
  'campaignView/fetchCampaignInfo',
  async (campaignId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch campaign data');
    }
  }
);

export const createFieldThunks = (fieldName: string) => {
  const capitalizedField =
    fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  return {
    fetchField: createAsyncThunk(
      `campaignView/fetch${capitalizedField}`,
      async (campaignId: string, { rejectWithValue }) => {
        try {
          const response = await axios.get(
            `${baseURL}?campaignId=${campaignId}&fieldName=${fieldName}`
          );
          return response.data;
        } catch (error) {
          //Flash error
          return rejectWithValue("Failed to fetch field");
        }
      }
    ),
    updateField: createAsyncThunk(
      `campaignView/update${capitalizedField}`,
      async ({ campaignId, value }: UpdateFieldArgs, { rejectWithValue }) => {
        try {
          const response = await axios.put(
            `${baseURL}?campaignId=${campaignId}&fieldName=${fieldName}&value=${value}`
          );
          return response.data;
        } catch (error) {
          console.error(error);
    
          // Here we return a rejected action with a payload
          return rejectWithValue("Failed to update field");
        }
      }
    ),
  };
};

const campaignNameThunks = createFieldThunks("campaign_name");
const campaignDescriptionThunks = createFieldThunks("campaign_description");

const campaignViewSlice = createSlice({
  name: "campaignView",
  initialState: {
    data: initialCampaignDataView,
    info: initialCampaignInfoView
  },
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //For the read only data fields
      .addCase(fetchCampaignInfo.pending, (state) => {
        state.info.isLoading = true;
        state.info.error = null;
      })
      .addCase(fetchCampaignInfo.fulfilled, (state, action) => {
        state.info.isLoading = false;
        const { campaign_id, user_id, username } = action.payload.data;

        state.info.campaign_id = campaign_id;
        state.info.user_id = user_id;
        state.info.username = username;
      })
      .addCase(fetchCampaignInfo.rejected, (state, action) => {
        state.info.isLoading = false;
        state.info.error = action.error.message;
      })

      //campaign name
      .addCase(campaignNameThunks.fetchField.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(campaignNameThunks.fetchField.fulfilled, (state, action) => {
        state.data.isLoading = false;
        state.data.campaign_name = action.payload.data.campaign_name;
      })
      .addCase(campaignNameThunks.fetchField.rejected, (state, action) => {
        state.data.isLoading = false;
        state.data.error = action.error.message;
      })

      //campaign description
      .addCase(campaignDescriptionThunks.fetchField.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(
        campaignDescriptionThunks.fetchField.fulfilled,
        (state, action) => {
          state.data.isLoading = false;
          state.data.campaign_description = action.payload.data.campaign_description;
        }
      )
      .addCase(
        campaignDescriptionThunks.fetchField.rejected,
        (state, action) => {
          state.data.isLoading = false;
          state.data.error = action.error.message;
        }

      );
  },
});

export const viewCampaignActions = campaignViewSlice.actions;
export default campaignViewSlice.reducer;
