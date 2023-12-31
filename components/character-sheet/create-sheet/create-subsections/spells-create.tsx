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
import { useSpells } from "@/components/custom-hooks/character-sheet-hooks/use-spells";
import { SpellsCreateTooltip } from "@/components/helper/tooltips";

const SpellsCreate = (props) => {
  const {
    createFormik,
    isValid,
    isDarkMode,
    addCreateSpell,
    removeCreateSpell,
    updateCreateField,
    handleCheckboxChange,
  } = useSpells("create", props.initialData);

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
        <Tooltip content={<SpellsCreateTooltip />} placement="top">
          Spells and Cantrips Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-10 flex">
        <div className="flex flex-col gap-3 px-2 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px] overflow-y-auto">
        {createFormik.values.spells.length === 0 ? (
            <div className="text-center w-[616px]">
              Spell List empty. Click &quot;Add&quot; to add more spells to a
              maximum of 40.
            </div>
          ) : (
          createFormik.values.spells.map((spell, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-3">
                <Input
                  variant="static"
                  label="Spell Name"
                  name={`spells[${index}].spell_name`}
                  placeholder="Optional"
                  onChange={(e) => {
                    createFormik.handleChange(e);
                  }}
                  onBlur={() =>
                    handleCreateArrayFieldBlur(
                      createFormik,
                      `spells[${index}].spell_name`,
                      createFormik.values.spells[index].spell_name,
                      updateCreateField
                    )
                  }
                  value={createFormik.values.spells[index].spell_name}
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
                  label="Spell Description"
                  name={`spells[${index}].spell_description`}
                  placeholder="Optional"
                  onChange={(e) => {
                    createFormik.handleChange(e);
                  }}
                  onBlur={() =>
                    handleCreateArrayFieldBlur(
                      createFormik,
                      `spells[${index}].spell_description`,
                      createFormik.values.spells[index].spell_description,
                      updateCreateField
                    )
                  }
                  value={createFormik.values.spells[index].spell_description}
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
                  variant="static"
                  label="Spell Tier"
                  name={`spells[${index}].spell_tier`}
                  placeholder="Optional"
                  onChange={(e) => {
                    createFormik.handleChange(e);
                  }}
                  onBlur={() =>
                    handleCreateArrayFieldBlur(
                      createFormik,
                      `spells[${index}].spell_tier`,
                      createFormik.values.spells[index].spell_tier,
                      updateCreateField
                    )
                  }
                  value={createFormik.values.spells[index].spell_tier}
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
                  <Tooltip content={"Delete Spell"}>
                    <IconButton
                      variant="text"
                      // @ts-ignore
                      color={isDarkMode ? "white" : "black"}
                      onClick={() => removeCreateSpell(index)}
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
                onClick={addCreateSpell}
                disabled={createFormik.values.spells.length >= 40}
              >
                Add Spell
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

export default SpellsCreate;
