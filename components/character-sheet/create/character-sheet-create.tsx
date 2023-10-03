import { Fragment, useState } from "react";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import CreateSheetWelcome from "./sheet-create-welcome";
import CoreProfileCreate from "./create-subsections/core-profile-create";
import BackgroundCreate from "./create-subsections/background-create";
import CombatStatsCreate from "./create-subsections/combat-stats-create";
import AbilityScoresCreate from "./create-subsections/ability-scores";
import SubmitCharacterSheet from "./create-subsections/submit-character-sheet";


function CharacterSheetCreate() {
  const [active, setActive] = useState(1);

  const coreProfileValid = useSelector(
    (state: RootState) => state.coreProfileCreate.isValid
  );
  const backgroundValid = useSelector(
    (state: RootState) => state.backgroundCreate.isValid
  );


  const renderPageContent = () => {
    switch (active) {
      case 1:
        return <CreateSheetWelcome />;
      case 2:
        return <CoreProfileCreate />;
      case 3:
        return <BackgroundCreate />;
      case 4:
        return <AbilityScoresCreate />;
      case 5:
        return <CombatStatsCreate />;

      default:
        return null;
    }
  };

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 12) return;

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
            <IconButton {...getItemProps(1)} className="">
              WEL
            </IconButton>
          </Tooltip>
          <Tooltip content="Core Profile" placement="bottom">
            <IconButton {...getItemProps(2)}>
              PRF{coreProfileValid && <CheckCircleIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip content="Character Background" placement="bottom">
            <IconButton {...getItemProps(3)}>BGR{backgroundValid && <CheckCircleIcon />}</IconButton>
          </Tooltip>
          <Tooltip content="Feats and Traits" placement="bottom">
            <IconButton {...getItemProps(4)}>FTS</IconButton>
          </Tooltip>
          <Tooltip content="Ability Scores" placement="bottom">
            <IconButton {...getItemProps(5)}>ABS</IconButton>
          </Tooltip>
          <Tooltip content="Combat Stats" placement="bottom">
            <IconButton {...getItemProps(6)}>CMB</IconButton>
          </Tooltip>
          <Tooltip content="Offensive Skills" placement="bottom">
            <IconButton {...getItemProps(7)}>OFS</IconButton>
          </Tooltip>
          <Tooltip content="Exploration Skills" placement="bottom">
            <IconButton {...getItemProps(8)}>EPL</IconButton>
          </Tooltip>
          <Tooltip content="Cantrips & Spells" placement="bottom">
            <IconButton {...getItemProps(9)}>SPL</IconButton>
          </Tooltip>
          <Tooltip content="Equipment" placement="bottom">
            <IconButton {...getItemProps(10)}>EQP</IconButton>
          </Tooltip>
          <Tooltip content="Items & Consumables" placement="bottom">
            <IconButton {...getItemProps(11)}>ITM</IconButton>
          </Tooltip>
          <Tooltip content="Submit Sheet" placement="bottom">
            <IconButton {...getItemProps(12)}>FIN</IconButton>
          </Tooltip>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 12}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </Fragment>
  );
}

export default CharacterSheetCreate;
