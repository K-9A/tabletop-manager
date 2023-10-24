import { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/router';
import { useMemoizedAlert } from "@/components/layout/alert";
import formatDate from "@/components/helper/format-date";
import axios from "axios";

export const useCampaignList = (userId) => {
  const ROWS_PER_PAGE = 5; //Dictate how many entries go into each list page

  const router = useRouter();

  //For the user alert messages
  const addAlertMemo = useMemoizedAlert();

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
      .get(`/api/campaign/campaign-list/?userId=${userId}`)
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
        addAlertMemo("Error fetching data. Please try again.", "error");
        console.error("Error fetching campaigns:", error);
      });
// Disabling the warning because addAlertMemo doesn't change and omitting it won't introduce bugs
// eslint-disable-next-line react-hooks/exhaustive-deps
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
          campaignId: campaignIdToDelete.code,
        },
      })
      .then(() => {
        setIsDialogOpen(false);
        addAlertMemo("Campaign deleted successfully.", "success");
        setCampaignIdToDelete(null); // Reset the campaignIdToDelete state
        fetchCampaigns(); // Fetch the updated list of campaigns after deletion
      })
      .catch((error) => {
        console.error("Error deleting campaign:", error);
        addAlertMemo("Something went wrong with the attempt to delete.", "error");
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

  //For the routing
  const handleRowClick = (campaignId) => {
    router.push(`/campaign-view/${campaignId}`);
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
    handleRowClick,
    active,
  };
};
