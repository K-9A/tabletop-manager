import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { Input, Checkbox, Tooltip, Typography } from "@material-tailwind/react";
import { useSkillsPassivesCreate } from "./custom-hooks-create-sheet/use-skills-passives-create";
import { MarkAsCompleteTooltip } from "@/components/helper/tooltips";

const SkillsPassivesCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    isDarkMode,
    handleChange,
    handleBlur,
    updateSkillName,
    updateSkillDescription,
    updateSkillCooldown,
    updateSkillAvailable,
    updatePassiveName,
    updatePassiveDescription,
    updatePassiveCooldown,
    updatePassiveAvailable,
    handleCheckboxChange,
  } = useSkillsPassivesCreate(props.initialData);

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
          Skills and Passives Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-10 flex gap-8">

      <Input
            variant="static"
            label="Skill Name"
            name="skill_name"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateSkillName();
            }}
            onChange={handleChange}
            value={values.skill_name}
            error={!!(errors.skill_name && touched.skill_name)}
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
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

export default SkillsPassivesCreate;
