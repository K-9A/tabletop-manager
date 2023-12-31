import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

import { insertCoreProfileData } from "./character-sheet-create/core-profile";
import { insertFeatsTraitsData } from "./character-sheet-create/features-traits";
import { insertBackgroundData } from "./character-sheet-create/background";
import { insertAbilityScoresData } from "./character-sheet-create/ability-scores";
import { insertCombatStatsData } from "./character-sheet-create/combat-stats";
import { insertExplorationSkillsData } from "./character-sheet-create/exploration-skills";
import { insertSkillsData } from "./character-sheet-create/skills";
import { insertSpellsData } from "./character-sheet-create/spells";
import { insertSpellSlotsData } from "./character-sheet-create/spell-slots";
import { insertEquipmentData } from "./character-sheet-create/equipment";
import { insertItemsData } from "./character-sheet-create/items";

const submitCharacter = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    const {
      userId,
      campaignId,
      coreProfile,
      featsTraits,
      background,
      abilityScores,
      combatStats,
      explorationSkills,
      skills,
      spells,
      spellSlots,
      equipment,
      items,
    } = req.body;

    try {
      // Start database transaction
      await dbQuery("START TRANSACTION");

      //Create the parent table in the MySQL schema, and grab a character_id for other sections to use
      const result = await dbQuery(
        "INSERT INTO character_sheet (user_id, campaign_id) VALUES (?, ?)",
        [userId, campaignId]
      );
      const characterId = (result as any).insertId;

      //Insert data for each subsection and run its query
      await insertCoreProfileData(coreProfile, characterId, dbQuery);
      await insertFeatsTraitsData(featsTraits, characterId, dbQuery);
      await insertBackgroundData(background, characterId, dbQuery);
      await insertAbilityScoresData(abilityScores, characterId, dbQuery);
      await insertCombatStatsData(combatStats, characterId, dbQuery);
      await insertSpellSlotsData(spellSlots, characterId, dbQuery);
      await insertExplorationSkillsData(
        explorationSkills,
        characterId,
        dbQuery
      );

      // Only call insertSkillsData if there are skills to insert
      if (skills.length > 0) {
        await insertSkillsData(skills, characterId, dbQuery);
      }

      // Only call insertSpellsData if there are skills to insert
      if (spells.length > 0) {
        await insertSpellsData(spells, characterId, dbQuery);
      }

      // Only call insertEquipmentData if there are skills to insert
      if (equipment.length > 0) {
        await insertEquipmentData(equipment, characterId, dbQuery);
      }

      // Only call insertItemsData if there are skills to insert
      if (items.length > 0) {
        await insertItemsData(items, characterId, dbQuery);
      }

      // If all above subsections go through, commit the transaction
      await dbQuery("COMMIT");

      res.status(200).json({ success: true, characterId });
    } catch (error) {
      // If an error occurs, rollback the transaction
      await dbQuery("ROLLBACK");

      if (error.message.includes("Validation Error")) {
        // Send a specific response for validation errors
        res.status(400).json({ success: false, error: error.message });
      } else {
        // Handle other types of errors
        res.status(500).json({ success: false, error: error.message });
      }
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(withCreateRateLimit(submitCharacter))
);
