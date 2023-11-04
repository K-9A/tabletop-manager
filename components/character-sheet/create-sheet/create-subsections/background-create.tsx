import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import {
  Textarea,
  Checkbox,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useBackground } from "../../../custom-hooks/character-sheet-hooks/use-background";
import { handleUpdateBlur } from "@/components/helper/handle-field-updates";
import { MarkAsCompleteTooltip } from "@/components/helper/tooltips";

const BackgroundCreate = (props) => {
  const {
    createFormik,
    isDarkMode,
    updateCreateField,
    getCreateErrorMessage,
    isValid,
    handleCheckboxChange,
  } = useBackground("create", props.initialData);

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
        <Tooltip content={<MarkAsCompleteTooltip />} placement="top">
          Character Background Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-10 flex gap-4">
        <div>
          <Textarea
            variant="static"
            name="personality"
            label="Personality"
            placeholder="Optional"
            value={createFormik.values.personality}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "personality",
                createFormik.values.personality,
                updateCreateField
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
            variant="static"
            name="backstory"
            label="Backstory"
            placeholder="Optional"
            value={createFormik.values.backstory}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "backstory",
                createFormik.values.backstory,
                updateCreateField
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
            variant="static"
            name="bonds"
            label="Bonds"
            placeholder="Optional"
            value={createFormik.values.bonds}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "bonds",
                createFormik.values.bonds,
                updateCreateField
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
            variant="static"
            name="appearance"
            label="Appearance"
            placeholder="Optional"
            value={createFormik.values.appearance}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "appearance",
                createFormik.values.appearance,
                updateCreateField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <div>
          <Textarea
            variant="static"
            name="ideals"
            label="Ideals"
            placeholder="Optional"
            value={createFormik.values.ideals}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "ideals",
                createFormik.values.ideals,
                updateCreateField
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
            variant="static"
            name="flaws"
            label="Flaws"
            placeholder="Optional"
            value={createFormik.values.flaws}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "flaws",
                createFormik.values.flaws,
                updateCreateField
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
            variant="static"
            name="valuables"
            label="Valuabes"
            placeholder="Optional"
            value={createFormik.values.valuables}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "valuables",
                createFormik.values.valuables,
                updateCreateField
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
            variant="static"
            name="additional_traits"
            label="Additional Features & Traits"
            placeholder="Optional"
            value={createFormik.values.additional_traits}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "additional_traits",
                createFormik.values.additional_traits,
                updateCreateField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white",
            }}
          />
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <Checkbox
          id="complete"
          label={
            <Typography className="dark:text-white">
              Mark as Complete
            </Typography>
          }
          ripple={true}
          onChange={handleCheckboxChange}
          checked={isValid}
          crossOrigin=""
          className="dark:text-white"
          labelProps={{
            className: "!text-black dark:!text-white",
          }}
        />
      </div>
    </motion.div>
  );
};

export default BackgroundCreate;
