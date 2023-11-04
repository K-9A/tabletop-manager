import { Fragment } from "react";
import ErrorMessage from "@/components/helper/error-message";
import { useAbilityScores } from "@/components/custom-hooks/character-sheet-hooks/use-ability-scores";
import {
  handleUpdateBlur,
  handleUpdateKeyDown,
} from "@/components/helper/handle-field-updates";
import { AbilityScoresTooltip } from "@/components/helper/tooltips";
import { Input, Tooltip } from "@material-tailwind/react";

const AbilityScoresView = (props) => {
  const { isDarkMode, viewFormik, updateViewField, getViewErrorMessage } =
    useAbilityScores("view", props.characterId);

  const inputSpacing = "px-2";

  return (
    <Fragment>
      <div className="mt-6 justify-center flex">
        <div className={inputSpacing}>
          <Input
            label="Strength Score"
            name="str_score"
            value={viewFormik.values.str_score}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "str_score",
                viewFormik.values.str_score,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "str_score",
                viewFormik.values.str_score,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.str_score && viewFormik.touched.str_score)
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
          <ErrorMessage message={getViewErrorMessage("str_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Dexterity Score"
            name="dex_score"
            value={viewFormik.values.dex_score}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "dex_score",
                viewFormik.values.dex_score,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "dex_score",
                viewFormik.values.dex_score,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.dex_score && viewFormik.touched.dex_score)
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
          <ErrorMessage message={getViewErrorMessage("dex_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Constitution Score"
            name="con_score"
            value={viewFormik.values.con_score}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "con_score",
                viewFormik.values.con_score,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "con_score",
                viewFormik.values.con_score,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.con_score && viewFormik.touched.con_score)
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
          <ErrorMessage message={getViewErrorMessage("con_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Intelligence Score"
            name="int_score"
            value={viewFormik.values.int_score}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "int_score",
                viewFormik.values.int_score,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "int_score",
                viewFormik.values.int_score,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.int_score && viewFormik.touched.int_score)
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
          <ErrorMessage message={getViewErrorMessage("int_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Wisdom Score"
            name="wis_score"
            value={viewFormik.values.wis_score}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "wis_score",
                viewFormik.values.wis_score,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "wis_score",
                viewFormik.values.wis_score,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.wis_score && viewFormik.touched.wis_score)
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
          <ErrorMessage message={getViewErrorMessage("wis_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Charisma Score"
            name="chr_score"
            value={viewFormik.values.chr_score}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "chr_score",
                viewFormik.values.chr_score,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "chr_score",
                viewFormik.values.chr_score,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.chr_score && viewFormik.touched.chr_score)
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
          <ErrorMessage message={getViewErrorMessage("chr_score")} />
        </div>
      </div>

      <div className="mt-6 justify-center flex">
        <div className={inputSpacing}>
          <Input
            label="Strength Mod"
            name="str_mod"
            value={viewFormik.values.str_mod}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "str_mod",
                viewFormik.values.str_mod,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "str_mod",
                viewFormik.values.str_mod,
                e,
                updateViewField
              )
            }
            error={!!(viewFormik.errors.str_mod && viewFormik.touched.str_mod)}
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
          <ErrorMessage message={getViewErrorMessage("str_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Dexterity Mod"
            name="dex_mod"
            value={viewFormik.values.dex_mod}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "dex_mod",
                viewFormik.values.dex_mod,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "dex_mod",
                viewFormik.values.dex_mod,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.dex_mod && viewFormik.touched.dex_mod)
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
          <ErrorMessage message={getViewErrorMessage("dex_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Constitution Mod"
            name="con_mod"
            value={viewFormik.values.con_mod}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "con_mod",
                viewFormik.values.con_mod,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "con_mod",
                viewFormik.values.con_mod,
                e,
                updateViewField
              )
            }
            error={!!(viewFormik.errors.con_mod && viewFormik.touched.con_mod)}
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
          <ErrorMessage message={getViewErrorMessage("con_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Intelligence Mod"
            name="int_mod"
            value={viewFormik.values.int_mod}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "int_mod",
                viewFormik.values.int_mod,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "int_mod",
                viewFormik.values.int_mod,
                e,
                updateViewField
              )
            }
            error={!!(viewFormik.errors.int_mod && viewFormik.touched.int_mod)}
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
          <ErrorMessage message={getViewErrorMessage("int_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Wisdom Mod"
            name="wis_mod"
            value={viewFormik.values.wis_mod}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "wis_mod",
                viewFormik.values.wis_mod,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "wis_mod",
                viewFormik.values.wis_mod,
                e,
                updateViewField
              )
            }
            error={!!(viewFormik.errors.wis_mod && viewFormik.touched.wis_mod)}
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
          <ErrorMessage message={getViewErrorMessage("wis_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Charisma Mod"
            name="chr_mod"
            value={viewFormik.values.chr_mod}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "chr_mod",
                viewFormik.values.chr_mod,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "chr_mod",
                viewFormik.values.chr_mod,
                e,
                updateViewField
              )
            }
            error={!!(viewFormik.errors.chr_mod && viewFormik.touched.chr_mod)}
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
          <ErrorMessage message={getViewErrorMessage("chr_mod")} />
        </div>
      </div>

      <div className="mt-6 justify-center flex">
        <div className={inputSpacing}>
          <Input
            label="Strength Save"
            name="str_save"
            value={viewFormik.values.str_save}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "str_save",
                viewFormik.values.str_save,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "str_save",
                viewFormik.values.str_save,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.str_save && viewFormik.touched.str_save)
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
          <ErrorMessage message={getViewErrorMessage("str_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Dexterity Save"
            name="dex_save"
            value={viewFormik.values.dex_save}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "dex_save",
                viewFormik.values.dex_save,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "dex_save",
                viewFormik.values.dex_save,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.dex_save && viewFormik.touched.dex_save)
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
          <ErrorMessage message={getViewErrorMessage("dex_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Constitution Save"
            name="con_save"
            value={viewFormik.values.con_save}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "con_save",
                viewFormik.values.con_save,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "con_save",
                viewFormik.values.con_save,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.con_save && viewFormik.touched.con_save)
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
          <ErrorMessage message={getViewErrorMessage("con_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Intelligence Save"
            name="int_save"
            value={viewFormik.values.int_save}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "int_save",
                viewFormik.values.int_save,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "int_save",
                viewFormik.values.int_save,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.int_save && viewFormik.touched.int_save)
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
          <ErrorMessage message={getViewErrorMessage("int_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Wisdom Save"
            name="wis_save"
            value={viewFormik.values.wis_save}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "wis_save",
                viewFormik.values.wis_save,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "wis_save",
                viewFormik.values.wis_save,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.wis_save && viewFormik.touched.wis_save)
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
          <ErrorMessage message={getViewErrorMessage("wis_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            label="Charisma Save"
            name="chr_save"
            value={viewFormik.values.chr_save}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "chr_save",
                viewFormik.values.chr_save,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "chr_save",
                viewFormik.values.chr_save,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.chr_save && viewFormik.touched.chr_save)
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
          <ErrorMessage message={getViewErrorMessage("chr_save")} />
        </div>
      </div>

      <div className="mt-6 mb-3 justify-center flex px-10">
        <div>
          <Input
            label="Passive Perception"
            name="passive_perception"
            value={viewFormik.values.passive_perception}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "passive_perception",
                viewFormik.values.passive_perception,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "passive_perception",
                viewFormik.values.passive_perception,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.passive_perception &&
                viewFormik.touched.passive_perception
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getViewErrorMessage("passive_perception")} />
        </div>
        <div className="px-36 mt-2">
          <Tooltip content={<AbilityScoresTooltip />} placement="top">
            <h2 className="dark:text-white">
              Ability Score & Mod Chart ℹ️
            </h2>
          </Tooltip>
        </div>
      </div>
    </Fragment>
  );
};

export default AbilityScoresView;
