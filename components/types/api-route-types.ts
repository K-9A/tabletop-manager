export interface CoreProfileTypes {
  name: string;
  char_class: string;
  race: string;
  proficiency: string;
  char_level: number;
  experience: number;
  next_level: number;
  affinity: string;
  characterId: string;
}

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
  characterId: string;
}

export interface BackgroundTypes {
    personality: string;
    backstory: string;
    bonds: string;
    appearance: string;
    ideals: string;
    flaws: string;
    valuables: string;
    additional_traits: string;
    characterId: string;
  }


  export interface CombatStatsType {
    current_hp: number;
    max_hp: number;
    temp_hp: number;
    armor_class: number;
    hit_dice: number;
    max_hit_dice: number;
    speed: number;
    initiative: number;
    inspiration: number;
    spell_casting: string;
    spell_save: number;
    spell_attack: number;
    characterId: string;
  }
  
  export interface ExplorationTypes {
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
    characterId: string;
  }

  export interface FeaturesTraitsTypes {
    weapon_proficiency: string;
    armor_proficiency: string;
    feats_traits: string;
    buffs: string;
    debuffs: string;
    other_proficiency: string;
    characterId: string;
  }

  export type SkillTypes = {
    skill_name: string;
    skill_description: string;
    skill_cooldown: string;
    skill_available: string;
  };
  
  export type SpellTypes = {
    spell_name: string;
    spell_description: string;
    spell_tier: string;
  };
  

  export interface SpellSlotTypes {
    characterId: string;
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
  }

  export type EquipmentTypes = {
    equipment_name: string;
    equipment_category: string;
    equipment_properties: string;
  };

  export type ItemTypes = {
    item_name: string;
    item_description: string;
    item_amount: number;
    item_max: number;
  };