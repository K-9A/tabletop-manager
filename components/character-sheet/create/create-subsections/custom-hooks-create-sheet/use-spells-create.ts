import { useFormik, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSpellsActions } from "@/store/create-sheet-store/spells-create-slice";
import { RootState, AppDispatch } from "@/store";
import { spellsSchema } from "@/components/character-sheet/validation-schema/spells-schema";

export const useSpellsCreate = (initialData) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const spellsData = useSelector((state: RootState) => state.spellsCreate);

  const isValid = useSelector((state: RootState) => state.spellsCreate.isValid);

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      spells: spellsData.spells,
    },
    enableReinitialize: true,
    validationSchema: spellsSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateSpellField = async (index, fieldName) => {
    dispatch(
      createSpellsActions.updateSpellsField({
        index: index,
        name: fieldName,
        value: formik.values.spells[index][fieldName],
      })
    );
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createSpellsActions.markSectionAsValid());
    } else {
      dispatch(createSpellsActions.markSectionAsInvalid());
    }
  };

  const addNewSpell = () => {
    dispatch(createSpellsActions.addSpell());
  };

  const removeSpell = () => {
    dispatch(createSpellsActions.removeSpell());
  };

  return {
    ...formik,
    isValid,
    isDarkMode,
    addNewSpell,
    removeSpell,
    updateSpellField,
    handleCheckboxChange,
    getErrorMessage: (fieldName: string, index?: number) => {
      if (index !== undefined) {
        const spellErrors = formik.errors.spells as Array<
          FormikErrors<{ spell_name: string }>
        >;
        return spellErrors &&
          spellErrors[index] &&
          spellErrors[index][fieldName]
          ? spellErrors[index][fieldName]
          : null;
      } else {
        return formik.errors[fieldName] && formik.touched[fieldName]
          ? formik.errors[fieldName]
          : null;
      }
    },
  };
};
