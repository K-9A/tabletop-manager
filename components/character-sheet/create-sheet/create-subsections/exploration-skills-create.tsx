import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useExplorationSkillsCreate } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-exploration-skills-create";
import { Input, Tooltip } from "@material-tailwind/react";

const ExplorationSkillsCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isDarkMode,
    handleChange,
    handleBlur,
    updateAcrobatics,
    updateAnimal,
    updateArcana,
    updateAthletics,
    updateDeception,
    updateHistory,
    updateInsight,
    updateIntimidation,
    updateInvestigation,
    updateMedicine,
    updateNature,
    updatePerception,
    updatePerformance,
    updatePersuasion,
    updateReligion,
    updateSleight,
    updateStealth,
    updateSurvival,
    getErrorMessage,
  } = useExplorationSkillsCreate(props.initialData);

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
        Exploration Skills Section
      </h1>

      <div className="mt-14 flex mr-4">
        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              variant="static"
              label="Acrobatics"
              name="acrobatics"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateAcrobatics();
              }}
              onChange={handleChange}
              value={values.acrobatics}
              error={!!(errors.acrobatics && touched.acrobatics)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("acrobatics")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              variant="static"
              label="Animal"
              name="animal"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateAnimal();
              }}
              onChange={handleChange}
              value={values.animal}
              error={!!(errors.animal && touched.animal)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("animal")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Arcana"
              name="arcana"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateArcana();
              }}
              onChange={handleChange}
              value={values.arcana}
              error={!!(errors.arcana && touched.arcana)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("arcana")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Strength" placement="top">
            <Input
              variant="static"
              label="Athletics"
              name="athletics"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateAthletics();
              }}
              onChange={handleChange}
              value={values.athletics}
              error={!!(errors.athletics && touched.athletics)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("athletics")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              variant="static"
              label="Deception"
              name="deception"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateDeception();
              }}
              onChange={handleChange}
              value={values.deception}
              error={!!(errors.deception && touched.deception)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("deception")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="History"
              name="history"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateHistory();
              }}
              onChange={handleChange}
              value={values.history}
              error={!!(errors.history && touched.history)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("history")} />
        </div>
      </div>

      <div className="mt-16 flex">
        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              variant="static"
              label="Insight"
              name="insight"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateInsight();
              }}
              onChange={handleChange}
              value={values.insight}
              error={!!(errors.insight && touched.insight)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("insight")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              variant="static"
              label="Intimidation"
              name="intimidation"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateIntimidation();
              }}
              onChange={handleChange}
              value={values.intimidation}
              error={!!(errors.intimidation && touched.intimidation)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("intimidation")} />
        </div>


        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Investigation"
              name="investigation"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateInvestigation();
              }}
              onChange={handleChange}
              value={values.investigation}
              error={!!(errors.investigation && touched.investigation)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("investigation")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              variant="static"
              label="Medicine"
              name="medicine"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateMedicine();
              }}
              onChange={handleChange}
              value={values.medicine}
              error={!!(errors.medicine && touched.medicine)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("medicine")} />
        </div>


        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Nature"
              name="nature"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateNature();
              }}
              onChange={handleChange}
              value={values.nature}
              error={!!(errors.nature && touched.nature)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("nature")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Perception"
              name="perception"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updatePerception();
              }}
              onChange={handleChange}
              value={values.perception}
              error={!!(errors.perception && touched.perception)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("perception")} />
        </div>

      </div>


      <div className="mt-16 flex">

      <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              variant="static"
              label="Performance"
              name="performance"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updatePerformance();
              }}
              onChange={handleChange}
              value={values.performance}
              error={!!(errors.performance && touched.performance)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("performance")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              variant="static"
              label="Persuasion"
              name="persuasion"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updatePersuasion();
              }}
              onChange={handleChange}
              value={values.persuasion}
              error={!!(errors.persuasion && touched.persuasion)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("persuasion")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Religion"
              name="religion"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateReligion();
              }}
              onChange={handleChange}
              value={values.religion}
              error={!!(errors.religion && touched.religion)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("religion")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              variant="static"
              label="Sleight of Hand"
              name="sleight"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateSleight();
              }}
              onChange={handleChange}
              value={values.sleight}
              error={!!(errors.sleight && touched.sleight)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("sleight")} />
        </div>


        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              variant="static"
              label="Stealth"
              name="stealth"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateStealth();
              }}
              onChange={handleChange}
              value={values.stealth}
              error={!!(errors.stealth && touched.stealth)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("stealth")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Survival"
              name="survival"
              placeholder="Required"
              onBlur={(e) => {
                handleBlur(e);
                updateSurvival();
              }}
              onChange={handleChange}
              value={values.survival}
              error={!!(errors.survival && touched.survival)}
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
          </Tooltip>
          <ErrorMessage message={getErrorMessage("survival")} />
        </div>

      </div>
    </motion.div>
  );
};

export default ExplorationSkillsCreate;