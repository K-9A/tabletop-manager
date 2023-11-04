import { Fragment } from "react";
import ErrorMessage from "@/components/helper/error-message";
import {
  handleUpdateBlur,
  handleUpdateKeyDown,
} from "@/components/helper/handle-field-updates";
import { useExplorationSkills } from "../../../custom-hooks/character-sheet-hooks/use-exploration-skills";
import { Input, Tooltip } from "@material-tailwind/react";

const ExplorationSkillsView = (props) => {
  const { isDarkMode, viewFormik, updateViewField, getViewErrorMessage } =
    useExplorationSkills("view", props.characterId);

  const inputSpacing = "px-3";

  return (
    <Fragment>
      <div className="mt-6 justify-center flex">
        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              label="Acrobatics"
              name="acrobatics"
              value={viewFormik.values.acrobatics}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "acrobatics",
                  viewFormik.values.acrobatics,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "acrobatics",
                  viewFormik.values.acrobatics,
                  e,
                  updateViewField
                )
              }
              error={
                !!(
                  viewFormik.errors.acrobatics && viewFormik.touched.acrobatics
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("acrobatics")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              label="Animal"
              name="animal"
              value={viewFormik.values.animal}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "animal",
                  viewFormik.values.animal,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "animal",
                  viewFormik.values.animal,
                  e,
                  updateViewField
                )
              }
              error={!!(viewFormik.errors.animal && viewFormik.touched.animal)}
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("animal")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              label="Arcana"
              name="arcana"
              value={viewFormik.values.arcana}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "arcana",
                  viewFormik.values.arcana,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "arcana",
                  viewFormik.values.arcana,
                  e,
                  updateViewField
                )
              }
              error={!!(viewFormik.errors.arcana && viewFormik.touched.arcana)}
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("arcana")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Strength" placement="top">
            <Input
              label="Athletics"
              name="athletics"
              value={viewFormik.values.athletics}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "athletics",
                  viewFormik.values.athletics,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "athletics",
                  viewFormik.values.athletics,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.athletics && viewFormik.touched.athletics)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("athletics")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              label="Deception"
              name="deception"
              value={viewFormik.values.deception}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "deception",
                  viewFormik.values.deception,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "deception",
                  viewFormik.values.deception,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.deception && viewFormik.touched.deception)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("deception")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              label="History"
              name="history"
              value={viewFormik.values.history}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "history",
                  viewFormik.values.history,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "history",
                  viewFormik.values.history,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.history && viewFormik.touched.history)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("history")} />
        </div>
      </div>

      <div className="mt-10 justify-center flex">
        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              label="Insight"
              name="insight"
              value={viewFormik.values.insight}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "insight",
                  viewFormik.values.insight,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "insight",
                  viewFormik.values.insight,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.insight && viewFormik.touched.insight)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("insight")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              label="Intimidation"
              name="intimidation"
              value={viewFormik.values.intimidation}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "intimidation",
                  viewFormik.values.intimidation,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "intimidation",
                  viewFormik.values.intimidation,
                  e,
                  updateViewField
                )
              }
              error={
                !!(
                  viewFormik.errors.intimidation &&
                  viewFormik.touched.intimidation
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("intimidation")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              label="Investigation"
              name="investigation"
              value={viewFormik.values.investigation}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "investigation",
                  viewFormik.values.investigation,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "investigation",
                  viewFormik.values.investigation,
                  e,
                  updateViewField
                )
              }
              error={
                !!(
                  viewFormik.errors.investigation &&
                  viewFormik.touched.investigation
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("investigation")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Wisdom" placement="top">
            <Input
              label="Medicine"
              name="medicine"
              value={viewFormik.values.medicine}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "medicine",
                  viewFormik.values.medicine,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "medicine",
                  viewFormik.values.medicine,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.medicine && viewFormik.touched.medicine)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("medicine")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              label="Nature"
              name="nature"
              value={viewFormik.values.nature}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "nature",
                  viewFormik.values.nature,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "nature",
                  viewFormik.values.nature,
                  e,
                  updateViewField
                )
              }
              error={!!(viewFormik.errors.nature && viewFormik.touched.nature)}
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("nature")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              label="Perception"
              name="perception"
              value={viewFormik.values.perception}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "perception",
                  viewFormik.values.perception,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "perception",
                  viewFormik.values.perception,
                  e,
                  updateViewField
                )
              }
              error={
                !!(
                  viewFormik.errors.perception && viewFormik.touched.perception
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("perception")} />
        </div>
      </div>

      <div className="mt-10 justify-center mb-8 flex">
        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              label="Performance"
              name="performance"
              value={viewFormik.values.performance}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "performance",
                  viewFormik.values.performance,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "performance",
                  viewFormik.values.performance,
                  e,
                  updateViewField
                )
              }
              error={
                !!(
                  viewFormik.errors.performance &&
                  viewFormik.touched.performance
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("performance")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Charisma" placement="top">
            <Input
              label="Persuasion"
              name="persuasion"
              value={viewFormik.values.persuasion}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "persuasion",
                  viewFormik.values.persuasion,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "persuasion",
                  viewFormik.values.persuasion,
                  e,
                  updateViewField
                )
              }
              error={
                !!(
                  viewFormik.errors.persuasion && viewFormik.touched.persuasion
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("persuasion")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              label="Religion"
              name="religion"
              value={viewFormik.values.religion}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "religion",
                  viewFormik.values.religion,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "religion",
                  viewFormik.values.religion,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.religion && viewFormik.touched.religion)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("religion")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              label="Sleight of Hand"
              name="sleight"
              value={viewFormik.values.sleight}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "sleight",
                  viewFormik.values.sleight,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "sleight",
                  viewFormik.values.sleight,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.sleight && viewFormik.touched.sleight)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("sleight")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Dexterity" placement="top">
            <Input
              label="Stealth"
              name="stealth"
              value={viewFormik.values.stealth}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "stealth",
                  viewFormik.values.stealth,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "stealth",
                  viewFormik.values.stealth,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.stealth && viewFormik.touched.stealth)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("stealth")} />
        </div>

        <div className={inputSpacing}>
          <Tooltip content="Uses Intelligence" placement="top">
            <Input
              label="Survival"
              name="survival"
              value={viewFormik.values.survival}
              onChange={(e) => {
                viewFormik.handleChange(e);
              }}
              onBlur={() =>
                handleUpdateBlur(
                  viewFormik,
                  "survival",
                  viewFormik.values.survival,
                  updateViewField
                )
              }
              onKeyDown={(e) =>
                handleUpdateKeyDown(
                  viewFormik,
                  "survival",
                  viewFormik.values.survival,
                  e,
                  updateViewField
                )
              }
              error={
                !!(viewFormik.errors.survival && viewFormik.touched.survival)
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
          </Tooltip>
          <ErrorMessage message={getViewErrorMessage("survival")} />
        </div>
      </div>
    </Fragment>
  );
};

export default ExplorationSkillsView;
