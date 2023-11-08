export interface UpdateSheetFieldArgs {
    characterId: string;
    skillId?: number | null; 
    fieldName: string;
    value: string | number | null;
  }

  export interface UpdateSkillFieldArgs {
    characterId: string;
    skillId: number | null; 
    fieldName: string;
    value: string | number | null;
  }

  export interface UpdateSpellFieldArgs {
    characterId: string;
    spellId: number | null; 
    fieldName: string;
    value: string | number | null;
  }

  export interface UpdateEquipmentFieldArgs {
    characterId: string;
    equipmentId: number | null; 
    fieldName: string;
    value: string | number | null;
  }

  export interface UpdateItemFieldArgs {
    characterId: string;
    itemId: number | null; 
    fieldName: string;
    value: string | number | null;
  }
