import { Fragment, useState } from "react";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import CreateSheetWelcome from "./sheet-create-welcome";
import CoreProfileCreate from "./subsections/core-profile-create";
import CombatStatsCreate from "./subsections/combat-stats-create";
import AbilityScoresCreate from "./subsections/ability-scores";
import SubmitCharacterSheet from "./subsections/submit-character-sheet";

function CharacterSheetCreate() {
  const [active, setActive] = useState(1);

  const coreProfileValid = useSelector(
    (state: RootState) => state.createCore.isValid
  );

  const validSection = coreProfileValid && "bg-emerald-500 text-white";

  const renderPageContent = () => {
    switch (active) {
      case 1:
        return <CreateSheetWelcome />;
      case 2:
        return <CoreProfileCreate />;
      case 3:
        return <AbilityScoresCreate />;
      case 4:
        return <CombatStatsCreate />;
      case 5:
        return <SubmitCharacterSheet />;

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
            <IconButton {...getItemProps(1)} className="">
              WEL
            </IconButton>
          </Tooltip>

          <Tooltip content="Core Profile" placement="bottom">
            <IconButton {...getItemProps(2)}>
              PRF{coreProfileValid && <CheckCircleIcon />}
            </IconButton>
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

