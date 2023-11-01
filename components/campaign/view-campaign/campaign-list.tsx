import ListHeader from "@/components/view-list/list-header";
import ListBody from "@/components/view-list/list-body";
import ListFooter from "@/components/view-list/list-footer";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useSession } from "next-auth/react";
import { useCampaignList } from "@/components/custom-hooks/campaign-hooks/use-campaign-list";
import { Fragment } from "react";

const TABLE_HEAD = [
  { title: "Campaign Name", width: "w-1/2" },
  { title: "Campaign Code", width: "w-1/4" },
  { title: "Date Created", width: "w-1/4" },
  { title: "Delete", width: "w-1/6" },
];

const CampaignList = () => {
  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  //GetUserID
  const { data: session } = useSession();
  const userId = (session?.user as any)?.id;

  const {
    searchTerm,
    setSearchTerm,
    handleCampaignDelete,
    next,
    prev,
    totalPages,
    currentRows,
    active,
    isDialogOpen,
    setIsDialogOpen,
    handleRowClick,
    confirmCampaignDelete
  } = useCampaignList(userId);

  return (
    <Fragment>
      <ListHeader
        title="Campaign List"
        subtitle="List of your Campaigns"
        searchPlaceholder="Search by Name"
        isDarkMode={isDarkMode}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />
      <ListBody
        headers={TABLE_HEAD}
        rows={currentRows}
        isDarkMode={isDarkMode}
        onRowDelete={handleCampaignDelete}
        noDataMessage="No Campaigns Found"
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        confirmDelete={confirmCampaignDelete}
        onRowClick={handleRowClick}
      />
      <ListFooter
        activePage={active}
        totalPages={totalPages}
        onPrev={prev}
        onNext={next}
        isDarkMode={isDarkMode}
      />
    </Fragment>
  );
};

export default CampaignList;
