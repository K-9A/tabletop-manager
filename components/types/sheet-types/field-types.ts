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
};

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

export interface AbilityScoreTypes {
  str_score: number;
  dex_score: number;
  con_score: number;
  int_score: number;
  wis_score: number;
  chr_score: number;
  str_mod: number;
  dex_mod: number;
  con_mod: number;
  int_mod: number;
  wis_mod: number;
  chr_mod: number;
  str_save: number;
  dex_save: number;
  con_save: number;
  int_save: number;
  wis_save: number;
  chr_save: number;
  passive_perception: number;
  isLoading?: boolean;
  isValid?: boolean;
  error: string | null;
};

export interface BackgroundTypes {
    personality: string;
    backstory: string;
    bonds: string;
    appearance: string;
    ideals: string;
    flaws: string;
    valuables: string;
    additional_traits: string;
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };
  
  export interface ExplorationSkillsTypes {
    acrobatics: number;
    animal: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleight: number;
    stealth: number;
    survival: number;
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };

  export interface FeatsTraitsTypes {
    weapon_proficiency: string;
    armor_proficiency: string;
    feats_traits: string;
    buffs: string;
    debuffs: string;
    other_proficiency: string;
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };
  
  export interface SpellSlotTypes {
    first_available: number;
    first_max: number;
    second_available: number;
    second_max: number;
    third_available: number;
    third_max: number;
    fourth_available: number;
    fourth_max: number;
    fifth_available: number;
    fifth_max: number;
    sixth_available: number;
    sixth_max: number;
    seventh_available: number;
    seventh_max: number;
    eighth_available: number;
    eighth_max: number;
    nineth_available: number;
    nineth_max: number;
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };

  export interface SkillType {
    skill_id?: number;
    skill_name: string;
    skill_description: string;
    skill_cooldown: string;
    skill_available: string;
  };

  export interface SkillsTypes {
    skills: SkillType[];
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };

  export interface SpellType {
    spell_id?: number;
    spell_name: string;
    spell_description: string;
    spell_tier: string;
  };
  
  export type SpellsTypes = {
    spells: SpellType[];
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };

  export type EquipmentType = {
    equipment_id?: number;
    equipment_name: string;
    equipment_category: string;
    equipment_properties: string;
  };

  export type EquipmentTypes = {
    equipment: EquipmentType[];
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };

  export type ItemType = {
    item_id?: number;
    item_name: string;
    item_description: string;
    item_amount: string;
    item_max: string;
  };

  export type ItemsTypes = {
    items: ItemType[];
    isLoading?: boolean;
    isValid?: boolean;
    error: string | null;
  };

  export type CampaignLinkTypes = {
    campaignId: string,
    isValid: boolean;
    isLoading: boolean;
    error: string | null;
  }