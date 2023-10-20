export const insertFeatsTraitsData = async (
  data,
  characterId,
  dbQuery: Function
) => {

    // Extract data
    const {
      weapon_proficiency,
      armor_proficiency,
      feats_traits,
      buffs,
      debuffs,
      other_proficiency,
    } = data 
    //Use the validator package to sanitize data for SQL querying
    const sanitizedData = {
      weapon_proficiency: weapon_proficiency,
      armor_proficiency: armor_proficiency,
      feats_traits: feats_traits,
      buffs: buffs,
      debuffs: debuffs,
      other_proficiency: other_proficiency,
    };

   
    await dbQuery(
      "INSERT INTO feats_traits (character_id, weapon_proficiency, armor_proficiency, feats_traits, buffs, debuffs, other_proficiency) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        characterId,
        sanitizedData.weapon_proficiency,
        sanitizedData.armor_proficiency,
        sanitizedData.feats_traits,
        sanitizedData.buffs,
        sanitizedData.debuffs,
        sanitizedData.other_proficiency,
      ]
    );
  }