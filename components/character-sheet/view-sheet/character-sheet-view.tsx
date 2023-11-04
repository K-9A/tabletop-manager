import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

//Subsection imports
import CoreProfileView from "./view-subsections/core-profile-view";
import CombatStatsView from "./view-subsections/combat-stats-view";
import AbilityScoresView from "./view-subsections/ability-scores-view";
import BackgroundView from "./view-subsections/background-view";
import FeatsTraitsView from "./view-subsections/feats-traits-view";
import ExplorationSkillsView from "./view-subsections/exploration-skills-view";
import SpellSlotsView from "./view-subsections/spell-slots-view";


interface CharacterViewProps {
  characterId: string;
}

const CharacterSheetView: React.FC<CharacterViewProps> = ({ characterId }) => {

  //Piece of state for collapsing the subsection dividers
  const [isCoreStatsCollapsed, setCoreStatsCollapsed] = useState(false);
  const [isCombatStatsCollapsed, setCombatStatsCollapsed] = useState(true);
  const [isAbilityScoresCollapsed, setAbilityScoresCollapsed] = useState(true);
  const [isFeatsTraitsCollapsed, setFeatsTraitsCollapsed] = useState(true);
  const [isBackgroundCollapsed, setBackgroundCollapsed] = useState(true);
  const [isExplorationSkillsCollapsed, setExplorationSkillsCollapsed] = useState(true);
  const [isSpellSlotsCollapsed, setSpellSlotsCollapsed] = useState(true);


  return (
    <Card color="transparent" shadow={false} className="dark:text-white">
      <Typography variant="h4" color="blue-gray" className="mb-4 dark:text-white">
        Character Sheet #{characterId}
      </Typography>

      <div className="dark:text-white mt-5 border border-gray-400 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="dark:text-white absolute -top-4 left-4 bg-gray-200 dark:bg-gray-700 px-2 cursor-pointer inline-flex items-center"
          onClick={() => setCoreStatsCollapsed(!isCoreStatsCollapsed)}
        >
          Core Profile
          {isCoreStatsCollapsed ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}

        </Typography>
        <AnimatePresence>
          {!isCoreStatsCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CoreProfileView characterId={characterId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="dark:text-white mt-5 border border-gray-400 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="dark:text-white absolute -top-4 left-4 bg-gray-200 dark:bg-gray-700 px-2 cursor-pointer inline-flex items-center"
          onClick={() => setCombatStatsCollapsed(!isCombatStatsCollapsed)}
        >
          Combat Stats
          {isCombatStatsCollapsed ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}

        </Typography>
        <AnimatePresence>
          {!isCombatStatsCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CombatStatsView characterId={characterId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="dark:text-white mt-6 border border-gray-500 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="dark:text-white absolute -top-4 left-4 bg-gray-200 dark:bg-gray-700 px-2 cursor-pointer inline-flex items-center"
          onClick={() => setAbilityScoresCollapsed(!isAbilityScoresCollapsed)}
        >
          Ability Scores
          {isAbilityScoresCollapsed ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}
        </Typography>
        <AnimatePresence>
          {!isAbilityScoresCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AbilityScoresView characterId={characterId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="dark:text-white mt-6 border border-gray-500 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="dark:text-white absolute -top-4 left-4 bg-gray-200 dark:bg-gray-700 px-2 cursor-pointer inline-flex items-center"
          onClick={() => setFeatsTraitsCollapsed(!isFeatsTraitsCollapsed)}
        >
          Feats & Traits
          {isFeatsTraitsCollapsed ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}
        </Typography>
        <AnimatePresence>
          {!isFeatsTraitsCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FeatsTraitsView characterId={characterId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      <div className="dark:text-white mt-6 border border-gray-500 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="dark:text-white absolute -top-4 left-4 bg-gray-200 dark:bg-gray-700 px-2 cursor-pointer inline-flex items-center"
          onClick={() => setExplorationSkillsCollapsed(!isExplorationSkillsCollapsed)}
        >
          Exploration Skills
          {isExplorationSkillsCollapsed ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}
        </Typography>
        <AnimatePresence>
          {!isExplorationSkillsCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExplorationSkillsView characterId={characterId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      
      <div className="dark:text-white mt-6 border border-gray-500 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="dark:text-white absolute -top-4 left-4 bg-gray-200 dark:bg-gray-700 px-2 cursor-pointer inline-flex items-center"
          onClick={() => setBackgroundCollapsed(!isBackgroundCollapsed)}
        >
          Background
          {isBackgroundCollapsed ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}
        </Typography>
        <AnimatePresence>
          {!isBackgroundCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BackgroundView characterId={characterId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      <div className="dark:text-white mt-6 border border-gray-500 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="dark:text-white absolute -top-4 left-4 bg-gray-200 dark:bg-gray-700 px-2 cursor-pointer inline-flex items-center"
          onClick={() => setSpellSlotsCollapsed(!isSpellSlotsCollapsed)}
        >
          Spell Slots
          {isSpellSlotsCollapsed ? (
            <ChevronUpIcon className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          )}
        </Typography>
        <AnimatePresence>
          {!isSpellSlotsCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SpellSlotsView characterId={characterId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </Card>
  );
};

export default CharacterSheetView;
