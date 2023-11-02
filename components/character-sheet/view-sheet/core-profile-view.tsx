import { Fragment } from "react";
import ErrorMessage from "@/components/helper/error-message";
import { useCoreProfile } from "../../custom-hooks/character-sheet-hooks/create-character-hooks/use-core-profile";
import {
  handleUpdateBlur,
  handleUpdateKeyDown,
} from "@/components/helper/handle-field-updates";
import { Input, Tooltip } from "@material-tailwind/react";
import { ProficiencyTooltip } from "@/components/helper/tooltips";

const CoreProfileView = (props) => {
  const { isDarkMode, viewFormik, updateViewField, getViewErrorMessage } =
    useCoreProfile(props.characterId);

  return (
    <Fragment>
      <div className="mt-4 flex gap-3">
        <div>
          <Input
            label="Character Name"
            name="character_name"
            value={viewFormik.values.character_name}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "character_name",
                viewFormik.values.character_name,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "character_name",
                viewFormik.values.character_name,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.character_name &&
                viewFormik.touched.character_name
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("character_name")} />
        </div>
        <div>
          <Input
            label="Class"
            name="char_class"
            value={viewFormik.values.char_class}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "char_class",
                viewFormik.values.char_class,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "char_class",
                viewFormik.values.char_class,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.char_class && viewFormik.touched.char_class)
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("char_class")} />
        </div>
        <div>
          <Input
            label="Race"
            name="race"
            value={viewFormik.values.race}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "race",
                viewFormik.values.race,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "race",
                viewFormik.values.race,
                e,
                updateViewField
              )
            }
            error={!!(viewFormik.errors.race && viewFormik.touched.race)}
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />

          <ErrorMessage message={getViewErrorMessage("race")} />
        </div>

        <div>
          <Tooltip content={<ProficiencyTooltip />} placement="bottom">
            <Input
              label="Proficiency ℹ️"
              name="proficiency"
              value={viewFormik.values.proficiency}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "proficiency",
                  viewFormik.values.proficiency,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "proficiency",
                  viewFormik.values.proficiency,
                  e,
                  updateViewField
                )
              }
              error={
                !!(
                  viewFormik.errors.proficiency &&
                  viewFormik.touched.proficiency
                )
              }
              className={"dark:text-white"}
              color={isDarkMode ? "white" : "black"}
              crossOrigin=""
            />
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("proficiency")} />
        </div>
      </div>

      <div className="mt-6 mb-4 flex gap-3">
        <div>
          <Input
            label="Character Level"
            name="char_level"
            value={viewFormik.values.char_level}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "char_level",
                viewFormik.values.char_level,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "char_level",
                viewFormik.values.char_level,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.char_level && viewFormik.touched.char_level)
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("char_level")} />
        </div>
        <div>
          <Input
            label="Experience"
            name="experience"
            value={viewFormik.values.experience}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "experience",
                viewFormik.values.experience,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "experience",
                viewFormik.values.experience,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.experience && viewFormik.touched.experience)
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("experience")} />
        </div>
        <div>
          <Input
            label="Next Level"
            name="next_level"
            value={viewFormik.values.next_level}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "next_level",
                viewFormik.values.next_level,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "next_level",
                viewFormik.values.next_level,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.next_level && viewFormik.touched.next_level)
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("next_level")} />
        </div>
        <div>
          <Input
            label="Affinity"
            name="affinity"
            value={viewFormik.values.affinity}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "affinity",
                viewFormik.values.affinity,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "affinity",
                viewFormik.values.affinity,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.affinity && viewFormik.touched.affinity)
            }
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
