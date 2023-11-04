import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useAbilityScores } from "@/components/custom-hooks/character-sheet-hooks/use-ability-scores";
import { handleUpdateBlur } from "@/components/helper/handle-field-updates";
import { AbilityScoresTooltip } from "@/components/helper/tooltips";
import { Input, Tooltip } from "@material-tailwind/react";

const AbilityScoresCreate = (props) => {
  const { createFormik, isDarkMode, updateCreateField, getCreateErrorMessage } =
  useAbilityScores('create', props.initialData);

  const inputSpacing = "px-10";

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="mt-3"
    >
      <h1 className="font-bold text-left w-full text-2xl dark:text-white ml-4">
          Ability Scores Section
      </h1>

      <div className="mt-8 flex mr-8">
        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Strength Score"
            name="str_score"
            placeholder="Required"
            value={createFormik.values.str_score}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "str_score",
                createFormik.values.str_score,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.str_score &&
                createFormik.touched.str_score
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("str_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Dexterity Score"
            name="dex_score"
            placeholder="Required"
            value={createFormik.values.dex_score}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "dex_score",
                createFormik.values.dex_score,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.dex_score &&
                createFormik.touched.dex_score
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("dex_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Constitution Score"
            name="con_score"
            placeholder="Required"
            value={createFormik.values.con_score}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "con_score",
                createFormik.values.con_score,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.con_score &&
                createFormik.touched.con_score
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("con_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Intelligence Score"
            name="int_score"
            placeholder="Required"
            value={createFormik.values.int_score}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "int_score",
                createFormik.values.int_score,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.int_score &&
                createFormik.touched.int_score
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("int_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Wisdom Score"
            name="wis_score"
            placeholder="Required"
            value={createFormik.values.wis_score}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "wis_score",
                createFormik.values.wis_score,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.wis_score &&
                createFormik.touched.wis_score
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("wis_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Charisma Score"
            name="chr_score"
            placeholder="Required"
            value={createFormik.values.chr_score}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "chr_score",
                createFormik.values.chr_score,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.chr_score &&
                createFormik.touched.chr_score
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("chr_score")} />
        </div>
      </div>

      <div className="mt-16 flex">
        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Strength Mod"
            name="str_mod"
            placeholder="Required"
            value={createFormik.values.str_mod}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "str_mod",
                createFormik.values.str_mod,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.str_mod &&
                createFormik.touched.str_mod
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("str_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Dexterity Mod"
            name="dex_mod"
            placeholder="Required"
            value={createFormik.values.dex_mod}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "dex_mod",
                createFormik.values.dex_mod,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.dex_mod &&
                createFormik.touched.dex_mod
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("dex_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Constitution Mod"
            name="con_mod"
            placeholder="Required"
            value={createFormik.values.con_mod}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "con_mod",
                createFormik.values.con_mod,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.con_mod &&
                createFormik.touched.con_mod
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("con_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Intelligence Mod"
            name="int_mod"
            placeholder="Required"
            value={createFormik.values.int_mod}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "int_mod",
                createFormik.values.int_mod,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.int_mod &&
                createFormik.touched.int_mod
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("int_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Wisdom Mod"
            name="wis_mod"
            placeholder="Required"
            value={createFormik.values.wis_mod}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "wis_mod",
                createFormik.values.wis_mod,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.wis_mod &&
                createFormik.touched.wis_mod
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("wis_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Charisma Mod"
            name="chr_mod"
            placeholder="Required"
            value={createFormik.values.chr_mod}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "chr_mod",
                createFormik.values.chr_mod,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.chr_mod &&
                createFormik.touched.chr_mod
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("chr_mod")} />
        </div>
      </div>

      <div className="mt-16 flex">
        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Strength Save"
            name="str_save"
            placeholder="Required"
            value={createFormik.values.str_save}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "str_save",
                createFormik.values.str_save,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.str_save &&
                createFormik.touched.str_save
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("str_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Dexterity Save"
            name="dex_save"
            placeholder="Required"
            value={createFormik.values.dex_save}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "dex_save",
                createFormik.values.dex_save,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.dex_save &&
                createFormik.touched.dex_save
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("dex_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Constitution Save"
            name="con_save"
            placeholder="Required"
            value={createFormik.values.con_save}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "con_save",
                createFormik.values.con_save,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.con_save &&
                createFormik.touched.con_save
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("con_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Intelligence Save"
            name="int_save"
            placeholder="Required"
            value={createFormik.values.int_save}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "int_save",
                createFormik.values.int_save,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.int_save &&
                createFormik.touched.int_save
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("int_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Wisdom Save"
            name="wis_save"
            placeholder="Required"
            value={createFormik.values.wis_save}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "wis_save",
                createFormik.values.wis_save,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.wis_save &&
                createFormik.touched.wis_save
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("wis_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Charisma Save"
            name="chr_save"
            placeholder="Required"
            value={createFormik.values.chr_save}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "chr_save",
                createFormik.values.chr_save,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.chr_save &&
                createFormik.touched.chr_save
              )
            }
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
          <ErrorMessage message={getCreateErrorMessage("chr_save")} />
        </div>
      </div>

      <div className="mt-10 flex px-10">
        <div>
          <Input
            variant="static"
            label="Passive Perception"
            name="passive_perception"
            placeholder="Required"
            value={createFormik.values.passive_perception}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "passive_perception",
                createFormik.values.passive_perception,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.passive_perception &&
                createFormik.touched.passive_perception
              )
            }
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("passive_perception")} />
        </div>
        <div className="px-36 mt-2">
        <Tooltip content={<AbilityScoresTooltip />} placement="top">
          <h2 className="dark:text-white">Ability Score & Modifier Chart ℹ️</h2>
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
};

export default AbilityScoresCreate;
