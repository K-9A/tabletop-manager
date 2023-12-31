import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useSpellSlots } from "../../../custom-hooks/character-sheet-hooks/use-spell-slots";
import { handleUpdateBlur } from "@/components/helper/handle-field-updates";
import { Input, Tooltip, Typography, Checkbox } from "@material-tailwind/react";
import { MarkAsCompleteTooltip } from "@/components/helper/tooltips";

const SpellSlotsCreate = (props) => {
  const {
    createFormik,
    isValid,
    isDarkMode,
    updateCreateField,
    handleCheckboxChange,
    getCreateErrorMessage,
  } = useSpellSlots("create", props.initialData);

  const spacingOddRow = "mr-4";
  const spacingEvenRow = "mr-20";
  const inputSize = "!w-16";

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="mt-3"
    >
      <h1 className="font-bold text-left w-full text-2xl dark:text-white mr-8">
        <Tooltip content={<MarkAsCompleteTooltip />} placement="top">
          Spell Slots Section ℹ️
        </Tooltip>
      </h1>

      <div className="mt-12 flex mr-2">
        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="1st Tier"
            name="first_available"
            placeholder="Optional"
            value={createFormik.values.first_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "first_available",
                createFormik.values.first_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.first_available &&
                createFormik.touched.first_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("first_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="1st Max"
            name="first_max"
            placeholder="Optional"
            value={createFormik.values.first_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "first_max",
                createFormik.values.first_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.first_max && createFormik.touched.first_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("first_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="2nd Tier"
            name="second_available"
            placeholder="Optional"
            value={createFormik.values.second_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "second_available",
                createFormik.values.second_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.second_available &&
                createFormik.touched.second_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("second_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="2nd Max"
            name="second_max"
            placeholder="Optional"
            value={createFormik.values.second_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "second_max",
                createFormik.values.second_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.second_max &&
                createFormik.touched.second_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("second_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="3rd Tier"
            name="third_available"
            placeholder="Optional"
            value={createFormik.values.third_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "third_available",
                createFormik.values.third_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.third_available &&
                createFormik.touched.third_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("third_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="3rd Max"
            name="third_max"
            placeholder="Optional"
            value={createFormik.values.third_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "third_max",
                createFormik.values.third_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.third_max && createFormik.touched.third_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("third_max")} />
        </div>
      </div>

      <div className="mt-14 flex">
        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="4th Tier"
            name="fourth_available"
            placeholder="Optional"
            value={createFormik.values.fourth_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "fourth_available",
                createFormik.values.fourth_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.fourth_available &&
                createFormik.touched.fourth_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("fourth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="4th Max"
            name="fourth_max"
            placeholder="Optional"
            value={createFormik.values.fourth_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "fourth_max",
                createFormik.values.fourth_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.fourth_max &&
                createFormik.touched.fourth_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("fourth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="5th Tier"
            name="fifth_available"
            placeholder="Optional"
            value={createFormik.values.fifth_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "fifth_available",
                createFormik.values.fifth_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.fifth_available &&
                createFormik.touched.fifth_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("fifth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="5th Max"
            name="fifth_max"
            placeholder="Optional"
            value={createFormik.values.fifth_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "fifth_max",
                createFormik.values.fifth_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.fifth_max && createFormik.touched.fifth_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("fifth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="6th Tier"
            name="sixth_available"
            placeholder="Optional"
            value={createFormik.values.sixth_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "sixth_available",
                createFormik.values.sixth_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.sixth_available &&
                createFormik.touched.sixth_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("sixth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="6th Max"
            name="sixth_max"
            placeholder="Optional"
            value={createFormik.values.sixth_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "sixth_max",
                createFormik.values.sixth_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.sixth_max && createFormik.touched.sixth_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("sixth_max")} />
        </div>
      </div>

      <div className="mt-14 flex">
        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="7th Tier"
            name="seventh_available"
            placeholder="Optional"
            value={createFormik.values.seventh_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "seventh_available",
                createFormik.values.seventh_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.seventh_available &&
                createFormik.touched.seventh_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("seventh_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="7th Max"
            name="seventh_max"
            placeholder="Optional"
            value={createFormik.values.seventh_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "seventh_max",
                createFormik.values.seventh_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.seventh_max &&
                createFormik.touched.seventh_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("seventh_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="8th Tier"
            name="eighth_available"
            placeholder="Optional"
            value={createFormik.values.eighth_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "eighth_available",
                createFormik.values.eighth_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.eighth_available &&
                createFormik.touched.eighth_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("eighth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="8th Max"
            name="eighth_max"
            placeholder="Optional"
            value={createFormik.values.eighth_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "eighth_max",
                createFormik.values.eighth_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.eighth_max &&
                createFormik.touched.eighth_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("eighth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="9th Tier"
            name="nineth_available"
            placeholder="Optional"
            value={createFormik.values.nineth_available}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "nineth_available",
                createFormik.values.nineth_available,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.nineth_available &&
                createFormik.touched.nineth_available
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("nineth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="9th Max"
            name="nineth_max"
            placeholder="Optional"
            value={createFormik.values.nineth_max}
            onChange={(e) => {
              createFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                createFormik,
                "nineth_max",
                createFormik.values.nineth_max,
                updateCreateField
              )
            }
            error={
              !!(
                createFormik.errors.nineth_max &&
                createFormik.touched.nineth_max
              )
            }
            className={`dark:text-white ${inputSize}`}
            color={isDarkMode ? "white" : "black"}
            labelProps={{
              className: `${inputSize}`,
            }}
            containerProps={{
              className: "!min-w-0",
            }}
            crossOrigin=""
          />
          <ErrorMessage message={getCreateErrorMessage("nineth_max")} />
        </div>
      </div>

      <div className="mt-10 flex gap-4">
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

export default SpellSlotsCreate;
