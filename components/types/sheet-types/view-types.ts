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


export interface  CombatStatsTypes {
  current_hp: number;
  max_hp: number;
  temp_hp: number | null;
  armor_class: number;
  hit_dice: number | null;
  max_hit_dice: number;
  speed: number;
  initiative: number;
  inspiration: number | null;
  spell_casting: string;
  spell_save: number | null;
  spell_attack: number | null;
  isLoading?: boolean;
  isValid?: boolean;
  error: string | null;
};