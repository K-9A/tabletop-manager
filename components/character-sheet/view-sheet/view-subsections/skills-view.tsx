import { Fragment } from "react";
import { handleViewArrayFieldBlur, handleViewArrayUpdateKeyDown } from "@/components/helper/handle-field-updates";
import {
  Input,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useSkills } from "../../../custom-hooks/character-sheet-hooks/use-skills";

const SkillsView = (props) => {
  const {
    viewFormik,
    isDarkMode,
    addViewSkill,
    removeViewSkill,
    updateViewField,
  } = useSkills("view", props.characterId);

  return (
    <Fragment>
      <div className="mt-2 mb-2 ml-3 justify-center flex">
        <div className="flex flex-col gap-2 px-2 py-2 rounded-lg border border-blue-gray-100 max-h-[460px] max-w-[900px]  overflow-y-auto">
          {viewFormik.values.skills.length === 0 ? (
            <div className="text-center w-[664px]">
              Skill List empty. Click &quot;Add&quot; to add more skills to a
              maximum of 30.
            </div>
          ) : (
            viewFormik.values.skills.map((skill, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-3">
                  <Input
                    label="Skill Name"
                    name={`skills[${index}].skill_name`}
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleViewArrayFieldBlur(
                        viewFormik,
                        `skills[${index}].skill_name`,
                        viewFormik.values.skills[index].skill_name,
                        viewFormik.values.skills[index].skill_id,
                        updateViewField
                      )
                    }
                    onKeyDown={(e) =>
                      handleViewArrayUpdateKeyDown(
                        viewFormik,
                        `skills[${index}].skill_name`,
                        viewFormik.values.skills[index].skill_name,
                        viewFormik.values.skills[index].skill_id,
                        e,
                        updateViewField
                      )
                    }
                    value={viewFormik.values.skills[index].skill_name}
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
                    label="Skill Description"
                    name={`skills[${index}].skill_description`}
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleViewArrayFieldBlur(
                        viewFormik,
                        `skills[${index}].skill_description`,
                        viewFormik.values.skills[index].skill_description,
                        viewFormik.values.skills[index].skill_id,
                        updateViewField
                      )
                    }
                    onKeyDown={(e) =>
                      handleViewArrayUpdateKeyDown(
                        viewFormik,
                        `skills[${index}].skill_description`,
                        viewFormik.values.skills[index].skill_description,
                        viewFormik.values.skills[index].skill_id,
                        e,
                        updateViewField
                      )
                    }
                    value={viewFormik.values.skills[index].skill_description}
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
                    label="Availability"
                    name={`skills[${index}].skill_available`}
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleViewArrayFieldBlur(
                        viewFormik,
                        `skills[${index}].skill_available`,
                        viewFormik.values.skills[index].skill_available,
                        viewFormik.values.skills[index].skill_id,
                        updateViewField
                      )
                    }
                    onKeyDown={(e) =>
                      handleViewArrayUpdateKeyDown(
                        viewFormik,
                        `skills[${index}].skill_available`,
                        viewFormik.values.skills[index].skill_available,
                        viewFormik.values.skills[index].skill_id,
                        e,
                        updateViewField
                      )
                    }
                    value={viewFormik.values.skills[index].skill_available}
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
                    label="Cooldown"
                    name={`skills[${index}].skill_cooldown`}
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleViewArrayFieldBlur(
                        viewFormik,
                        `skills[${index}].skill_cooldown`,
                        viewFormik.values.skills[index].skill_cooldown,
                        viewFormik.values.skills[index].skill_id,
                        updateViewField
                      )
                    }
                    value={viewFormik.values.skills[index].skill_cooldown}
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
                <div>
                  <Tooltip content={"Delete Skill"}>
                    <IconButton
                      className="mt-3"
                      variant="text"
                      // @ts-ignore
                      color={isDarkMode ? "white" : "black"}
                      onClick={() => removeViewSkill(index)}
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
              className="rounded-full text-xs px-3 !py-3"
              size="md"
              onClick={addViewSkill}
              disabled={viewFormik.values.skills.length >= 30}
            >
              Add Skill
            </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillsView;
