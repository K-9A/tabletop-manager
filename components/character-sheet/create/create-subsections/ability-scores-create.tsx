import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useAbilityScoresCreate } from "../../../custom-hooks/character-sheet-hooks/use-ability-scores-create";
import { AbilityScoresTooltip } from "@/components/helper/tooltips";
import { Input, Tooltip } from "@material-tailwind/react";

const AbilityScoresCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isDarkMode,
    handleChange,
    handleBlur,
    updateStrScore,
    updateDexScore,
    updateConScore,
    updateIntScore,
    updateWisScore,
    updateChrScore,
    updateStrMod,
    updateDexMod,
    updateConMod,
    updateIntMod,
    updateWisMod,
    updateChrMod,
    updateStrSave,
    updateDexSave,
    updateConSave,
    updateIntSave,
    updateWisSave,
    updateChrSave,
    updatePassivePerception,
    getErrorMessage,
  } = useAbilityScoresCreate(props.initialData);

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
            onBlur={(e) => {
              handleBlur(e);
              updateStrScore();
            }}
            onChange={handleChange}
            value={values.str_score}
            error={!!(errors.str_score && touched.str_score)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("str_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Dexterity Score"
            name="dex_score"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateDexScore();
            }}
            onChange={handleChange}
            value={values.dex_score}
            error={!!(errors.dex_score && touched.dex_score)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("dex_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Constitution Score"
            name="con_score"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateConScore();
            }}
            onChange={handleChange}
            value={values.con_score}
            error={!!(errors.con_score && touched.con_score)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("con_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Intelligence Score"
            name="int_score"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateIntScore();
            }}
            onChange={handleChange}
            value={values.int_score}
            error={!!(errors.int_score && touched.int_score)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("int_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Wisdom Score"
            name="wis_score"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateWisScore();
            }}
            onChange={handleChange}
            value={values.wis_score}
            error={!!(errors.wis_score && touched.wis_score)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("wis_score")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Charisma Score"
            name="chr_score"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateChrScore();
            }}
            onChange={handleChange}
            value={values.chr_score}
            error={!!(errors.chr_score && touched.chr_score)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("chr_score")} />
        </div>
      </div>

      <div className="mt-16 flex">
        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Strength Modifier"
            name="str_mod"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateStrMod();
            }}
            onChange={handleChange}
            value={values.str_mod}
            error={!!(errors.str_mod && touched.str_mod)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("str_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Dexterity Modifier"
            name="dex_mod"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateDexMod();
            }}
            onChange={handleChange}
            value={values.dex_mod}
            error={!!(errors.dex_mod && touched.dex_mod)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("dex_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Constitution Modifier"
            name="con_mod"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateConMod();
            }}
            onChange={handleChange}
            value={values.con_mod}
            error={!!(errors.con_mod && touched.con_mod)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("con_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Intelligence Modifier"
            name="int_mod"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateIntMod();
            }}
            onChange={handleChange}
            value={values.int_mod}
            error={!!(errors.int_mod && touched.int_mod)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("int_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Wisdom Modifier"
            name="wis_mod"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateWisMod();
            }}
            onChange={handleChange}
            value={values.wis_mod}
            error={!!(errors.wis_mod && touched.wis_mod)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("wis_mod")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Charisma Modifier"
            name="chr_mod"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateChrMod();
            }}
            onChange={handleChange}
            value={values.chr_mod}
            error={!!(errors.chr_mod && touched.chr_mod)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("chr_mod")} />
        </div>
      </div>

      <div className="mt-16 flex">
        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Strength Save"
            name="str_save"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateStrSave();
            }}
            onChange={handleChange}
            value={values.str_save}
            error={!!(errors.str_save && touched.str_save)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("str_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Dexterity Save"
            name="dex_save"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateDexSave();
            }}
            onChange={handleChange}
            value={values.dex_save}
            error={!!(errors.dex_save && touched.dex_save)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("dex_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Constitution Save"
            name="con_save"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateConSave();
            }}
            onChange={handleChange}
            value={values.con_save}
            error={!!(errors.con_save && touched.con_save)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("con_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Intelligence Save"
            name="int_save"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateIntSave();
            }}
            onChange={handleChange}
            value={values.int_save}
            error={!!(errors.int_save && touched.int_save)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("int_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Wisdom Save"
            name="wis_save"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateWisSave();
            }}
            onChange={handleChange}
            value={values.wis_save}
            error={!!(errors.wis_save && touched.wis_save)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("wis_save")} />
        </div>

        <div className={inputSpacing}>
          <Input
            variant="static"
            label="Charisma Save"
            name="chr_save"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updateChrSave();
            }}
            onChange={handleChange}
            value={values.chr_save}
            error={!!(errors.chr_save && touched.chr_save)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("chr_save")} />
        </div>
      </div>

      <div className="mt-10 flex px-10">
        <div>
          <Input
            variant="static"
            label="Passive Perception"
            name="passive_perception"
            placeholder="Required"
            onBlur={(e) => {
              handleBlur(e);
              updatePassivePerception();
            }}
            onChange={handleChange}
            value={values.passive_perception}
            error={!!(errors.passive_perception && touched.passive_perception)}
            size="md"
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            crossOrigin=""
          />
          <ErrorMessage message={getErrorMessage("passive_perception")} />
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
