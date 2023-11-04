import { Fragment } from "react";
import ErrorMessage from "@/components/helper/error-message";
import { useSpellSlots } from "../../../custom-hooks/character-sheet-hooks/use-spell-slots";
import {
  handleUpdateBlur,
  handleUpdateKeyDown,
} from "@/components/helper/handle-field-updates";
import { Input } from "@material-tailwind/react";

const SpellSlotsView = (props) => {
  const { isDarkMode, viewFormik, updateViewField, getViewErrorMessage } =
    useSpellSlots("view", props.characterId);

  const spacingOddRow = "mr-3";
  const spacingEvenRow = "mr-16";
  const inputSize = "!w-20";

  return (
    <Fragment>
      <div className="ml-3 mt-5 justify-center flex">
        <div className={spacingOddRow}>
          <Input
            label="1st Tier"
            name="first_available"
            placeholder="Optional"
            value={viewFormik.values.first_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "first_available",
                viewFormik.values.first_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "first_available",
                viewFormik.values.first_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.first_available &&
                viewFormik.touched.first_available
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
          <ErrorMessage message={getViewErrorMessage("first_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="1st Max"
            name="first_max"
            placeholder="Optional"
            value={viewFormik.values.first_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "first_max",
                viewFormik.values.first_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "first_max",
                viewFormik.values.first_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.first_max && viewFormik.touched.first_max)
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
          <ErrorMessage message={getViewErrorMessage("first_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            label="2nd Tier"
            name="second_available"
            placeholder="Optional"
            value={viewFormik.values.second_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "second_available",
                viewFormik.values.second_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "second_available",
                viewFormik.values.second_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.second_available &&
                viewFormik.touched.second_available
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
          <ErrorMessage message={getViewErrorMessage("second_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="2nd Max"
            name="second_max"
            placeholder="Optional"
            value={viewFormik.values.second_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "second_max",
                viewFormik.values.second_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "second_max",
                viewFormik.values.second_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.second_max && viewFormik.touched.second_max)
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
          <ErrorMessage message={getViewErrorMessage("second_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            label="3rd Tier"
            name="third_available"
            placeholder="Optional"
            value={viewFormik.values.third_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "third_available",
                viewFormik.values.third_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "third_available",
                viewFormik.values.third_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.third_available &&
                viewFormik.touched.third_available
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
          <ErrorMessage message={getViewErrorMessage("third_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="3rd Max"
            name="third_max"
            placeholder="Optional"
            value={viewFormik.values.third_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "third_max",
                viewFormik.values.third_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "third_max",
                viewFormik.values.third_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.third_max && viewFormik.touched.third_max)
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
          <ErrorMessage message={getViewErrorMessage("third_max")} />
        </div>
      </div>

      <div className="ml-3 mt-10 justify-center flex">
        <div className={spacingOddRow}>
          <Input
            label="4th Tier"
            name="fourth_available"
            placeholder="Optional"
            value={viewFormik.values.fourth_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "fourth_available",
                viewFormik.values.fourth_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "fourth_available",
                viewFormik.values.fourth_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.fourth_available &&
                viewFormik.touched.fourth_available
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
          <ErrorMessage message={getViewErrorMessage("fourth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="4th Max"
            name="fourth_max"
            placeholder="Optional"
            value={viewFormik.values.fourth_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "fourth_max",
                viewFormik.values.fourth_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "fourth_max",
                viewFormik.values.fourth_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.fourth_max && viewFormik.touched.fourth_max)
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
          <ErrorMessage message={getViewErrorMessage("fourth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            label="5th Tier"
            name="fifth_available"
            placeholder="Optional"
            value={viewFormik.values.fifth_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "fifth_available",
                viewFormik.values.fifth_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "fifth_available",
                viewFormik.values.fifth_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.fifth_available &&
                viewFormik.touched.fifth_available
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
          <ErrorMessage message={getViewErrorMessage("fifth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="5th Max"
            name="fifth_max"
            placeholder="Optional"
            value={viewFormik.values.fifth_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "fifth_max",
                viewFormik.values.fifth_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "fifth_max",
                viewFormik.values.fifth_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.fifth_max && viewFormik.touched.fifth_max)
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
          <ErrorMessage message={getViewErrorMessage("fifth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            label="6th Tier"
            name="sixth_available"
            placeholder="Optional"
            value={viewFormik.values.sixth_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "sixth_available",
                viewFormik.values.sixth_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "sixth_available",
                viewFormik.values.sixth_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.sixth_available &&
                viewFormik.touched.sixth_available
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
          <ErrorMessage message={getViewErrorMessage("sixth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="6th Max"
            name="sixth_max"
            placeholder="Optional"
            value={viewFormik.values.sixth_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "sixth_max",
                viewFormik.values.sixth_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "sixth_max",
                viewFormik.values.sixth_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.sixth_max && viewFormik.touched.sixth_max)
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
          <ErrorMessage message={getViewErrorMessage("sixth_max")} />
        </div>
      </div>

      <div className="ml-3 mt-10 justify-center mb-8 flex">
        <div className={spacingOddRow}>
          <Input
            label="7th Tier"
            name="seventh_available"
            placeholder="Optional"
            value={viewFormik.values.seventh_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "seventh_available",
                viewFormik.values.seventh_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "seventh_available",
                viewFormik.values.seventh_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.seventh_available &&
                viewFormik.touched.seventh_available
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
          <ErrorMessage message={getViewErrorMessage("seventh_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="7th Max"
            name="seventh_max"
            placeholder="Optional"
            value={viewFormik.values.seventh_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "seventh_max",
                viewFormik.values.seventh_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "seventh_max",
                viewFormik.values.seventh_max,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.seventh_max && viewFormik.touched.seventh_max
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
          <ErrorMessage message={getViewErrorMessage("seventh_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            label="8th Tier"
            name="eighth_available"
            placeholder="Optional"
            value={viewFormik.values.eighth_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "eighth_available",
                viewFormik.values.eighth_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "eighth_available",
                viewFormik.values.eighth_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.eighth_available &&
                viewFormik.touched.eighth_available
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
          <ErrorMessage message={getViewErrorMessage("eighth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="8th Max"
            name="eighth_max"
            placeholder="Optional"
            value={viewFormik.values.eighth_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "eighth_max",
                viewFormik.values.eighth_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "eighth_max",
                viewFormik.values.eighth_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.eighth_max && viewFormik.touched.eighth_max)
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
          <ErrorMessage message={getViewErrorMessage("eighth_max")} />
        </div>

        <div className={spacingOddRow}>
          <Input
            label="9th Tier"
            name="nineth_available"
            placeholder="Optional"
            value={viewFormik.values.nineth_available}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "nineth_available",
                viewFormik.values.nineth_available,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "nineth_available",
                viewFormik.values.nineth_available,
                e,
                updateViewField
              )
            }
            error={
              !!(
                viewFormik.errors.nineth_available &&
                viewFormik.touched.nineth_available
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
          <ErrorMessage message={getViewErrorMessage("nineth_available")} />
        </div>

        <div className={spacingEvenRow}>
          <Input
            label="9th Max"
            name="nineth_max"
            placeholder="Optional"
            value={viewFormik.values.nineth_max}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "nineth_max",
                viewFormik.values.nineth_max,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "nineth_max",
                viewFormik.values.nineth_max,
                e,
                updateViewField
              )
            }
            error={
              !!(viewFormik.errors.nineth_max && viewFormik.touched.nineth_max)
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
          <ErrorMessage message={getViewErrorMessage("nineth_max")} />
        </div>
      </div>
    </Fragment>
  );
};

export default SpellSlotsView;
