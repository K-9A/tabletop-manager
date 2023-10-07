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
import { useItemsCreate } from "./custom-hooks-create-sheet/use-items-create";
import { ItemsCreateTooltip } from "@/components/helper/tooltips";
import { FormikErrors, FormikTouched } from "formik";


const ItemsCreate = (props) => {
    const {
      values,
      errors,
      touched,
      isValid,
      isDarkMode,
      handleChange,
      handleBlur,
      addNewItem,
      removeItem,
      updateItemsField,
      getErrorMessage,
      handleCheckboxChange,
    } = useItemsCreate(props.initialData);
  
    const isItemNameError = (index: number) => {
      const itemErrors = errors.items as FormikErrors<{ item_name: string }>[];
      const itemTouched = touched.items as FormikTouched<{
        item_name: boolean;
      }>[];
      return !!(
        itemErrors &&
        itemErrors[index] &&
        itemErrors[index].item_name &&
        itemTouched &&
        itemTouched[index] &&
        itemTouched[index].item_name
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
          <Tooltip content={<ItemsCreateTooltip />} placement="top">
            Item Section ℹ️
          </Tooltip>
        </h1>
  
        <div className="mt-10 flex">
          <div className="flex flex-col gap-4 px-4 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
            {values.items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Item Name"
                    name={`items[${index}].item_name`}
                    placeholder="Required"
                    onBlur={(e) => {
                      handleBlur(e);
                      updateItemsField(index, "item_name");
                    }}
                    onChange={handleChange}
                    value={values.items[index].item_name}
                    error={isItemNameError(index)}
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
                  <ErrorMessage message={getErrorMessage("item_name", index)} />
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Item Description"
                    name={`items[${index}].item_description`}
                    placeholder="Optional"
                    onBlur={(e) => {
                      handleBlur(e);
                      updateItemsField(index, "item_description");
                    }}
                    onChange={handleChange}
                    value={values.items[index].item_description}
                    error={isItemNameError(index)}
                    className={"dark:text-white !w-52"}
                    color={isDarkMode ? "white" : "black"}
                    labelProps={{
                      className: "!w-52",
                    }}
                    containerProps={{
                      className: "!min-w-0",
                    }}
                    crossOrigin=""
                  />
                  <ErrorMessage message={getErrorMessage("item_description", index)} />
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Amount"
                    name={`items[${index}].item_amount`}
                    placeholder="Optional"
                    onBlur={(e) => {
                      handleBlur(e);
                      updateItemsField(index, "item_amount");
                    }}
                    onChange={handleChange}
                    value={values.items[index].item_amount}
                    error={isItemNameError(index)}
                    className={"dark:text-white !w-16"}
                    color={isDarkMode ? "white" : "black"}
                    labelProps={{
                      className: "!w-16",
                    }}
                    containerProps={{
                      className: "!min-w-0",
                    }}
                    crossOrigin=""
                  />
                  <ErrorMessage message={getErrorMessage("item_amount", index)} />
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Max"
                    name={`items[${index}].item_max`}
                    placeholder="Optional"
                    onBlur={(e) => {
                      handleBlur(e);
                      updateItemsField(index, "item_max");
                    }}
                    onChange={handleChange}
                    value={values.items[index].item_max}
                    error={isItemNameError(index)}
                    className={"dark:text-white !w-16"}
                    color={isDarkMode ? "white" : "black"}
                    labelProps={{
                      className: "!w-16",
                    }}
                    containerProps={{
                      className: "!min-w-0",
                    }}
                    crossOrigin=""
                  />
                  <ErrorMessage message={getErrorMessage("item_max", index)} />
                </div>
  
              </div>
            ))}
          </div>
          <div className="ml-3">
            <div>
              <Button
                className="rounded-full text-xs px-7 !py-2"
                size="md"
                onClick={addNewItem}
                disabled={values.items.length >= 40}
              >
                Add Item
              </Button>
            </div>
            <div className="mt-4">
              <Button
                className="rounded-full text-xs"
                size="sm"
                onClick={removeItem}
                disabled={values.items.length === 1}
              >
                Remove Item
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
  
  export default ItemsCreate;