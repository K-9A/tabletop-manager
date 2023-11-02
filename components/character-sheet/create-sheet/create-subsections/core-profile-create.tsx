import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useCoreProfile } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-core-profile";
import { handleUpdateBlur } from "@/components/helper/handle-field-updates";
import { Input, Tooltip } from "@material-tailwind/react";
import { ProficiencyTooltip } from "@/components/helper/tooltips";

const CoreProfileCreate = (props) => {
  const { createFormik, isDarkMode, updateCreateField, getCreateErrorMessage } =
    useCoreProfile(props.initialData);

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
            name="character_name"
            placeholder="Required"
            value={createFormik.values.character_name}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "character_name",
                createFormik.values.character_name,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.character_name &&
                createFormik.touched.character_name
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("character_name")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Class"
            name="char_class"
            placeholder="Required"
            value={createFormik.values.character_name}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "char_class",
                createFormik.values.char_class,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.char_class &&
                createFormik.touched.char_class
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("char_class")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Race"
            name="race"
            placeholder="Required"
            value={createFormik.values.race}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "race",
                createFormik.values.race,
                updateCreateField
              )
            }
            error={!!(createFormik.errors.race && createFormik.touched.race)}
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />

          <ErrorMessage message={getCreateErrorMessage("race")} />
        </div>

        <div>
          <Tooltip content={<ProficiencyTooltip />} placement="bottom">
            <Input
              variant="static"
              label="Proficiency ℹ️"
              name="proficiency"
              placeholder="Required"
              value={createFormik.values.race}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "proficiency",
                  createFormik.values.proficiency,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.proficiency &&
                  createFormik.touched.proficiency
                )
              }
              className={"dark:text-white"}
              color={isDarkMode ? "white" : "black"}
              crossOrigin=""
            />
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("proficiency")} />
        </div>
      </div>

      <div className="mt-20 mb-12 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Character Level"
            name="char_level"
            placeholder="Required"
            value={createFormik.values.char_level}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "char_level",
                createFormik.values.char_level,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.char_level &&
                createFormik.touched.char_level
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("char_level")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Experience"
            name="experience"
            placeholder="Required"
            value={createFormik.values.experience}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "experience",
                createFormik.values.experience,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.experience &&
                createFormik.touched.experience
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("experience")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Next Level"
            name="next_level"
            placeholder="Required"
            value={createFormik.values.next_level}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "next_level",
                createFormik.values.next_level,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.next_level &&
                createFormik.touched.next_level
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("next_level")} />
        </div>
        <div>
          <Input
            variant="static"
            label="Affinity"
            name="affinity"
            placeholder="Optional"
            value={createFormik.values.affinity}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "affinity",
                createFormik.values.affinity,
                updateCreateField
              )
            }
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
