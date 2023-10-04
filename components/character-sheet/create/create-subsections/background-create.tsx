import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import {
  Textarea,
  Checkbox,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useBackgroundCreate } from "./custom-hooks-create-sheet/use-background-create";
import { MarkAsCompleteTooltip } from "@/components/helper/tooltips";

const BackgroundCreate = (props) => {
  const {
    values,
    isValid,
    handleChange,
    handleBlur,
    updatePersonality,
    updateBackstory,
    updateBonds,
    updateAppearance,
    updateIdeals,
    updateFlaws,
    updateValuables,
    updateAdditonalTraits,
    handleCheckboxChange,
  } = useBackgroundCreate(props.initialData);

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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updatePersonality();
            }}
            onChange={handleChange}
            value={values.personality}
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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updateBackstory();
            }}
            onChange={handleChange}
            value={values.backstory}
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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updateBonds();
            }}
            onChange={handleChange}
            value={values.bonds}
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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updateAppearance();
            }}
            onChange={handleChange}
            value={values.appearance}
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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updateIdeals();
            }}
            onChange={handleChange}
            value={values.ideals}
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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updateFlaws();
            }}
            onChange={handleChange}
            value={values.flaws}
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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updateValuables();
            }}
            onChange={handleChange}
            value={values.valuables}
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
            size="md"
            onBlur={(e) => {
              handleBlur(e);
              updateAdditonalTraits();
            }}
            onChange={handleChange}
            value={values.additional_traits}
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
