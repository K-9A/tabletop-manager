import { CheckCircleIcon } from "@heroicons/react/20/solid";

const CreateSheetWelcome = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mx-auto text-center dark:text-white">
      <h1 className="font-bold text-3xl">
        Welcome to the Character Sheet Creator!
      </h1>
      <h2 className="text-xl mt-8">
        Here you will be able to set up a brand new Character Sheet for Dungeons
        and Dragons.
      </h2>

      <div className="text-left w-full">
        <p className="text-base mt-5">
          ⪼ The sheet is broken up into several sections. Use the navigation
          below to travel to the next section.
        </p>
        <p className="text-base mt-1">
          ⪼ Fields that have an ℹ️ contain tooltips to help fill that field out.
        </p>
        <p className="text-base mt-1">
          ⪼ Fields you must fill out will be marked as required.
        </p>
        <p className="text-base mt-1">
          ⪼ When all required fields are filled, on the navigation below the
          section will be marked with a{" "}
          <span className="inline-flex">
            <CheckCircleIcon className="w-4 h-4 mt-0.5" />
          </span>
        </p>
        <p className="text-base mt-1">
          ⪼ Some sections have no required fields. Instead, fill out as many
          fields as you wish and mark it done with a provided checkbox.
        </p>
        <p className="text-base mt-1">
          ⪼ At the end, you will have the option to have the sheet join an
          existing campaign or leave it stand-alone.
        </p>
        <p className="text-base mt-1">
          ⪼ Once all sections are filled out you may submit the sheet and it
          will be created under your account.
        </p>
      </div>
      <p className="font-bold text-xl mt-7">
        When you are ready hit NEXT to begin!
      </p>
    </div>
  );
};

export default CreateSheetWelcome;
