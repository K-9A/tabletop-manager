import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Typography,
    Input,
  } from "@material-tailwind/react";

function ListHeader({
    title,
    subtitle,
    searchPlaceholder,
    isDarkMode,
    searchTerm,
    onSearchChange
  }) {
    return (
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none bg-gray-200 dark:bg-gray-700"
      >
        <div className="mb-4 mx-12 flex flex-col justify-between gap-12 md:flex-row md:items-center bg-gray-200 dark:bg-gray-700">
          <div className="pr-32 bg-gray-200 dark:bg-gray-700">
            <Typography
              variant="h5"
              color="blue-gray"
              className="dark:text-white"
            >
              {title}
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal dark:text-gray-400"
            >
              {subtitle}
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72 ">
              <Input
                label={searchPlaceholder}
                color={isDarkMode ? "white" : "black"}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                crossOrigin=""
                value={searchTerm}
                onChange={onSearchChange}
              />
            </div>
          </div>
        </div>
      </CardHeader>
    );
  }

  export default ListHeader;