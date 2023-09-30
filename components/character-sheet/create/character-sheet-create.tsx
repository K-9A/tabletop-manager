import { Fragment, useState, useRef } from "react";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import { allInitialValues } from "./initialFormValues";
import CreateSheetWelcome from "./sheet-create-welcome";
import CoreProfileCreate from "./subsections/core-profile-create";
import CombatStatsCreate from "./subsections/combat-stats-create";
import AbilityScoresCreate from "./subsections/ability-scores";
import { useFormik } from "formik";

function CharacterSheetCreate() {
  const [active, setActive] = useState(1);
  const [formValues, setFormValues] = useState({allInitialValues});
  const [sectionValidity, setSectionValidity] = useState({ coreProfile: false, abilityScore: false });

  const onValid = useRef(null);
  const validSection = "bg-emerald-500 text-white"

  const getActiveSectionName = (active) => {
    switch (active) {
      case 1:
        return 'welcome';
      case 2:
        return 'coreProfile';
      case 3:
        return 'abilityScores';
      case 4:
        return 'combatStats';
      default:
        return null;
    }
  };

  const renderPageContent = () => {
    switch (active) {
      case 1:
        return <CreateSheetWelcome />;
      case 2:
        return <CoreProfileCreate onValid={() => handleSectionComplete('coreProfile')} />;
      case 3:
        return <AbilityScoresCreate />;
      case 4:
        return <CombatStatsCreate />;

      default:
        return null;
    }
  };



  const handleSectionComplete = (sectionName) => {
    setSectionValidity(prev => ({ ...prev, [sectionName]: true }));
  };

  const handleNext = () => {
    const activeSectionName = getActiveSectionName(active);
    if (onValid.current && onValid.current.isValid && activeSectionName) {
      setSectionValidity(prev => ({ ...prev, [activeSectionName]: true }));
      setActive(prevActive => prevActive + 1);
    }
  };

  //Set up a single dummy field to initialize formik. Workaround should be used sparingly.
  const formik = useFormik({
    initialValues: {
      dummyField: ""
    },
    onSubmit: (values) => {
    }
  });

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };



  return (
    <Fragment>
      <div className="flex-grow mt-4 pb-8">{renderPageContent()}</div>
      <div className="flex items-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          <Tooltip content="Welcome" placement="bottom">
            <IconButton {...getItemProps(1)} className="bg-emerald-500 focus:bg-black hover:bg-black text-white">WEL</IconButton>
          </Tooltip>

          <Tooltip content="Core Profile" placement="bottom">
            <IconButton {...getItemProps(2)} className={`${sectionValidity.coreProfile && {validSection}}`}>PRF</IconButton>
          </Tooltip>
          <Tooltip content="Ability Scores" placement="bottom">
            <IconButton {...getItemProps(3)}>ABS</IconButton>
          </Tooltip>
          <Tooltip content="Combat Stats" placement="bottom">
            <IconButton {...getItemProps(4)}>CMB</IconButton>
          </Tooltip>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 5}
          
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </Fragment>
  );
}

export default CharacterSheetCreate;

//<IconButton {...getItemProps(2)} className="bg-green-400">PRF</IconButton>