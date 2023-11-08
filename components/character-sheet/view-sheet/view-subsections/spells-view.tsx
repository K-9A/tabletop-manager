import { Fragment } from "react";
import { handleViewArrayFieldBlur, handleViewArrayUpdateKeyDown } from "@/components/helper/handle-field-updates";
import {
  Input,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useSpells } from "@/components/custom-hooks/character-sheet-hooks/use-spells";

const SpellsView = (props) => {
  const {
    viewFormik,
    isDarkMode,
    addViewSpell,
    removeViewSpell,
    updateViewField,
  } = useSpells("view", props.characterId);

  return (
    <Fragment>

<div className="mt-2 mb-2 ml-3 justify-center flex">
        <div className="flex flex-col gap-3 px-2 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px] overflow-y-auto">
        {viewFormik.values.spells.length === 0 ? (
            <div className="text-center w-[616px]">
              Spell List empty. Click &quot;Add&quot; to add more spells to a
              maximum of 40.
            </div>
          ) : (
          viewFormik.values.spells.map((spell, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-3">
                <Input
                  label="Spell Name"
                  name={`spells[${index}].spell_name`}
                  onChange={(e) => {
                    viewFormik.handleChange(e);
                  }}
                  onBlur={() =>
                    handleViewArrayFieldBlur(
                      viewFormik,
                      `spells[${index}].spell_name`,
                      viewFormik.values.spells[index].spell_name,
                      viewFormik.values.spells[index].spell_id,
                      updateViewField
                    )
                  }
                  onKeyDown={(e) =>
                    handleViewArrayUpdateKeyDown(
                      viewFormik,
                      `spells[${index}].spell_name`,
                      viewFormik.values.spells[index].spell_name,
                      viewFormik.values.spells[index].spell_id,
                      e,
                      updateViewField
                    )
                  }
                  value={viewFormik.values.spells[index].spell_name}
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
                  label="Spell Description"
                  name={`spells[${index}].spell_description`}
                  onChange={(e) => {
                    viewFormik.handleChange(e);
                  }}
                  onBlur={() =>
                    handleViewArrayFieldBlur(
                      viewFormik,
                      `spells[${index}].spell_description`,
                      viewFormik.values.spells[index].spell_description,
                      viewFormik.values.spells[index].spell_id,
                      updateViewField
                    )
                  }
                  onKeyDown={(e) =>
                    handleViewArrayUpdateKeyDown(
                      viewFormik,
                      `spells[${index}].spell_description`,
                      viewFormik.values.spells[index].spell_description,
                      viewFormik.values.spells[index].spell_id,
                      e,
                      updateViewField
                    )
                  }
                  value={viewFormik.values.spells[index].spell_description}
                  className={"dark:text-white !w-80"}
                  color={isDarkMode ? "white" : "black"}
                  labelProps={{
                    className: "!w-80",
                  }}
                  containerProps={{
                    className: "!min-w-0",
                  }}
                  crossOrigin=""
                />
              </div>

              <div className="mt-3">
                <Input
                  label="Spell Tier"
                  name={`spells[${index}].spell_tier`}
                  onChange={(e) => {
                    viewFormik.handleChange(e);
                  }}
                  onBlur={() =>
                    handleViewArrayFieldBlur(
                      viewFormik,
                      `spells[${index}].spell_tier`,
                      viewFormik.values.spells[index].spell_tier,
                      viewFormik.values.spells[index].spell_id,
                      updateViewField
                    )
                  }
                  onKeyDown={(e) =>
                    handleViewArrayUpdateKeyDown(
                      viewFormik,
                      `spells[${index}].spell_tier`,
                      viewFormik.values.spells[index].spell_tier,
                      viewFormik.values.spells[index].spell_id,
                      e,
                      updateViewField
                    )
                  }
                  value={viewFormik.values.spells[index].spell_tier}
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
                  <Tooltip content={"Delete Spell"}>
                    <IconButton
                      variant="text"
                      // @ts-ignore
                      color={isDarkMode ? "white" : "black"}
                      onClick={() => removeViewSpell(index)}
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
                className="rounded-full text-xs px-4 !py-3"
                size="md"
                onClick={addViewSpell}
                disabled={viewFormik.values.spells.length >= 40}
              >
                Add Spell
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpellsView;
