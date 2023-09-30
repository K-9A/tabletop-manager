import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { useFormik } from "formik";
import ErrorMessage from "@/components/helper/error-message";
import * as Yup from "yup";
import { CoreProfileCreateValues } from "@/components/types/create-sheet-types";
import { Input, Tooltip, Typography } from "@material-tailwind/react";


const scoreTypeError = "Score must be a number"
const scoreMinError = "Score cannot be a negative"
const scoreReqError = "Score is required"

const validationSchema = Yup.object({
  str_score: Yup.number()
    .typeError(scoreTypeError)
    .min(0, scoreMinError)
    .required(scoreReqError),
});

const AbilityScoresCreate = () => {
  const formik = useFormik({
    initialValues: {
      str_score: "",
      dex_score: "",
      con_score: "",
      int_score: "",
      wis_score: "",
      chr_score: "",
      str_mod: "",
      dex_mod: "",
      con_mod: "",
      int_mod: "",
      wis_mod: "",
      chr_mod: "",
      perception: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="mt-3"
    >
      <h1 className="font-bold text-left w-full text-2xl">
        Ability Score Section
      </h1>
      <div className="mt-16 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Strength Score"
            name="str_score"
            placeholder="Required"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.str_score}
            error={!!(formik.errors.str_score && formik.touched.str_score)}
            crossOrigin=""
          />
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="str_score" formik={formik as any} />
        </div>
      </div>

      <div className="mt-20 mb-12 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Affinity"
            name="affinity"
            placeholder="Optional"
            crossOrigin=""
            containerProps={{ className: "min-w-[200px]" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AbilityScoresCreate;

<div className="mt-10 mb-12 flex gap-4">
  <div>
    <Input
      variant="static"
      label="Affinity"
      name="affinity"
      placeholder="Optional"
      crossOrigin=""
      labelProps={{
        className: "w-1/2",
      }}
      className="w-1/2"
    />
  </div>
</div>;
