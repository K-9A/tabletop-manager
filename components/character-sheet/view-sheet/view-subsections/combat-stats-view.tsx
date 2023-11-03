import { Fragment } from "react";
import ErrorMessage from "@/components/helper/error-message";
import { useCombatStats } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-combat-stats";
import {
    handleUpdateBlur,
    handleUpdateKeyDown,
  } from "@/components/helper/handle-field-updates";
import { Input, Tooltip } from "@material-tailwind/react";

const CombatStatsView = (props) => {
    const { isDarkMode, viewFormik, updateViewField, getViewErrorMessage } =
    useCombatStats('view', props.characterId);

  return (
<Fragment>
      <div className="mt-4 flex justify-center gap-10">
        <div>
          <Input
            label="Current HP"
            name="current_hp"
            value={viewFormik.values.current_hp}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "current_hp",
                viewFormik.values.current_hp,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "current_hp",
                  viewFormik.values.current_hp,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.current_hp &&
                viewFormik.touched.current_hp
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("current_hp")} />
        </div>

        <div>
          <Input
            label="Max HP"
            name="max_hp"
            value={viewFormik.values.max_hp}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "max_hp",
                viewFormik.values.max_hp,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "max_hp",
                  viewFormik.values.max_hp,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.max_hp &&
                viewFormik.touched.max_hp
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("max_hp")} />
        </div>

        <div>
          <Input
            label="Temporary HP"
            name="temp_hp"
            value={viewFormik.values.temp_hp}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "temp_hp",
                viewFormik.values.temp_hp,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "temp_hp",
                  viewFormik.values.temp_hp,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.temp_hp &&
                viewFormik.touched.temp_hp
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("temp_hp")} />
        </div>

        <div>
          <Input
            label="Hit Dice"
            name="hit_dice"
            value={viewFormik.values.hit_dice}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "hit_dice",
                viewFormik.values.hit_dice,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "hit_dice",
                  viewFormik.values.hit_dice,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.hit_dice &&
                viewFormik.touched.hit_dice
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("hit_dice")} />
        </div>

        <div>
          <Input
            label="Max Hit Dice"
            name="max_hit_dice"
            value={viewFormik.values.max_hit_dice}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "max_hit_dice",
                viewFormik.values.max_hit_dice,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "max_hit_dice",
                  viewFormik.values.max_hit_dice,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.max_hit_dice &&
                viewFormik.touched.max_hit_dice
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("max_hit_dice")} />
        </div>
      </div>



      <div className="mt-6 mb-4 justify-center flex gap-16">
        <div>
          <Input
            label="Armor Class"
            name="armor_class"
            value={viewFormik.values.armor_class}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "armor_class",
                viewFormik.values.armor_class,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "armor_class",
                  viewFormik.values.armor_class,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.armor_class &&
                viewFormik.touched.armor_class
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("armor_class")} />
        </div>

        <div>
          <Tooltip content="In Feet (ft.)" placement="top">
            <Input
              label="Speed ℹ️"
              name="speed"
              value={viewFormik.values.speed}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "speed",
                viewFormik.values.speed,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "speed",
                  viewFormik.values.speed,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.speed &&
                viewFormik.touched.speed
              )
            }
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("speed")} />
        </div>

        <div>
          <Input
            label="Initiative"
            name="initiative"
            value={viewFormik.values.initiative}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "initiative",
                viewFormik.values.initiative,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "initiative",
                  viewFormik.values.initiative,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.initiative &&
                viewFormik.touched.initiative
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("initiative")} />
        </div>

        <div>
          <Input
            label="Inspiration"
            name="inspiration"
            value={viewFormik.values.inspiration}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "inspiration",
                viewFormik.values.inspiration,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "inspiration",
                  viewFormik.values.inspiration,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.inspiration &&
                viewFormik.touched.inspiration
              )
            }
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
          <ErrorMessage message={getViewErrorMessage("inspiration")} />
        </div>
      </div>



      <div className="mt-6 mb-4 justify-center flex gap-24">
        <div>
          <Input
            label="Spell Casting Ability"
            name="spell_casting"

            value={viewFormik.values.spell_casting}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "spell_casting",
                viewFormik.values.spell_casting,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "spell_casting",
                  viewFormik.values.spell_casting,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.spell_casting &&
                viewFormik.touched.spell_casting
              )
            }
            className={"dark:text-white !w-44"}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: "!w-44",
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("spell_casting")} />
        </div>

        <div>
            <Input
              label="Spell Save DC"
              name="spell_save"
              value={viewFormik.values.spell_save}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "spell_save",
                viewFormik.values.spell_save,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "spell_save",
                  viewFormik.values.spell_save,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.spell_save &&
                viewFormik.touched.spell_save
              )
            }
              className={"dark:text-white !w-44"}
              color={isDarkMode ? "white" : "black"}
              labelProps={{
                className: "!w-44",
              }}
              containerProps={{
                className: "!min-w-0",
              }}
              crossOrigin=""
            />
          <ErrorMessage message={getViewErrorMessage("spell_save")} />
        </div>

        <div>
          <Input
            label="Spell Attack Bonus"
            name="spell_attack"
            value={viewFormik.values.spell_attack}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "spell_attack",
                viewFormik.values.spell_attack,
                updateViewField
              )
            }
            onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "spell_attack",
                  viewFormik.values.spell_attack,
                  e,
                  updateViewField
                )
              }
            error={
              !!(
                viewFormik.errors.spell_attack &&
                viewFormik.touched.spell_attack
              )
            }
            className={"dark:text-white !w-44"}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: "!w-44",
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("spell_attack")} />
        </div>
      </div>
      </Fragment>
  );
};

export default CombatStatsView;
