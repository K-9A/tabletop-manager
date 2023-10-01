import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { useFormik } from "formik";
import ErrorMessage from "@/components/helper/error-message";
import * as Yup from "yup";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { createCoreProfileActions } from "@/store/create-sheet-store/core-stats-create/core-profile-create-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";



import { CoreProfileCreateValues } from "@/components/types/create-sheet-types";
import { Input, Tooltip, Typography } from "@material-tailwind/react";
import { ProficiencyTooltip } from "@/components/helper/tooltips";

const validationSchema = Yup.object({
  name: Yup.string().required("Character Name is required"),
  char_class: Yup.string().required("Class is required"),
  race: Yup.string().required("Race is required"),
  proficiency: Yup.number()
    .min(2, "Proficiency must be least 2")
    .max(6, "Proficiency cannot exceed 6")
    .required("Proficiency is required"),
  char_level: Yup.number()
    .typeError("Level must be a number")
    .min(1, "Level should be at least 1")
    .max(20, "Level cannot exceed 20")
    .required("Level is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .min(0, "Experience cannot be negative")
    .required("Experience is required"),
  next_level: Yup.number()
    .typeError("Next Level must be a number")
    .min(0, "Next Level cannot be negative")
    .required("Next Level is required"),
});

const CoreProfileCreate = () => {
  const coreProfileData = useSelector((state: RootState) => state.coreProfileCreate);
  
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: coreProfileData.name,
      char_class: coreProfileData.char_class,
      race: coreProfileData.race,
      proficiency: coreProfileData.proficiency,
      char_level: coreProfileData.char_level,
      experience: coreProfileData.experience,
      next_level: coreProfileData.next_level,
      affinity: coreProfileData.affinity,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const updateCharacterName = async () => {
    dispatch(createCoreProfileActions.updateField({name: "name", value: formik.values.name}));
  }

  useEffect(() => {
    validationSchema.isValid(formik.values).then((isValid) => {
      dispatch(createCoreProfileActions.setValidity(isValid));
    });
  }, [formik.values, dispatch]);

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
        Core Profile Section
      </h1>
      <div className="mt-16 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Character Name"
            name="name"
            placeholder="Required"
            onBlur={(e) => {
              formik.handleBlur(e);
              updateCharacterName();
            }}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={!!(formik.errors.name && formik.touched.name)}
            crossOrigin=""
          />
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="name" formik={formik as any} />
        </div>
        <div>
          <Input
            variant="static"
            label="Class"
            name="char_class"
            placeholder="Required"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.char_class}
            error={!!(formik.errors.char_class && formik.touched.char_class)}
            crossOrigin=""
          />
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="char_class" formik={formik as any} />
        </div>
        <div>
          <Input
            variant="static"
            label="Race"
            name="race"
            placeholder="Required"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.race}
            error={!!(formik.errors.race && formik.touched.race)}
            crossOrigin=""
          />
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="race" formik={formik as any} />
        </div>

        <div>
          <Tooltip content={<ProficiencyTooltip />} placement="bottom">
            <Input
              variant="static"
              label="Proficiency ℹ️"
              name="proficiency"
              placeholder="Required"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.proficiency}
              error={
                !!(formik.errors.proficiency && formik.touched.proficiency)
              }
              crossOrigin=""
            />
          </Tooltip>
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="proficiency" formik={formik as any} />
        </div>
      </div>

      <div className="mt-20 mb-12 flex gap-4">
        <div>
          <Input
            variant="static"
            label="Character Level"
            name="char_level"
            placeholder="Required"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.char_level}
            error={!!(formik.errors.char_level && formik.touched.char_level)}
            crossOrigin=""
          />
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="char_level" formik={formik as any} />
        </div>
        <div>
          <Input
            variant="static"
            label="Experience"
            name="experience"
            placeholder="Required"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.experience}
            error={!!(formik.errors.experience && formik.touched.experience)}
            crossOrigin=""
          />
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="experience" formik={formik as any} />
        </div>
        <div>
          <Input
            variant="static"
            label="Next Level"
            name="next_level"
            placeholder="Required"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.next_level}
            error={!!(formik.errors.next_level && formik.touched.next_level)}
            crossOrigin=""
          />
          {/* TO RE-ENABLE TYPESCRIPTTING LATER WHEN THE TYPESCRIPT FILES CAN APPLY TO BOTH VIEW AND CREATE SHEETS*/}
          <ErrorMessage name="next_level" formik={formik as any} />
        </div>
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

export default CoreProfileCreate;
