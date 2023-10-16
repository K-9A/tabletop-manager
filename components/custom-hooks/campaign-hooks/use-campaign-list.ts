import { useState, useEffect, useCallback } from "react";
import formatDate from "@/components/helper/format-date";
import axios from "axios";

export const useCampaignList = (userId) => {
  const ROWS_PER_PAGE = 5; //Dictate how many entries go into each list page

  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [campaignIdToDelete, setCampaignIdToDelete] = useState(null);

  const filteredRows = campaigns.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Pagination filtering based on page limit
  const totalPages = Math.ceil(filteredRows.length / ROWS_PER_PAGE);

  const startIndex = (active - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const currentRows = filteredRows.slice(startIndex, endIndex);

  //Fetch Campaigns
  const fetchCampaigns = useCallback(() => {
    axios
      .get(`/api/campaign?userId=${userId}`)
      .then((response) => {
        if (response.data.success) {
          const retrievedCampaigns = response.data.data.map((campaign) => ({
            name: campaign.campaign_name,
            code: campaign.campaign_id,
            date: formatDate(campaign.date_created),
          }));
          setCampaigns(retrievedCampaigns);
        }
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
      });
  }, [userId]);

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]); // runs when the component mounts and whenever userId changes

  const handleCampaignDelete = (campaignId) => {
    setCampaignIdToDelete(campaignId);
    setIsDialogOpen(true);
  };

  //delete campaign api call
  const confirmCampaignDelete = () => {
    axios
      .delete("/api/campaign", {
        data: {
          campaignId: campaignIdToDelete,
        },
      })
      .then(() => {
        setIsDialogOpen(false);
        fetchCampaigns(); // Fetch the updated list of campaigns after deletion
      })
      .catch((error) => {
        console.error("Error deleting campaign:", error);
        setIsDialogOpen(false);
      });
  };

  useEffect(() => {
    setActive(1);
  }, [searchTerm]);

  //Pagination logic
  const next = () => {
    if (active < totalPages) setActive(active + 1);
  };

  const prev = () => {
    if (active > 1) setActive(active - 1);
  };

  return {
    campaigns: currentRows,
    searchTerm,
    setSearchTerm,
    isDialogOpen,
    setIsDialogOpen,
    handleCampaignDelete,
    confirmCampaignDelete,
    next,
    prev,
    totalPages,
    filteredRows,
    currentRows,
    active,
  };
};
