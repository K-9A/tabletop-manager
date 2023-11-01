import { Fragment } from "react";
import ErrorMessage from "@/components/helper/error-message";
import { useCoreProfileCreate } from "../../custom-hooks/character-sheet-hooks/create-character-hooks/use-core-profile-create";

import { Input, Tooltip } from "@material-tailwind/react";
import { ProficiencyTooltip } from "@/components/helper/tooltips";

const CoreProfileView = (props) => {
  const {
    values,
    errors,
    touched,
    isDarkMode,
    formik,
    updateViewField,
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
    <Fragment>
      <div className="mt-4 flex gap-3">
        <div>
          <Input
            label="Character Name"
            name="name"
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
            label="Class"
            name="char_class"
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
            label="Race"
            name="race"
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
              label="Proficiency ℹ️"
              name="proficiency"
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

      <div className="mt-6 mb-4 flex gap-3">
        <div>
          <Input
            label="Character Level"
            name="char_level"
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
            label="Experience"
            name="experience"
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
            label="Next Level"
            name="next_level"
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
            label="Affinity"
            name="affinity"
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
    </Fragment>
  );
};

export default CoreProfileView;
