import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createFeatsTraitsActions } from "@/store/create-sheet-store/feats-traits-create-slice";
import { RootState, AppDispatch } from "@/store";
import { featsTraitsSchema } from "@/components/validation-schema/character-sheet/feats-traits-schema";


export const useFeatsTraitsCreate = (initialData) => {

  const featsTraitsData = useSelector(
    (state: RootState) => state.featsTraitsCreate
  );

  const isValid = useSelector(
    (state: RootState) => state.featsTraitsCreate.isValid
  );

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      feats_traits: featsTraitsData.feats_traits,
      weapon_proficiency: featsTraitsData.weapon_proficiency,
      armor_proficiency: featsTraitsData.armor_proficiency,
      buffs: featsTraitsData.buffs,
      debuffs: featsTraitsData.debuffs,
      other_proficiency: featsTraitsData.other_proficiency,
    },
    validationSchema: featsTraitsSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateFeatsTraits = async () => {
    dispatch(
        createFeatsTraitsActions.updateField({
        name: "feats_traits",
        value: formik.values.feats_traits,
      })
    );
  };

  const updateWeaponProficiency = async () => {
    dispatch(
        createFeatsTraitsActions.updateField({
        name: "weapon_proficiency",
        value: formik.values.weapon_proficiency,
      })
    );
  };

  const updateArmorProficiency = async () => {
    dispatch(
        createFeatsTraitsActions.updateField({
        name: "armor_proficiency",
        value: formik.values.armor_proficiency,
      })
    );
  };

  const updateBuffs = async () => {
    dispatch(
        createFeatsTraitsActions.updateField({
        name: "buffs",
        value: formik.values.buffs,
      })
    );
  };

  const updateDebuffs = async () => {
    dispatch(
        createFeatsTraitsActions.updateField({
        name: "debuffs",
        value: formik.values.debuffs,
      })
    );
  };
  
  const updateOtherProficiency = async () => {
    dispatch(
        createFeatsTraitsActions.updateField({
        name: "other_proficiency",
        value: formik.values.other_proficiency,
      })
    );
  };

  const resetFeatsTraits = () => {
    dispatch(createFeatsTraitsActions.resetFeatsTraits());
    formik.resetForm({ values: initialData});
  };


  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createFeatsTraitsActions.markSectionAsValid());
    } else {
      dispatch(createFeatsTraitsActions.markSectionAsInvalid());
    }
  };

  return{
    ...formik,
    isValid,
    updateFeatsTraits,
    updateWeaponProficiency,
    updateArmorProficiency,
    updateBuffs,
    updateDebuffs,
    updateOtherProficiency,
    resetFeatsTraits,
    handleCheckboxChange
  }

};
