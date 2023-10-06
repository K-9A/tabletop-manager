import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import {
  Input,
  Button,
  Checkbox,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useSkillsCreate } from "./custom-hooks-create-sheet/use-skills-create";
import { SkillsCreateTooltip } from "@/components/helper/tooltips";
import { FormikErrors, FormikTouched } from "formik";

const SkillsCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    isDarkMode,
    handleChange,
    handleBlur,
    addNewSkill,
    removeSkill,
    updateSkillField,
    getErrorMessage,
    handleCheckboxChange,
  } = useSkillsCreate(props.initialData);

  const isSkillNameError = (index: number) => {
    const skillErrors = errors.skills as FormikErrors<{ skill_name: string }>[];
    const skillTouched = touched.skills as FormikTouched<{
      skill_name: boolean;
    }>[];
    return !!(
      skillErrors &&
      skillErrors[index] &&
      skillErrors[index].skill_name &&
      skillTouched &&
      skillTouched[index] &&
      skillTouched[index].skill_name
    );
  };

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
        <Tooltip content={<SkillsCreateTooltip />} placement="top">
          Offensive Skills Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-10 flex">
        <div className="flex flex-col gap-4 px-4 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
          {values.skills.map((skill, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-3">
                <Input
                  variant="static"
                  label="Skill Name"
                  name={`skills[${index}].skill_name`}
                  placeholder="Required"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateSkillField(index, "skill_name");
                  }}
                  onChange={handleChange}
                  value={values.skills[index].skill_name}
                  error={isSkillNameError(index)}
                  className={"dark:text-white !w-28"}
                  color={isDarkMode ? "white" : "black"}
                  labelProps={{
                    className: "!w-28",
                  }}
                  containerProps={{
                    className: "!min-w-0",
                  }}
                  crossOrigin=""
                />
                <ErrorMessage message={getErrorMessage("skill_name", index)} />
              </div>

              <div className="mt-3">
                <Input
                  variant="static"
                  label="Skill Description"
                  name={`skills[${index}].skill_description`}
                  placeholder="Optional"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateSkillField(index, "skill_description");
                  }}
                  onChange={handleChange}
                  value={values.skills[index].skill_description}
                  error={isSkillNameError(index)}
                  className={"dark:text-white !w-72"}
                  color={isDarkMode ? "white" : "black"}
                  labelProps={{
                    className: "!w-72",
                  }}
                  containerProps={{
                    className: "!min-w-0",
                  }}
                  crossOrigin=""
                />
                <ErrorMessage
                  message={getErrorMessage("skill_description", index)}
                />
              </div>

              <div className="mt-3">
                <Input
                  variant="static"
                  label="Availability"
                  name={`skills[${index}].skill_available`}
                  placeholder="Optional"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateSkillField(index, "skill_available");
                  }}
                  onChange={handleChange}
                  value={values.skills[index].skill_available}
                  error={isSkillNameError(index)}
                  className={"dark:text-white !w-20"}
                  color={isDarkMode ? "white" : "black"}
                  labelProps={{
                    className: "!w-20",
                  }}
                  containerProps={{
                    className: "!min-w-0",
                  }}
                  crossOrigin=""
                />
                <ErrorMessage
                  message={getErrorMessage("skill_available", index)}
                />
              </div>

              <div className="mt-3">
                <Input
                  variant="static"
                  label="Cooldown"
                  name={`skills[${index}].skill_cooldown`}
                  placeholder="Optional"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateSkillField(index, "skill_cooldown");
                  }}
                  onChange={handleChange}
                  value={values.skills[index].skill_cooldown}
                  error={isSkillNameError(index)}
                  className={"dark:text-white !w-20"}
                  color={isDarkMode ? "white" : "black"}
                  labelProps={{
                    className: "!w-20",
                  }}
                  containerProps={{
                    className: "!min-w-0",
                  }}
                  crossOrigin=""
                />
                <ErrorMessage
                  message={getErrorMessage("skill_cooldown", index)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="ml-3">
          <div>
            <Button
              className="rounded-full text-xs px-7 !py-2"
              size="md"
              onClick={addNewSkill}
              disabled={values.skills.length >= 30}
            >
              Add Skill
            </Button>
          </div>
          <div className="mt-4">
            <Button
              className="rounded-full text-xs"
              size="sm"
              onClick={removeSkill}
              disabled={values.skills.length === 1}
            >
              Remove Skill
            </Button>
          </div>
        </div>
      </div>




      <div className="flex">
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

export default SkillsCreate;
