import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

import CoreProfileView from "./core-profile-view";


interface CharacterViewProps {
  characterId: string;
}

const CharacterSheetView: React.FC<CharacterViewProps> = ({ characterId }) => {

  //Piece of state for collapsing the subsection dividers
  const [isCoreStatsCollapsed, setCoreStatsCollapsed] = useState(false);
  const [isAbilityScoresCollapsed, setAbilityScoresCollapsed] = useState(false);

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="mb-4">
        Character Sheet #{characterId}
      </Typography>

      {/* Core Stats Section */}
      <div className="mt-5 border border-gray-400 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="absolute -top-4 left-4 bg-gray-200 px-2 cursor-pointer inline-flex items-center"
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
              <CoreProfileView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 border border-gray-500 p-4 py-2 relative rounded-lg">
        <Typography
          variant="h6"
          color="blue-gray"
          className="absolute -top-4 left-4 bg-gray-200 px-2 cursor-pointer inline-flex items-center"
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
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default CharacterSheetView;
