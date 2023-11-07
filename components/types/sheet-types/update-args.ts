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