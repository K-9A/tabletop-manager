import { Fragment } from "react";
import {
  handleViewArrayFieldBlur,
  handleViewArrayUpdateKeyDown,
} from "@/components/helper/handle-field-updates";
import { Input, Button, Tooltip, IconButton } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useEquipment } from "../../../custom-hooks/character-sheet-hooks/use-equipment";

const EquipmentView = (props) => {
  const {
    viewFormik,
    isDarkMode,
    addViewEquipment,
    removeViewEquipment,
    updateViewField,
  } = useEquipment("view", props.characterId);

  return (
    <Fragment>
      <div className="mt-2 mb-2 ml-3 justify-center flex">
        <div className="flex flex-col gap-3 px-1 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
          {viewFormik.values.equipment.length === 0 ? (
            <div className="text-center w-[586px]">
              Equipment List empty. Click &quot;Add&quot; to add more equipment
              to a maximum of 20.
            </div>
          ) : (
            viewFormik.values.equipment.map((equipment, index) => (
              <div key={index} className="flex gap-5 ml-4">
                <div className="mt-3">
                  <Input
                    label="Equipment Name"
                    name={`equipment[${index}]equipment_name`}
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleViewArrayFieldBlur(
                        viewFormik,
                        `equipment[${index}].equipment_name`,
                        viewFormik.values.equipment[index].equipment_name,
                        viewFormik.values.equipment[index].equipment_id,
                        updateViewField
                      )
                    }
                    onKeyDown={(e) =>
                      handleViewArrayUpdateKeyDown(
                        viewFormik,
                        `equipment[${index}].equipment_name`,
                        viewFormik.values.equipment[index].equipment_name,
                        viewFormik.values.equipment[index].equipment_id,
                        e,
                        updateViewField
                      )
                    }
                    value={viewFormik.values.equipment[index].equipment_name}
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
                    label="Equipment Category"
                    name={`equipment[${index}].equipment_category`}
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    onBlur={() =>
                      handleViewArrayFieldBlur(
                        viewFormik,
                        `equipment[${index}].equipment_category`,
                        viewFormik.values.equipment[index].equipment_category,
                        viewFormik.values.equipment[index].equipment_id,
                        updateViewField
                      )
                    }
                    onKeyDown={(e) =>
                      handleViewArrayUpdateKeyDown(
                        viewFormik,
                        `equipment[${index}].equipment_category`,
                        viewFormik.values.equipment[index].equipment_category,
                        viewFormik.values.equipment[index].equipment_id,
                        e,
                        updateViewField
                      )
                    }
                    value={
                      viewFormik.values.equipment[index].equipment_category
                    }
                    className={"dark:text-white !w-36"}
                    color={isDarkMode ? "white" : "black"}
                    labelProps={{
                      className: "!w-36",
                    }}
                    containerProps={{
                      className: "!min-w-0",
                    }}
                    crossOrigin=""
                  />
                </div>

                <div className="mt-3">
                  <Input
                    label="Equipment Properties"
                    name={`equipment[${index}].equipment_properties`}
                    onChange={(e) => {
                        viewFormik.handleChange(e);
                      }}
                      onBlur={() =>
                        handleViewArrayFieldBlur(
                          viewFormik,
                          `equipment[${index}].equipment_properties`,
                          viewFormik.values.equipment[index].equipment_properties,
                          viewFormik.values.equipment[index].equipment_id,
                          updateViewField
                        )
                      }
                      onKeyDown={(e) =>
                        handleViewArrayUpdateKeyDown(
                          viewFormik,
                          `equipment[${index}].equipment_properties`,
                          viewFormik.values.equipment[index].equipment_properties,
                          viewFormik.values.equipment[index].equipment_id,
                          e,
                          updateViewField
                        )
                      }
                      value={viewFormik.values.equipment[index].equipment_properties}
                    className={"dark:text-white"}
                    color={isDarkMode ? "white" : "black"}
                    crossOrigin=""
                  />
                </div>
                <div className="mt-3">
                  <Tooltip content={"Delete Equipment"}>
                    <IconButton
                      variant="text"
                      // @ts-ignore
                      color={isDarkMode ? "white" : "black"}
                      onClick={() => removeViewEquipment(index)}
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
                onClick={addViewEquipment}
                disabled={viewFormik.values.equipment.length >= 20}
              >
                Add Equipment
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EquipmentView;
