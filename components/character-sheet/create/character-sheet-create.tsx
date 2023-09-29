import { Fragment } from "react";
import { useState } from "react";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import CreateSheetWelcome from "./sheet-create-welcome";
import CoreProfileCreate from "./subsections/core-stats/core-profile-create";

function CharacterSheetCreate() {
  const [active, setActive] = useState(1);
  const [isSubsectionValid, setIsSubsectionValid] = useState(false);

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

  const renderPageContent = () => {
    switch (active) {
      case 1:
        return <CreateSheetWelcome />;
      case 2:
        return <CoreProfileCreate />;

      default:
        return null;
    }
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
            <IconButton {...getItemProps(1)}>WEL</IconButton>
          </Tooltip>

          <Tooltip content="Core Profile"  placement="bottom">
            <IconButton {...getItemProps(2)}>PRF</IconButton>
          </Tooltip>

          <Tooltip content="Ability Scores" placement="bottom">
            <IconButton {...getItemProps(3)}>ABS</IconButton>
          </Tooltip>
          <IconButton {...getItemProps(4)}>4</IconButton>
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
