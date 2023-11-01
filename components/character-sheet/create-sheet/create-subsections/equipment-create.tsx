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
import { useEquipmentCreate } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-equipment-create";
import { EquipmentCreateTooltip } from "@/components/helper/tooltips";
import { FormikErrors, FormikTouched } from "formik";

const EquipmentCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    isDarkMode,
    handleChange,
    handleBlur,
    addNewEquipment,
    removeEquipment,
    updateEquipmentField,
    getErrorMessage,
    handleCheckboxChange,
  } = useEquipmentCreate(props.initialData);


  const isEquipmentNameError = (index: number) => {
    const equipmmentErrors = errors.equipment as FormikErrors<{
      equipment_name: string;
    }>[];
    const equipmmentTouched = touched.equipment as FormikTouched<{
      equipment_name: boolean;
    }>[];
    return !!(
      equipmmentErrors &&
      equipmmentErrors[index] &&
      equipmmentErrors[index].equipment_name &&
      equipmmentTouched &&
      equipmmentTouched[index] &&
      equipmmentTouched[index].equipment_name
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
        <Tooltip content={<EquipmentCreateTooltip />} placement="top">
          Equipment Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-10 flex">
        <div className="flex flex-col gap-4 px-4 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
          {values.equipment.map((equipment, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-3">
                <Input
                  variant="static"
                  label="Equipment Name"
                  name={`equipment[${index}]equipment_name`}
                  placeholder="Required"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateEquipmentField(index, "equipment_name");
                  }}
                  onChange={handleChange}
                  value={values.equipment[index].equipment_name}
                  error={isEquipmentNameError(index)}
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
                <ErrorMessage message={getErrorMessage("equipment_name", index)} />
              </div>

              <div className="mt-3">
                <Input
                  variant="static"
                  label="Equipment Category"
                  name={`equipment[${index}].equipment_category`}
                  placeholder="Optional"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateEquipmentField(index, "equipment_category");
                  }}
                  onChange={handleChange}
                  value={values.equipment[index].equipment_category}
                  error={isEquipmentNameError(index)}
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
                <ErrorMessage
                  message={getErrorMessage("equipment_category", index)}
                />
              </div>

              <div className="mt-3">
                <Input
                  variant="static"
                  label="Equipment Description"
                  name={`equipment[${index}].equipment_properties`}
                  placeholder="Optional"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateEquipmentField(index, "equipment_properties");
                  }}
                  onChange={handleChange}
                  value={values.equipment[index].equipment_properties}
                  error={isEquipmentNameError(index)}
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
                <ErrorMessage
                  message={getErrorMessage("equipment_properties", index)}
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
              onClick={addNewEquipment}
              disabled={values.equipment.length >= 20}
            >
              Add Equipment
            </Button>
          </div>
          <div className="mt-4">
            <Button
              className="rounded-full text-xs"
              size="sm"
              onClick={removeEquipment}
              disabled={values.equipment.length === 1}
            >
              Remove Equipment
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



export default EquipmentCreate;
