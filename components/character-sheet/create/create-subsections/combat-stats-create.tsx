import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CoreProfileCreateValues } from "@/components/types/create-sheet-types";
import { Input, Tooltip, Typography } from "@material-tailwind/react";


const validationSchema = Yup.object({
  max_hp: Yup.number().typeError("Max HP must be a number")
    .min(0, "Max HP cannot be negative")
    .required("Max HP is required"),
});

const CombatStatsCreate = () => {
  const formik = useFormik({
    initialValues: {
      max_hp: "",
      max_hit_dice: "",
      armor_class: "",
      inspiration: "",
      initiative: "",
      speed: "",
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
        Combat Stats Section
      </h1>
      <div className="mt-16 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Maximum Health Points"
            name="max_hp"
            placeholder="Required"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.max_hp}
            error={!!(formik.errors.max_hp && formik.touched.max_hp)}
            crossOrigin=""
          />
         
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

export default CombatStatsCreate;



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
</div>