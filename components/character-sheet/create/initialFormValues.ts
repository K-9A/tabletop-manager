//Form values to pass down to validate both the subsections and the button tied to each:


export const coreProfileInitialValues = {
  name: "",
  char_class: "",
  race: "",
  proficiency: "",
  char_level: "",
  experience: "",
  next_level: "",
  affinity: "",
};

export const abilityScoresInitialValues = {
    str_score: "",
    dex_score: "",
    con_score: "",
    int_score: "",
    wis_score: "",
    chr_score: "",
    str_mod: "",
    dex_mod: "",
    con_mod: "",
    int_mod: "",
    wis_mod: "",
    chr_mod: "",
    perception: "",
  };
  

export const combatStatsInitialValues = {
  max_hp: "",
  max_hit_dice: "",
  armor_class: "",
  inspiration: "",
  initiative: "",
  speed: "",
};

//Export everything at once for the state.
export const allInitialValues = {
    ...coreProfileInitialValues,
    ...abilityScoresInitialValues,
    ...combatStatsInitialValues,
}