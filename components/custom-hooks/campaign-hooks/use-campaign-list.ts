import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCampaignList = (userId: string) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axios.get('/api/campaign', {
          params: { userId }
        });
        setCampaigns(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCampaigns();
  }, [userId]);

  return { campaigns, loading, error };
}