import { useState, useEffect, useCallback } from "react";
import formatDate from "@/components/helper/format-date";
import axios from "axios";

export const useCharacterList = (userId) => {
  const ROWS_PER_PAGE = 5; //Dictate how many entries go into each list page

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [characterIdToDelete, setCharacterIdToDelete] = useState(null);

  const filteredRows = characters.filter((row) =>
    row.character_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Pagination filtering based on page limit
  const totalPages = Math.ceil(filteredRows.length / ROWS_PER_PAGE);

  const startIndex = (active - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const currentRows = filteredRows.slice(startIndex, endIndex);

  //Fetch Characters
  const fetchCharacters = useCallback(() => {
    axios
      .get(`/api/character-list?userId=${userId}`)
      .then((response) => {
        if (response.data.success) {
          const retrievedCharacters = response.data.data.map((character) => ({
            character_id: character.character_ID,
            character_name: character.character_name,
            class: character.class,
            level: character.char_level,
            date: formatDate(character.date_created),
            campaign: character.campaign_id ? character.campaign_id : "Not Joined"
          }));

          setCharacters(retrievedCharacters);
        }
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
      });
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
      .delete("/api/character-list", {
        data: {
          characterId: characterIdToDelete.character_id,
        },
      })
      .then(() => {
        setIsDialogOpen(false);
        fetchCharacters(); // Fetch the updated list of campaigns after deletion
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
    characters: currentRows,
    searchTerm,
    setSearchTerm,
    isDialogOpen,
    setIsDialogOpen,
    handleCharacterDelete,
    confirmCharacterDelete,
    next,
    prev,
    totalPages,
    filteredRows,
    currentRows,
    active,
  };
};
