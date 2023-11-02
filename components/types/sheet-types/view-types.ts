export interface CharacterIdType {
    characterId: string;
  }

export interface CoreProfileTypes {
    character_name: string;
    char_class: string;
    race: string;
    proficiency: number | null;
    char_level: number | null;
    experience: number | null;
    next_level: number | null;
    affinity: string;
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
}
