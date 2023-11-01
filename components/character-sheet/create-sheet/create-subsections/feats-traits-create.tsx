import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import {
  Textarea,
  Checkbox,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useFeatsTraitsCreate } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-feats-traits-create";
import { MarkAsCompleteTooltip } from "@/components/helper/tooltips";


const FeatsTraitsCreate = (props) => {
    const {
      values,
      isValid,
      handleChange,
      handleBlur,
      updateFeatsTraits,
      updateWeaponProficiency,
      updateArmorProficiency,
      updateBuffs,
      updateDebuffs,
      updateOtherProficiency,
      handleCheckboxChange
    } = useFeatsTraitsCreate(props.initialData);
  
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
              size="md"
              onBlur={(e) => {
                handleBlur(e);
                updateFeatsTraits();
              }}
              onChange={handleChange}
              value={values.feats_traits}
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
              size="md"
              onBlur={(e) => {
                handleBlur(e);
                updateWeaponProficiency();
              }}
              onChange={handleChange}
              value={values.weapon_proficiency}
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
              size="md"
              onBlur={(e) => {
                handleBlur(e);
                updateArmorProficiency();
              }}
              onChange={handleChange}
              value={values.armor_proficiency}
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
              size="md"
              onBlur={(e) => {
                handleBlur(e);
                updateBuffs();
              }}
              onChange={handleChange}
              value={values.buffs}
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
              size="md"
              onBlur={(e) => {
                handleBlur(e);
                updateDebuffs();
              }}
              onChange={handleChange}
              value={values.debuffs}
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
              size="md"
              onBlur={(e) => {
                handleBlur(e);
                updateOtherProficiency();
              }}
              onChange={handleChange}
              value={values.other_proficiency}
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
  