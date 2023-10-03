import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { useFormik } from "formik";
import ErrorMessage from "@/components/helper/error-message";
import * as Yup from "yup";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { createCoreProfileActions } from "@/store/create-sheet-store/core-stats-create/core-profile-create-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useCoreProfileCreate } from "./custom-hooks-create-sheet/use-core-profile-create";

import { CoreProfileCreateValues } from "@/components/types/create-sheet-types";
import { Input, Tooltip } from "@material-tailwind/react";
import { ProficiencyTooltip } from "@/components/helper/tooltips";

const validationSchema = Yup.object({
  name: Yup.string().required("Character Name is required"),
  char_class: Yup.string().required("Class is required"),
  race: Yup.string().required("Race is required"),
  proficiency: Yup.number()
    .typeError("Proficiency must be a number")
    .min(2, "Proficiency must be least 2")
    .max(6, "Proficiency cannot exceed 6")
    .required("Proficiency is required"),
  char_level: Yup.number()
    .typeError("Level must be a number")
    .min(1, "Level should be at least 1")
    .max(20, "Level cannot exceed 20")
    .required("Level is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .min(0, "Experience cannot be negative")
    .required("Experience is required"),
  next_level: Yup.number()
    .typeError("Next Level must be a number")
    .min(0, "Next Level cannot be negative")
    .required("Next Level is required"),
});

const CoreProfileCreate = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    updateCharacterName,
    updateCharacterClass,
    updateRace,
    updateProficiency,
    updateCharacterLevel,
    updateExperience,
    updateNextLevel,
    updateAffinity,
    getErrorMessage,
  } = useCoreProfileCreate(props.initialData);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="mt-3"
    >
      <h1 className="font-bold text-left w-full text-2xl">
        Core Profile Section
      </h1>
      <div className="mt-16 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Character Name"
            name="name"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateCharacterName();
            }}
            onChange={handleChange}
            value={values.name}
            error={!!(errors.name && touched.name)}
            crossOrigin=""
          />
          <ErrorMessage message={getErrorMessage("name")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Class"
            name="char_class"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateCharacterClass();
            }}
            onChange={handleChange}
            value={values.char_class}
            error={!!(errors.char_class && touched.char_class)}
            crossOrigin=""
          />
          <ErrorMessage message={getErrorMessage("char_class")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Race"
            name="race"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateRace();
            }}
            onChange={handleChange}
            value={values.race}
            error={!!(errors.race && touched.race)}
            crossOrigin=""
          />

           <ErrorMessage message={getErrorMessage("race")} />
        </div>

        <div>
          <Tooltip content={<ProficiencyTooltip />} placement="bottom">
            <Input
              variant="static"
              label="Proficiency ℹ️"
              name="proficiency"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateProficiency();
              }}
              onChange={handleChange}
              value={values.proficiency}
              error={
                !!(errors.proficiency && touched.proficiency)
              }
              crossOrigin=""
            />
          </Tooltip>
          <ErrorMessage message={getErrorMessage("proficiency")} />
        </div>
      </div>

      <div className="mt-20 mb-12 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Character Level"
            name="char_level"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateCharacterLevel();
            }}
            onChange={handleChange}
            value={values.char_level}
            error={!!(errors.char_level && touched.char_level)}
            crossOrigin=""
          />
          <ErrorMessage message={getErrorMessage("char_level")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Experience"
            name="experience"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateExperience();
            }}
            onChange={handleChange}
            value={values.experience}
            error={!!(errors.experience && touched.experience)}
            crossOrigin=""
          />
          <ErrorMessage message={getErrorMessage("experience")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Next Level"
            name="next_level"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateNextLevel();
            }}
            onChange={handleChange}
            value={values.next_level}
            error={!!(errors.next_level && touched.next_level)}
            crossOrigin=""
          />
          <ErrorMessage message={getErrorMessage("next_level")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Affinity"
            name="affinity"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateAffinity();
            }}
            onChange={handleChange}
            value={values.affinity}
            crossOrigin=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CoreProfileCreate;
