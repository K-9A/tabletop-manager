import React, { useState } from "react";
import { useFormik } from "formik";
import CoreProfileView from "@/components/character-sheet/view/view-subsections/core-stats/core-profile-view";
import AbilityScoresView from "@/components/character-sheet/view/view-subsections/ability-scores/ability-scores-view";
import * as Yup from "yup";
import { Card, Typography } from "@material-tailwind/react";
import { CoreProfileValues } from "../../types/character-types";


import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";


const validationSchema = Yup.object({
  name: Yup.string().required("Character Name is required"),
  hp: Yup.number()
     .min(0, "HP cannot be negative")
     .required("HP value is required"),
  strength: Yup.number()
     .min(1, "Strength should be at least 1")
     .max(20, "Strength cannot exceed 20")
     .required("Strength is required"),
  // ... other validations
});

const CharacterSheetView = () => {
  //Piece of state for collapsing the subsection dividers
  const [isCoreStatsCollapsed, setCoreStatsCollapsed] = useState(false);
  const [isAbilityScoresCollapsed, setAbilityScoresCollapsed] = useState(false);

  const formik = useFormik<CoreProfileValues>({
    initialValues: {
      name: ""
      // ... other initial values
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Card
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray" className="mb-4">
        Character Sheet
      </Typography>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Core Stats Section */}
        <div className="border p-4 relative">
          <Typography
            variant="h6"
            color="blue-gray"
            className="absolute -top-4 left-4 bg-white px-2 cursor-pointer inline-flex items-center"
            onClick={() => setCoreStatsCollapsed(!isCoreStatsCollapsed)}
          >
            Core Stats
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

        {/* Ability Scores Section */}
        <div className="border p-4 relative">
          <Typography
            variant="h6"
            color="blue-gray"
            className="absolute -top-4 left-4 bg-white px-2 cursor-pointer inline-flex items-center"
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
                <AbilityScoresView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </Card>
  );
};

export default CharacterSheetView;
