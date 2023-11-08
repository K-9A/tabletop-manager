import { Fragment } from "react";
import {
  handleViewArrayFieldBlur,
  handleViewArrayUpdateKeyDown,
} from "@/components/helper/handle-field-updates";
import { Input, Button, Tooltip, IconButton } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useItems } from "../../../custom-hooks/character-sheet-hooks/use-items";

const ItemsView = (props) => {
  const {
    viewFormik,
    isDarkMode,
    addViewItem,
    removeViewItem,
    updateViewField,
  } = useItems("view", props.characterId);

  return (
    <Fragment>
      <div className="mt-2 mb-2 ml-3 justify-center flex">
        <div className="flex flex-col gap-3 px-2 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
          {viewFormik.values.items.length === 0 ? (
            <div className="text-center w-[592px]">
              Item List empty. Click &quot;Add&quot; to add more items to a
              maximum of 40.
            </div>
          ) : (
            viewFormik.values.items.map((item, index) => (
              <div key={index} className="flex gap-6 ml-4">
                <div className="mt-3">
                  <Input
                    label="Item Name"
                    name={`items[${index}].item_name`}
                    onChange={(e) => {
                        viewFormik.handleChange(e);
                      }}
                    onBlur={() =>
                      handleViewArrayFieldBlur(
                        viewFormik,
                        `items[${index}].item_name`,
                        viewFormik.values.items[index].item_name,
                        viewFormik.values.items[index].item_id,
                        updateViewField
                      )
                    }
                    onKeyDown={(e) =>
                        handleViewArrayUpdateKeyDown(
                          viewFormik,
                          `items[${index}].item_name`,
                          viewFormik.values.items[index].item_name,
                          viewFormik.values.items[index].item_id,
                          e,
                          updateViewField
                        )
                      }
                    value={viewFormik.values.items[index].item_name}
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
                    label="Item Description"
                    name={`items[${index}].item_description`}
                    onBlur={() =>
                        handleViewArrayFieldBlur(
                          viewFormik,
                          `items[${index}].item_description`,
                          viewFormik.values.items[index].item_description,
                          viewFormik.values.items[index].item_id,
                          updateViewField
                        )
                      }
                      onKeyDown={(e) =>
                          handleViewArrayUpdateKeyDown(
                            viewFormik,
                            `items[${index}].item_description`,
                            viewFormik.values.items[index].item_description,
                            viewFormik.values.items[index].item_id,
                            e,
                            updateViewField
                          )
                        }
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    value={viewFormik.values.items[index].item_description}
                    className={"dark:text-white"}
                    color={isDarkMode ? "white" : "black"}
                    crossOrigin=""
                  />
                </div>

                <div className="mt-3">
                  <Input
                    label="Amount"
                    name={`items[${index}].item_amount`}
                    onBlur={() =>
                        handleViewArrayFieldBlur(
                          viewFormik,
                          `items[${index}].item_amount`,
                          viewFormik.values.items[index].item_amount,
                          viewFormik.values.items[index].item_id,
                          updateViewField
                        )
                      }
                      onKeyDown={(e) =>
                          handleViewArrayUpdateKeyDown(
                            viewFormik,
                            `items[${index}].item_amount`,
                            viewFormik.values.items[index].item_amount,
                            viewFormik.values.items[index].item_id,
                            e,
                            updateViewField
                          )
                        }
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    value={viewFormik.values.items[index].item_amount}
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
                    label="Max"
                    name={`items[${index}].item_max`}
                    onBlur={() =>
                        handleViewArrayFieldBlur(
                          viewFormik,
                          `items[${index}].item_max`,
                          viewFormik.values.items[index].item_max,
                          viewFormik.values.items[index].item_id,
                          updateViewField
                        )
                      }
                      onKeyDown={(e) =>
                          handleViewArrayUpdateKeyDown(
                            viewFormik,
                            `items[${index}].item_max`,
                            viewFormik.values.items[index].item_max,
                            viewFormik.values.items[index].item_id,
                            e,
                            updateViewField
                          )
                        }
                    onChange={(e) => {
                      viewFormik.handleChange(e);
                    }}
                    value={viewFormik.values.items[index].item_max}
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
                      onClick={() => removeViewItem(index)}
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
                onClick={addViewItem}
                disabled={viewFormik.values.items.length >= 40}
              >
                Add Item
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemsView;
