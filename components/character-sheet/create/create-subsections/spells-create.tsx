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
import { useSpellsCreate } from "./custom-hooks-create-sheet/use-spells-create";
import { SpellsCreateTooltip } from "@/components/helper/tooltips";
import { FormikErrors, FormikTouched } from "formik";

const SpellsCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    isDarkMode,
    handleChange,
    handleBlur,
    addNewSpell,
    removeSpell,
    updateSpellField,
    getErrorMessage,
    handleCheckboxChange,
  } = useSpellsCreate(props.initialData);

  const isSpellNameError = (index: number) => {
    const spellErrors = errors.spells as FormikErrors<{ spell_name: string }>[];
    const spellTouched = touched.spells as FormikTouched<{
      spell_name: boolean;
    }>[];
    return !!(
      spellErrors &&
      spellErrors[index] &&
      spellErrors[index].spell_name &&
      spellTouched &&
      spellTouched[index] &&
      spellTouched[index].spell_name
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
        <Tooltip content={<SpellsCreateTooltip />} placement="top">
          Cantrips and Spells Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-10 flex">
        <div className="flex flex-col gap-4 px-4 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]  overflow-y-auto">
          {values.spells.map((spell, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-3">
                <Input
                  variant="static"
                  label="Spell Name"
                  name={`spells[${index}].spell_name`}
                  placeholder="Required"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateSpellField(index, "spell_name");
                  }}
                  onChange={handleChange}
                  value={values.spells[index].spell_name}
                  error={isSpellNameError(index)}
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
                <ErrorMessage message={getErrorMessage("spell_name", index)} />
              </div>

              <div className="mt-3">
                <Input
                  variant="static"
                  label="Spell Description"
                  name={`spells[${index}].spell_description`}
                  placeholder="Optional"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateSpellField(index, "spell_description");
                  }}
                  onChange={handleChange}
                  value={values.spells[index].spell_description}
                  error={isSpellNameError(index)}
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
                <ErrorMessage
                  message={getErrorMessage("spell_description", index)}
                />
              </div>

              <div className="mt-3">
                <Input
                  variant="static"
                  label="Spell Tier"
                  name={`spells[${index}].spell_tier`}
                  placeholder="Optional"
                  onBlur={(e) => {
                    handleBlur(e);
                    updateSpellField(index, "spell_tier");
                  }}
                  onChange={handleChange}
                  value={values.spells[index].spell_tier}
                  error={isSpellNameError(index)}
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
                <ErrorMessage
                  message={getErrorMessage("spell_tier", index)}
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
              onClick={addNewSpell}
              disabled={values.spells.length >= 30}
            >
              Add Spell
            </Button>
          </div>
          <div className="mt-4">
            <Button
              className="rounded-full text-xs"
              size="sm"
              onClick={removeSpell}
              disabled={values.spells.length === 1}
            >
              Remove Spell
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

export default SpellsCreate;
