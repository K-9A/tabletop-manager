import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useCombatStatsCreate } from "./custom-hooks-create-sheet/use-combat-stats-create";
import { Input, Tooltip } from "@material-tailwind/react";

const CombatStatsCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isDarkMode,
    handleChange,
    handleBlur,
    updateCurrentHP,
    updateMaxHP,
    updateTempHP,
    updateArmorClass,
    updateHitDice,
    updateMaxHitDice,
    updateSpeed,
    updateInitiative,
    updateInspiration,
    updateSpellCasting,
    updateSpellSave,
    updateSpellAttack,
    getErrorMessage,
  } = useCombatStatsCreate(props.initialData);

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
        Combat Stats Section
      </h1>

      <div className="mt-16 flex justify-center gap-24">
        <div>
          <Input
            variant="static"
            label="Current HP"
            name="current_hp"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateCurrentHP();
            }}
            onChange={handleChange}
            value={values.current_hp}
            error={!!(errors.current_hp && touched.current_hp)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("current_hp")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Max HP"
            name="max_hp"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateMaxHP();
            }}
            onChange={handleChange}
            value={values.max_hp}
            error={!!(errors.max_hp && touched.max_hp)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("max_hp")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Temporary HP"
            name="temp_hp"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateTempHP();
            }}
            onChange={handleChange}
            value={values.temp_hp}
            error={!!(errors.temp_hp && touched.temp_hp)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("temp_hp")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Hit Dice"
            name="hit_dice"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateHitDice();
            }}
            onChange={handleChange}
            value={values.hit_dice}
            error={!!(errors.hit_dice && touched.hit_dice)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("hit_dice")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Max Hit Dice"
            name="max_hit_dice"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateMaxHitDice();
            }}
            onChange={handleChange}
            value={values.max_hit_dice}
            error={!!(errors.max_hit_dice && touched.max_hit_dice)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("max_hit_dice")} />
        </div>
      </div>



      <div className="mt-16 flex gap-36">
        <div>
          <Input
            variant="static"
            label="Armor Class"
            name="armor_class"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateArmorClass();
            }}
            onChange={handleChange}
            value={values.armor_class}
            error={!!(errors.armor_class && touched.armor_class)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("armor_class")} />
        </div>

        <div>
          <Tooltip content="In Feet (ft.)" placement="top">
            <Input
              variant="static"
              label="Speed ℹ️"
              name="speed"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateSpeed();
              }}
              onChange={handleChange}
              value={values.speed}
              error={!!(errors.speed && touched.speed)}
              size="md"
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("speed")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Initiative"
            name="initiative"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateInitiative();
            }}
            onChange={handleChange}
            value={values.initiative}
            error={!!(errors.initiative && touched.initiative)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("initiative")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Inspiration"
            name="inspiration"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateInspiration();
            }}
            onChange={handleChange}
            value={values.inspiration}
            error={!!(errors.inspiration && touched.inspiration)}
            size="md"
            className={"dark:text-white !w-24"}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: "!w-24",
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getErrorMessage("inspiration")} />
        </div>
      </div>



      <div className="mt-16 flex gap-36">
        <div>
          <Input
            variant="static"
            label="Spell Casting Ability"
            name="spell_casting"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSpellCasting();
            }}
            onChange={handleChange}
            value={values.spell_casting}
            error={!!(errors.spell_casting && touched.spell_casting)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("spell_casting")} />
        </div>

        <div>
          <Tooltip content="In Feet (ft.)" placement="top">
            <Input
              variant="static"
              label="Spell Save DC"
              name="spell_save"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateSpellSave();
              }}
              onChange={handleChange}
              value={values.spell_save}
              error={!!(errors.spell_save && touched.spell_save)}
              size="md"
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("spell_save")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Spell Attack Bonus"
            name="spell_attack"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSpellAttack();
            }}
            onChange={handleChange}
            value={values.spell_attack}
            error={!!(errors.spell_attack && touched.spell_attack)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("spell_attack")} />
        </div>
      </div>
    </motion.div>
  );
};

export default CombatStatsCreate;
