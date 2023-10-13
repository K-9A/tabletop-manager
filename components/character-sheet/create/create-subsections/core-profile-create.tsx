import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useCoreProfileCreate } from "../../../custom-hooks/character-sheet-hooks/use-core-profile-create";

import { Input, Tooltip } from "@material-tailwind/react";
import { ProficiencyTooltip } from "@/components/helper/tooltips";

const CoreProfileCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isDarkMode,
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
      <h1 className="font-bold text-left w-full text-2xl dark:text-white">
        Core Profile Section
      </h1>
      <div className="mt-16 flex gap-3">
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
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
              error={!!(errors.proficiency && touched.proficiency)}
              className={"dark:text-white"}
              color={isDarkMode ? "white" : "black"}
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CoreProfileCreate;
