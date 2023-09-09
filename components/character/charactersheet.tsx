import React, { useState } from "react";
import { useFormik } from "formik";
import CoreStats from "@/components/character/subsections/corestats";
import AbilityScores from "./subsections/abilityscores";
import * as Yup from "yup";
import { Card, Typography } from "@material-tailwind/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

// Define the types for our form values
interface SheetValues {
  // You can expand on this as needed
  name: string;
  hp: number;
  // ... other fields
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  hp: Yup.number().required("HP is required"),
  // ... other validations
});

const CharacterSheet: React.FC = () => {
  //Piece of state for collapsing the subsection dividers
  const [isCoreStatsCollapsed, setCoreStatsCollapsed] = useState(false);
  const [isAbilityScoresCollapsed, setAbilityScoresCollapsed] = useState(false);

  const formik = useFormik<SheetValues>({
    initialValues: {
      name: "",
      hp: 0,
      // ... other initial values
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <Card
      color="transparent"
      shadow={false}
      className="shadow-none mt-10 p-6 bg-white w-full max-w-4xl"
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
                <CoreStats />
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
                <AbilityScores />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </Card>
  );
};

export default CharacterSheet;
