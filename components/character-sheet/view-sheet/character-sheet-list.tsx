import ListHeader from "@/components/view-list/list-header";
import ListBody from "@/components/view-list/list-body";
import ListFooter from "@/components/view-list/list-footer";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useSession } from "next-auth/react";
import { useCharacterList } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/use-character-list";
import { Fragment } from "react";

const TABLE_HEAD = [
  { title: "ID", width: "w-1/6" },
  { title: "Character Name", width: "w-1/2" },
  { title: "Class", width: "w-1/4" },
  { title: "Level", width: "w-1/6" },
  { title: "Date Created", width: "w-1/4" },
  { title: "Campaign", width: "w-1/4" },
  { title: "Delete", width: "w-1/6" },
];

const CharacterList = () => {
  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  //GetUserID
  const { data: session } = useSession();
  const userId = (session?.user as any)?.id;

  const {
    searchTerm,
    setSearchTerm,
    handleCharacterDelete,
    next,
    prev,
    totalPages,
    currentRows,
    active,
    isDialogOpen,
    isLoading,
    setIsDialogOpen,
    handleRowClick,
    confirmCharacterDelete,
  } = useCharacterList(userId);


  return (
    <Fragment>
      <ListHeader
        title="Character List"
        subtitle="List of your Characters"
        searchPlaceholder="Search by Name"
        isDarkMode={isDarkMode}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />
      <ListBody
        headers={TABLE_HEAD}
        rows={currentRows}
        isLoading={isLoading}
        isDarkMode={isDarkMode}
        onRowDelete={handleCharacterDelete}
        noDataMessage="No Characters Found"
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        confirmDelete={confirmCharacterDelete}
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

export default CharacterList;
