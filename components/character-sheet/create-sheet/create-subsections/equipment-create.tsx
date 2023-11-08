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
import { useEquipment } from "../../../custom-hooks/character-sheet-hooks/use-equipment";
import { EquipmentCreateTooltip } from "@/components/helper/tooltips";

const EquipmentCreate = (props) => {
  const {
    createFormik,
    isValid,
    isDarkMode,
    addCreateEquipment,
    removeCreateEquipment,
    updateCreateField,
    handleCheckboxChange,
  } = useEquipment("create", props.initialData);

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
        <Tooltip content={<EquipmentCreateTooltip />} placement="top">
          Equipment Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-10 flex">
        <div className="flex flex-col gap-3 px-1 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
          {createFormik.values.equipment.length === 0 ? (
            <div className="text-center w-[586px]">
              Equipment List empty. Click &quot;Add&quot; to add more equipment
              to a maximum of 20.
            </div>
          ) : (
            createFormik.values.equipment.map((equipment, index) => (
              <div key={index} className="flex gap-10 ml-4">
                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Equipment Name"
                    name={`equipment[${index}]equipment_name`}
                    placeholder="Optional"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `equipment[${index}].equipment_name`,
                        createFormik.values.equipment[index].equipment_name,
                        updateCreateField
                      )
                    }
                    value={createFormik.values.equipment[index].equipment_name}
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
                    label="Equipment Category"
                    name={`equipment[${index}].equipment_category`}
                    placeholder="Optional"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `equipment[${index}].equipment_category`,
                        createFormik.values.equipment[index].equipment_category,
                        updateCreateField
                      )
                    }
                    value={
                      createFormik.values.equipment[index].equipment_category
                    }
                    className={"dark:text-white !w-32"}
                    color={isDarkMode ? "white" : "black"}
                    labelProps={{
                      className: "!w-32",
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
                    label="Equipment Description"
                    name={`equipment[${index}].equipment_properties`}
                    placeholder="Optional"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `equipment[${index}].equipment_properties`,
                        createFormik.values.equipment[index]
                          .equipment_properties,
                        updateCreateField
                      )
                    }
                    value={
                      createFormik.values.equipment[index].equipment_properties
                    }
                    className={"dark:text-white !w-70"}
                    color={isDarkMode ? "white" : "black"}
                    labelProps={{
                      className: "!w-70",
                    }}
                    containerProps={{
                      className: "!min-w-0",
                    }}
                    crossOrigin=""
                  />
                </div>
                <div className="mt-2">
                  <Tooltip content={"Delete Equipment"}>
                    <IconButton
                      variant="text"
                      // @ts-ignore
                      color={isDarkMode ? "white" : "black"}
                      onClick={() => removeCreateEquipment(index)}
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
          <Tooltip content={"Max 20"}>
            <Button
              className="rounded-full text-xs px-2 !py-4"
              size="md"
              onClick={addCreateEquipment}
              disabled={createFormik.values.equipment.length >= 20}
            >
              Add Equipment
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

export default EquipmentCreate;
