import { Fragment } from "react";
import { Textarea } from "@material-tailwind/react";
import { useFeatsTraits } from "../../../custom-hooks/character-sheet-hooks/use-feats-traits";
import { handleUpdateBlur, handleUpdateKeyDown } from "@/components/helper/handle-field-updates";

const FeatsTraitsView = (props) => {
  const { viewFormik, isDarkMode, updateViewField, getViewErrorMessage } =
    useFeatsTraits("view", props.characterId);

  return (
    <Fragment>
      <div className="mt-6 flex justify-center gap-4">
        <div className="w-64">
          <Textarea
            name="feats_traits"
            label="Features and Traits"
            value={viewFormik.values.feats_traits}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "feats_traits",
                viewFormik.values.feats_traits,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "feats_traits",
                viewFormik.values.feats_traits,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white !mb-8",
            }}
          />
        </div>

        <div className="w-64">
          <Textarea
            name="weapon_proficiency"
            label="Weapon Proficiency"
            value={viewFormik.values.weapon_proficiency}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "weapon_proficiency",
                viewFormik.values.weapon_proficiency,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "weapon_proficiency",
                viewFormik.values.weapon_proficiency,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white !mb-8",
            }}
          />
        </div>

        <div className="w-64">
          <Textarea
            name="armor_proficiency"
            label="Armor Proficiency"
            value={viewFormik.values.armor_proficiency}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "armor_proficiency",
                viewFormik.values.armor_proficiency,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "armor_proficiency",
                viewFormik.values.armor_proficiency,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white !mb-8",
            }}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-4 mb-3">
        <div className="w-64">
          <Textarea
            name="buffs"
            label="Buffs"
            value={viewFormik.values.buffs}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "buffs",
                viewFormik.values.buffs,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "buffs",
                viewFormik.values.buffs,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white !mb-8",
            }}
          />
        </div>

        <div className="w-64">
          <Textarea
            name="debuffs"
            label="Debuffs"
            value={viewFormik.values.debuffs}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "debuffs",
                viewFormik.values.debuffs,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "debuffs",
                viewFormik.values.debuffs,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white !mb-8",
            }}
          />
        </div>

        <div className="w-64">
          <Textarea
            name="other_proficiency"
            label="Other Proficiencies"
            value={viewFormik.values.other_proficiency}
            onChange={(e) => {
              viewFormik.handleChange(e);
            }}
            onBlur={() =>
              handleUpdateBlur(
                viewFormik,
                "other_proficiency",
                viewFormik.values.other_proficiency,
                updateViewField
              )
            }
            onKeyDown={(e) =>
              handleUpdateKeyDown(
                viewFormik,
                "other_proficiency",
                viewFormik.values.other_proficiency,
                e,
                updateViewField
              )
            }
            className="dark:text-white"
            labelProps={{
              className: "!text-black dark:!text-white !mb-8",
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FeatsTraitsView;
