import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { handleUpdateBlur } from "@/components/helper/handle-field-updates";
import { useExplorationSkills } from "../../../custom-hooks/character-sheet-hooks/use-exploration-skills";
import { Input, Tooltip } from "@material-tailwind/react";

const ExplorationSkillsCreate = (props) => {
  const { createFormik, isDarkMode, updateCreateField, getCreateErrorMessage } =
  useExplorationSkills('create', props.initialData);

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
              value={createFormik.values.acrobatics}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "acrobatics",
                  createFormik.values.acrobatics,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.acrobatics &&
                  createFormik.touched.acrobatics
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("acrobatics")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              variant="static"
              label="Animal"
              name="animal"
              placeholder="Required"
              value={createFormik.values.animal}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "animal",
                  createFormik.values.animal,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.animal &&
                  createFormik.touched.animal
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("animal")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Arcana"
              name="arcana"
              placeholder="Required"
              value={createFormik.values.arcana}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "arcana",
                  createFormik.values.arcana,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.arcana &&
                  createFormik.touched.arcana
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("arcana")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Strength" placement="top">
            <Input
              variant="static"
              label="Athletics"
              name="athletics"
              placeholder="Required"
              value={createFormik.values.athletics}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "athletics",
                  createFormik.values.athletics,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.athletics &&
                  createFormik.touched.athletics
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("athletics")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              variant="static"
              label="Deception"
              name="deception"
              placeholder="Required"
              value={createFormik.values.deception}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "deception",
                  createFormik.values.deception,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.deception &&
                  createFormik.touched.deception
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("deception")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="History"
              name="history"
              placeholder="Required"
              value={createFormik.values.history}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "history",
                  createFormik.values.history,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.history &&
                  createFormik.touched.history
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("history")} />
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
              value={createFormik.values.insight}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "insight",
                  createFormik.values.insight,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.insight &&
                  createFormik.touched.insight
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("insight")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              variant="static"
              label="Intimidation"
              name="intimidation"
              placeholder="Required"
              value={createFormik.values.intimidation}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "intimidation",
                  createFormik.values.intimidation,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.intimidation &&
                  createFormik.touched.intimidation
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("intimidation")} />
        </div>


        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Investigation"
              name="investigation"
              placeholder="Required"
              value={createFormik.values.investigation}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "investigation",
                  createFormik.values.investigation,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.investigation &&
                  createFormik.touched.investigation
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("investigation")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              variant="static"
              label="Medicine"
              name="medicine"
              placeholder="Required"
              value={createFormik.values.medicine}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "medicine",
                  createFormik.values.medicine,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.medicine &&
                  createFormik.touched.medicine
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("medicine")} />
        </div>


        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Nature"
              name="nature"
              placeholder="Required"
              value={createFormik.values.nature}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "nature",
                  createFormik.values.nature,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.nature &&
                  createFormik.touched.nature
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("nature")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Perception"
              name="perception"
              placeholder="Required"
              value={createFormik.values.perception}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "perception",
                  createFormik.values.perception,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.perception &&
                  createFormik.touched.perception
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("perception")} />
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
              value={createFormik.values.performance}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "performance",
                  createFormik.values.performance,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.performance &&
                  createFormik.touched.performance
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("performance")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              variant="static"
              label="Persuasion"
              name="persuasion"
              placeholder="Required"
              value={createFormik.values.persuasion}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "persuasion",
                  createFormik.values.persuasion,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.persuasion &&
                  createFormik.touched.persuasion
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("persuasion")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Religion"
              name="religion"
              placeholder="Required"
              value={createFormik.values.religion}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "religion",
                  createFormik.values.religion,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.religion &&
                  createFormik.touched.religion
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("religion")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              variant="static"
              label="Sleight of Hand"
              name="sleight"
              placeholder="Required"
              value={createFormik.values.sleight}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "sleight",
                  createFormik.values.sleight,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.sleight &&
                  createFormik.touched.sleight
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("sleight")} />
        </div>


        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              variant="static"
              label="Stealth"
              name="stealth"
              placeholder="Required"
              value={createFormik.values.stealth}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "stealth",
                  createFormik.values.stealth,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.stealth &&
                  createFormik.touched.stealth
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("stealth")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              variant="static"
              label="Survival"
              name="survival"
              placeholder="Required"
              value={createFormik.values.survival}
              onChange={(e) => {
                createFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  createFormik,
                  "survival",
                  createFormik.values.survival,
                  updateCreateField
                )
              }
              error={
                !!(
                  createFormik.errors.survival &&
                  createFormik.touched.survival
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
          </Tooltip>
          <ErrorMessage message={getCreateErrorMessage("survival")} />
        </div>

      </div>
    </motion.div>
  );
};

export default ExplorationSkillsCreate;