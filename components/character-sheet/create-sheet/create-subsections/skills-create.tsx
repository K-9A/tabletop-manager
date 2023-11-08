import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { handleCreateArrayFieldBlur } from "@/components/helper/handle-field-updates";
import {
  Input,
  Button,
  Checkbox,
  Tooltip,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useSkills } from "../../../custom-hooks/character-sheet-hooks/use-skills";
import { SkillsCreateTooltip } from "@/components/helper/tooltips";

const SkillsCreate = (props) => {
  const {
    createFormik,
    isValid,
    isDarkMode,
    addCreateSkill,
    removeCreateSkill,
    updateCreateField,
    handleCheckboxChange,
  } = useSkills("create", props.initialData);

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
        <div className="flex flex-col gap-3 px-2 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px] overflow-y-auto">
          {createFormik.values.skills.length === 0 ? (
            <div className="text-center w-[664px]">
              Skill List empty. Click &quot;Add&quot; to add more skills to a
              maximum of 30.
            </div>
          ) : (
            createFormik.values.skills.map((skill, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Skill Name"
                    name={`skills[${index}].skill_name`}
                    placeholder="Optional"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `skills[${index}].skill_name`,
                        createFormik.values.skills[index].skill_name,
                        updateCreateField
                      )
                    }
                    value={createFormik.values.skills[index].skill_name}
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
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Skill Description"
                    name={`skills[${index}].skill_description`}
                    placeholder="Optional"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `skills[${index}].skill_description`,
                        createFormik.values.skills[index].skill_description,
                        updateCreateField
                      )
                    }
                    value={createFormik.values.skills[index].skill_description}
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
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Availability"
                    name={`skills[${index}].skill_available`}
                    placeholder="Optional"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `skills[${index}].skill_available`,
                        createFormik.values.skills[index].skill_available,
                        updateCreateField
                      )
                    }
                    value={createFormik.values.skills[index].skill_available}
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
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Cooldown"
                    name={`skills[${index}].skill_cooldown`}
                    placeholder="Optional"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `skills[${index}].skill_cooldown`,
                        createFormik.values.skills[index].skill_cooldown,
                        updateCreateField
                      )
                    }
                    value={createFormik.values.skills[index].skill_cooldown}
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
                </div>
                <div className="mt-2">
                  <Tooltip content={"Delete Skill"}>
                    <IconButton
                      variant="text"
                      // @ts-ignore
                      color={isDarkMode ? "white" : "black"}
                      onClick={() => removeCreateSkill(index)}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="ml-3">
          <div>
            <Tooltip content={"Max 30"}>
              <Button
                className="rounded-full text-xs px-5 !py-3"
                size="md"
                onClick={addCreateSkill}
                disabled={createFormik.values.skills.length >= 30}
              >
                Add Skill
              </Button>
            </Tooltip>
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
