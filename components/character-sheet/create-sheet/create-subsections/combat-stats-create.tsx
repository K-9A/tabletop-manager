import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useCombatStats } from "../../../custom-hooks/character-sheet-hooks/use-combat-stats";
import { handleUpdateBlur } from "@/components/helper/handle-field-updates";
import { Input, Tooltip } from "@material-tailwind/react";

const CombatStatsCreate = (props) => {
  const { createFormik, isDarkMode, updateCreateField, getCreateErrorMessage } =
    useCombatStats("create", props.initialData);

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
            value={createFormik.values.current_hp}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "current_hp",
                createFormik.values.current_hp,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.current_hp &&
                createFormik.touched.current_hp
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("current_hp")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Max HP"
            name="max_hp"
            placeholder="Required"
            value={createFormik.values.max_hp}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "max_hp",
                createFormik.values.max_hp,
                updateCreateField
              )
            }
            error={
              !!(createFormik.errors.max_hp && createFormik.touched.max_hp)
            }
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
          <ErrorMessage message={getCreateErrorMessage("max_hp")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Temporary HP"
            name="temp_hp"
            placeholder="Optional"
            value={createFormik.values.temp_hp}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "temp_hp",
                createFormik.values.temp_hp,
                updateCreateField
              )
            }
            error={
              !!(createFormik.errors.temp_hp && createFormik.touched.temp_hp)
            }
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
          <ErrorMessage message={getCreateErrorMessage("temp_hp")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Hit Dice"
            name="hit_dice"
            placeholder="Optional"
            value={createFormik.values.hit_dice}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "hit_dice",
                createFormik.values.hit_dice,
                updateCreateField
              )
            }
            error={
              !!(createFormik.errors.hit_dice && createFormik.touched.hit_dice)
            }
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
          <ErrorMessage message={getCreateErrorMessage("hit_dice")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Max Hit Dice"
            name="max_hit_dice"
            placeholder="Required"
            value={createFormik.values.max_hit_dice}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "max_hit_dice",
                createFormik.values.max_hit_dice,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.max_hit_dice &&
                createFormik.touched.max_hit_dice
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("max_hit_dice")} />
        </div>
      </div>

      <div className="mt-16 flex gap-36">
        <div>
          <Input
            variant="static"
            label="Armor Class"
            name="armor_class"
            placeholder="Required"
            value={createFormik.values.armor_class}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "armor_class",
                createFormik.values.armor_class,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.armor_class &&
                createFormik.touched.armor_class
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("armor_class")} />
        </div>

        <div>
          <Tooltip content="In Feet (ft.)" placement="top">
            <Input
              variant="static"
              label="Speed ℹ️"
              name="speed"
              placeholder="Required"
              value={createFormik.values.speed}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "speed",
                  createFormik.values.speed,
                  updateCreateField
                )
              }
              error={
                !!(createFormik.errors.speed && createFormik.touched.speed)
              }
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
          <ErrorMessage message={getCreateErrorMessage("speed")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Initiative"
            name="initiative"
            placeholder="Required"
            value={createFormik.values.initiative}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "initiative",
                createFormik.values.initiative,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.initiative &&
                createFormik.touched.initiative
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("initiative")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Inspiration"
            name="inspiration"
            placeholder="Optional"
            value={createFormik.values.inspiration}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "inspiration",
                createFormik.values.inspiration,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.inspiration &&
                createFormik.touched.inspiration
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("inspiration")} />
        </div>
      </div>

      <div className="mt-16 flex gap-36">
        <div>
          <Input
            variant="static"
            label="Spell Casting Ability"
            name="spell_casting"
            placeholder="Optional"
            value={createFormik.values.spell_casting}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "spell_casting",
                createFormik.values.spell_casting,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.spell_casting &&
                createFormik.touched.spell_casting
              )
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
          <ErrorMessage message={getCreateErrorMessage("spell_casting")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Spell Save DC"
            name="spell_save"
            placeholder="Required"
            value={createFormik.values.spell_save}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "spell_save",
                createFormik.values.spell_save,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.spell_save &&
                createFormik.touched.spell_save
              )
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
          <ErrorMessage message={getCreateErrorMessage("spell_save")} />
        </div>

        <div>
          <Input
            variant="static"
            label="Spell Attack Bonus"
            name="spell_attack"
            placeholder="Optional"
            value={createFormik.values.spell_attack}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "spell_attack",
                createFormik.values.spell_attack,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.spell_attack &&
                createFormik.touched.spell_attack
              )
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
          <ErrorMessage message={getCreateErrorMessage("spell_attack")} />
        </div>
      </div>
    </motion.div>
  );
};

export default CombatStatsCreate;
