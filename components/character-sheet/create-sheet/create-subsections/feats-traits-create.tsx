import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import {
  Textarea,
  Checkbox,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useFeatsTraits } from "../../../custom-hooks/character-sheet-hooks/use-feats-traits";
import { handleUpdateBlur } from "@/components/helper/handle-field-updates";
import { MarkAsCompleteTooltip } from "@/components/helper/tooltips";


const FeatsTraitsCreate = (props) => {
  const {
    createFormik,
    isDarkMode,
    updateCreateField,
    getCreateErrorMessage,
    isValid,
    handleCheckboxChange,
  } = useFeatsTraits("create", props.initialData);

  
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
            Features and Traits Section ℹ️
          </Tooltip>
        </h1>
  
        <div className="mt-10 flex gap-8">
          <div className="w-64">
            <Textarea
              variant="static"
              name="feats_traits"
              label="Features and Traits"
              placeholder="Optional"
              value={createFormik.values.feats_traits}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "feats_traits",
                  createFormik.values.feats_traits,
                  updateCreateField
                )
              }
              className="dark:text-white"
              labelProps={{
                className: "!text-black dark:!text-white !mb-8",
              }}
            />
          </div>

          <div className="w-64">
            <Textarea
              variant="static"
              name="weapon_proficiency"
              label="Weapon Proficiency"
              placeholder="Optional"
              value={createFormik.values.weapon_proficiency}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "weapon_proficiency",
                  createFormik.values.weapon_proficiency,
                  updateCreateField
                )
              }
              className="dark:text-white"
              labelProps={{
                className: "!text-black dark:!text-white !mb-8",
              }}
            />
          </div>

          <div  className="w-64">
            <Textarea
              variant="static"
              name="armor_proficiency"
              label="Armor Proficiency"
              placeholder="Optional"
              value={createFormik.values.armor_proficiency}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "armor_proficiency",
                  createFormik.values.armor_proficiency,
                  updateCreateField
                )
              }
              className="dark:text-white"
              labelProps={{
                className: "!text-black dark:!text-white !mb-8",
              }}
            />
          </div>
        </div>
  
        <div className="mt-10 flex gap-8">
          <div className="w-64">
            <Textarea
              variant="static"
              name="buffs"
              label="Buffs"
              placeholder="Optional"
              value={createFormik.values.buffs}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "buffs",
                  createFormik.values.buffs,
                  updateCreateField
                )
              }
              className="dark:text-white"
              labelProps={{
                className: "!text-black dark:!text-white !mb-8",
              }}
            />
          </div>

          <div className="w-64">
            <Textarea
              variant="static"
              name="debuffs"
              label="Debuffs"
              placeholder="Optional"
              value={createFormik.values.debuffs}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "debuffs",
                  createFormik.values.debuffs,
                  updateCreateField
                )
              }
              className="dark:text-white"
              labelProps={{
                className: "!text-black dark:!text-white !mb-8",
              }}
            />
          </div>

          <div  className="w-64">
            <Textarea
              variant="static"
              name="other_proficiency"
              label="Other Proficiencies"
              placeholder="Optional"
              value={createFormik.values.other_proficiency}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "other_proficiency",
                  createFormik.values.other_proficiency,
                  updateCreateField
                )
              }
              className="dark:text-white"
              labelProps={{
                className: "!text-black dark:!text-white !mb-8",
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
  
  export default FeatsTraitsCreate;
  