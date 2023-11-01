export interface CampaignViewDataState {
  campaign_id: string;
  campaign_name: string;
  campaign_description: string;
  user_id: string;
  username: string;
  isLoading: boolean;
  error: string | null;
}

export interface UpdateFieldArgs {
  campaignId: string;
  fieldName: string;
  value: string;
}
