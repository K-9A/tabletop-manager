import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { handleCreateArrayFieldBlur } from "@/components/helper/handle-field-updates";
import {
  Input,
  Button,
  Checkbox,
  Tooltip,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useItems } from "../../../custom-hooks/character-sheet-hooks/use-items";
import { ItemsCreateTooltip } from "@/components/helper/tooltips";

const ItemsCreate = (props) => {
  const {
    createFormik,
    isValid,
    isDarkMode,
    addCreateItem,
    removeCreateItem,
    updateCreateField,
    handleCheckboxChange,
  } = useItems("create", props.initialData);

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
        <div className="flex flex-col gap-3 px-2 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
          {createFormik.values.items.length === 0 ? (
            <div className="text-center w-[592px]">
              Item List empty. Click &quot;Add&quot; to add more items to a
              maximum of 30.
            </div>
          ) : (
            createFormik.values.items.map((item, index) => (
              <div key={index} className="flex gap-6 ml-4">
                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Item Name"
                    name={`items[${index}].item_name`}
                    placeholder="Optional"
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `items[${index}].item_name`,
                        createFormik.values.items[index].item_name,
                        updateCreateField
                      )
                    }
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    value={createFormik.values.items[index].item_name}
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
                    label="Item Description"
                    name={`items[${index}].item_description`}
                    placeholder="Optional"
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `items[${index}].item_description`,
                        createFormik.values.items[index].item_description,
                        updateCreateField
                      )
                    }
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    value={createFormik.values.items[index].item_description}
                    className={"dark:text-white"}
                    color={isDarkMode ? "white" : "black"}
                    crossOrigin=""
                  />
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Amount"
                    name={`items[${index}].item_amount`}
                    placeholder="Optional"
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `items[${index}].item_amount`,
                        createFormik.values.items[index].item_amount,
                        updateCreateField
                      )
                    }
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    value={createFormik.values.items[index].item_amount}
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
                </div>

                <div className="mt-3">
                  <Input
                    variant="static"
                    label="Max"
                    name={`items[${index}].item_max`}
                    placeholder="Optional"
                    onBlur={() =>
                      handleCreateArrayFieldBlur(
                        createFormik,
                        `items[${index}].item_max`,
                        createFormik.values.items[index].item_max,
                        updateCreateField
                      )
                    }
                    onChange={(e) => {
                      createFormik.handleChange(e);
                    }}
                    value={createFormik.values.items[index].item_max}
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
                </div>
                <div className="mt-2">
                  <Tooltip content={"Delete Item"}>
                    <IconButton
                      variant="text"
                      // @ts-ignore
                      color={isDarkMode ? "white" : "black"}
                      onClick={() => removeCreateItem(index)}
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
          <Tooltip content={"Max 40"}>
            <Button
              className="rounded-full text-xs px-5 !py-3"
              size="md"
              onClick={addCreateItem}
              disabled={createFormik.values.items.length >= 40}
            >
              Add Item
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

export default ItemsCreate;
