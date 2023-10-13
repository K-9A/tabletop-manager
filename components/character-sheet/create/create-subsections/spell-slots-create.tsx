import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import ErrorMessage from "@/components/helper/error-message";
import { useSpellSlotsCreate } from "../../../custom-hooks/character-sheet-hooks/use-spell-slots-create";
import { Input, Tooltip, Typography, Checkbox } from "@material-tailwind/react";
import { MarkAsCompleteTooltip } from "@/components/helper/tooltips";

const SpellSlotsCreate = (props) => {
  const {
    values,
    errors,
    touched,
    isValid,
    isDarkMode,
    handleChange,
    handleBlur,
    updateFirstAvailable,
    updateFirstMax,
    updateSecondAvailable,
    updateSecondMax,
    updateThirdAvailable,
    updateThirdMax,
    updateFourthAvailable,
    updateFourthMax,
    updateFifthAvailable,
    updateFifthMax,
    updateSixthAvailable,
    updateSixthMax,
    updateSeventhAvailable,
    updateSeventhMax,
    updateEighthAvailable,
    updateEighthMax,
    updateNinethAvailable,
    updateNinethMax,
    handleCheckboxChange,
    getErrorMessage,
  } = useSpellSlotsCreate(props.initialData);

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
            placeholder="Optional
              "
            onBlur={(e) => {
              handleBlur(e);
              updateFirstAvailable();
            }}
            onChange={handleChange}
            value={values.first_available}
            error={!!(errors.first_available && touched.first_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("first_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="1st Max"
            name="first_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateFirstMax();
            }}
            onChange={handleChange}
            value={values.first_max}
            error={!!(errors.first_max && touched.first_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("first_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="2nd Tier"
            name="second_available"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSecondAvailable();
            }}
            onChange={handleChange}
            value={values.second_available}
            error={!!(errors.second_available && touched.second_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("second_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="2nd Max"
            name="second_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSecondMax();
            }}
            onChange={handleChange}
            value={values.second_max}
            error={!!(errors.second_max && touched.second_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("second_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="3rd Tier"
            name="third_available"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateThirdAvailable();
            }}
            onChange={handleChange}
            value={values.third_available}
            error={!!(errors.third_available && touched.third_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("third_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="3rd Max"
            name="third_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateThirdMax();
            }}
            onChange={handleChange}
            value={values.third_max}
            error={!!(errors.third_max && touched.third_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("third_max")} />
        </div>
      </div>

      <div className="mt-14 flex">
        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="4th Tier"
            name="fourth_available"
            placeholder="Optional
              "
            onBlur={(e) => {
              handleBlur(e);
              updateFourthAvailable();
            }}
            onChange={handleChange}
            value={values.fourth_available}
            error={!!(errors.fourth_available && touched.fourth_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("fourth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="4th Max"
            name="fourth_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateFourthMax();
            }}
            onChange={handleChange}
            value={values.fourth_max}
            error={!!(errors.fourth_max && touched.fourth_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("fourth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="5th Tier"
            name="fifth_available"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateFifthAvailable();
            }}
            onChange={handleChange}
            value={values.fifth_available}
            error={!!(errors.fifth_available && touched.fifth_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("fifth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="5th Max"
            name="fifth_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateFifthMax();
            }}
            onChange={handleChange}
            value={values.fifth_max}
            error={!!(errors.fifth_max && touched.fifth_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("fifth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="6th Tier"
            name="sixth_available"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSixthAvailable();
            }}
            onChange={handleChange}
            value={values.sixth_available}
            error={!!(errors.sixth_available && touched.sixth_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("sixth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="6th Max"
            name="sixth_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSixthMax();
            }}
            onChange={handleChange}
            value={values.sixth_max}
            error={!!(errors.sixth_max && touched.sixth_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("sixth_max")} />
        </div>
      </div>

      <div className="mt-14 flex">
        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="7th Tier"
            name="seventh_available"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSeventhAvailable();
            }}
            onChange={handleChange}
            value={values.seventh_available}
            error={!!(errors.seventh_available && touched.seventh_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("seventh_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="7th Max"
            name="seventh_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateSeventhMax();
            }}
            onChange={handleChange}
            value={values.seventh_max}
            error={!!(errors.seventh_max && touched.seventh_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("seventh_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="8th Tier"
            name="eighth_available"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateEighthAvailable();
            }}
            onChange={handleChange}
            value={values.eighth_available}
            error={!!(errors.eighth_available && touched.eighth_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("eighth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="8th Max"
            name="eighth_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateEighthMax();
            }}
            onChange={handleChange}
            value={values.eighth_max}
            error={!!(errors.eighth_max && touched.eighth_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("eighth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            variant="static"
            label="9th Tier"
            name="nineth_available"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateNinethAvailable();
            }}
            onChange={handleChange}
            value={values.nineth_available}
            error={!!(errors.nineth_available && touched.nineth_available)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("nineth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            variant="static"
            label="9th Max"
            name="nineth_max"
            placeholder="Optional"
            onBlur={(e) => {
              handleBlur(e);
              updateNinethMax();
            }}
            onChange={handleChange}
            value={values.nineth_max}
            error={!!(errors.nineth_max && touched.nineth_max)}
            size="md"
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
          <ErrorMessage message={getErrorMessage("nineth_max")} />
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
