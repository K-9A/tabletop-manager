import { useState, useEffect, useCallback } from "react";
import { useMemoizedAlert } from "@/components/layout/alert";
import { useRouter } from "next/router";
import formatDate from "@/components/helper/format-date";
import axios from "axios";

export const useCharacterList = (userId) => {
  const ROWS_PER_PAGE = 5; //Dictate how many entries go into each list page

  const router = useRouter();

  //For the user alert messages
  const addAlertMemo = useMemoizedAlert();

  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [characterIdToDelete, setCharacterIdToDelete] = useState(null);

  const filteredRows = characters.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Pagination filtering based on page limit
  const totalPages = Math.ceil(filteredRows.length / ROWS_PER_PAGE);

  const startIndex = (active - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const currentRows = filteredRows.slice(startIndex, endIndex);

  //Fetch Characters
  const fetchCharacters = useCallback(() => {
    setIsLoading(true); // Start loading
    axios
      .get(`/api/character-sheet-view/character-list?userId=${userId}`)
      .then((response) => {
        if (response.data.success) {
          const retrievedCharacters = response.data.data.map((character) => ({
            id: character.character_ID,
            name: character.character_name,
            char_class: character.char_class,
            level: character.char_level,
            date: formatDate(character.date_created),
            campaign: character.campaign_id
              ? character.campaign_id
              : "Not Joined",
          }));
          setCharacters(retrievedCharacters);
          setIsLoading(false); // Stop loading 
        }
      })
      .catch((error) => {
        addAlertMemo("Error fetching data. Please try again.", "error");
        setIsLoading(false); // Stop loading 
      });
    // Disabling the warning because addAlertMemo doesn't change and omitting it won't introduce bugs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]); // runs when the component mounts and whenever userId changes

  const handleCharacterDelete = (characterId) => {
    setCharacterIdToDelete(characterId);
    setIsDialogOpen(true);
  };

  //delete character  api call
  const confirmCharacterDelete = () => {
    axios
      .delete("/api/character-sheet-view/character-list/", {
        data: {
          characterId: characterIdToDelete.id,
        },
      })
      .then(() => {
        setIsDialogOpen(false);
        addAlertMemo("Character deleted successfully.", "success");
        setCharacterIdToDelete(null); // Reset the characterIdToDelete state
        fetchCharacters(); // Fetch the updated list of characterss after deletion
      })
      .catch((error) => {
        console.error("Error deleting character:", error);
        addAlertMemo(
          "Something went wrong with the attempt to delete.",
          "error"
        );
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
  const handleRowClick = (id) => {
    if (typeof id === 'undefined') {
      console.error("ID is undefined");
      return;
    }
    router.push(`/character-view/${id}`);
  };

  return {
    characters: currentRows,
    searchTerm,
    setSearchTerm,
    isDialogOpen,
    isLoading,
    setIsDialogOpen,
    handleCharacterDelete,
    confirmCharacterDelete,
    next,
    prev,
    totalPages,
    filteredRows,
    currentRows,
    handleRowClick,
    active,
  };
};
