import { Fragment } from "react";
import {
  Textarea,
} from "@material-tailwind/react";
import { useBackground } from "../../../custom-hooks/character-sheet-hooks/use-background";
import { handleUpdateBlur,handleUpdateKeyDown } from "@/components/helper/handle-field-updates";

const BackgroundView = (props) => {
  const {
    viewFormik,
    isDarkMode,
    updateViewField,
    getViewErrorMessage,
  } = useBackground("view", props.characterId);

  return (
    <Fragment>
      <div className="mt-6 flex gap-3">
        <div>
          <Textarea
            name="personality"
            label="Personality"
            value={viewFormik.values.personality}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "personality",
                viewFormik.values.personality,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "personality",
                viewFormik.values.personality,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white !mb-8",
            }}
          />
        </div>
        <div>
          <Textarea
            name="backstory"
            label="Backstory"
            value={viewFormik.values.backstory}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "backstory",
                viewFormik.values.backstory,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "backstory",
                viewFormik.values.backstory,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
        <div>
          <Textarea
            name="bonds"
            label="Bonds"
            value={viewFormik.values.bonds}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "bonds",
                viewFormik.values.bonds,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "bonds",
                viewFormik.values.bonds,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
        <div>
          <Textarea
            name="appearance"
            label="Appearance"
            value={viewFormik.values.appearance}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "appearance",
                viewFormik.values.appearance,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "appearance",
                viewFormik.values.appearance,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
      </div>

      <div className="mt-3 flex gap-3 mb-2">
        <div>
          <Textarea
            name="ideals"
            label="Ideals"
            value={viewFormik.values.ideals}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "ideals",
                viewFormik.values.ideals,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "ideals",
                viewFormik.values.ideals,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
        <div>
          <Textarea
            name="flaws"
            label="Flaws"
            value={viewFormik.values.flaws}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "flaws",
                viewFormik.values.flaws,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "flaws",
                viewFormik.values.flaws,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
        <div>
          <Textarea
            name="valuables"
            label="Valuabes"
            value={viewFormik.values.valuables}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "valuables",
                viewFormik.values.valuables,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "valuables",
                viewFormik.values.valuables,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
        <div>
          <Textarea
            name="additional_traits"
            label="Additional Features & Traits"
            value={viewFormik.values.additional_traits}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "additional_traits",
                viewFormik.values.additional_traits,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "additional_traits",
                viewFormik.values.additional_traits,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
      </div>
      </Fragment>
  );
};

export default BackgroundView;
