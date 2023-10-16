import {
  Typography,
  CardFooter,
  IconButton,

} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


function ListFooter({
    activePage,
    totalPages,
    onPrev,
    onNext,
    isDarkMode
  }) {
    return (
      <CardFooter className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-blue-gray-100 p-4">
        <IconButton
          size="sm"
          variant="outlined"
          // @ts-ignore
          color={isDarkMode ? "white" : "black"}
          onClick={onPrev}
          disabled={activePage === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal dark:text-gray-400">
          Page{" "}
          <strong className="text-gray-900 dark:text-white">{activePage}</strong> of{" "}
          <strong className="text-gray-900 dark:text-white">
            {totalPages}
          </strong>
        </Typography>
        <IconButton
          size="sm"
          // @ts-ignore
          color={isDarkMode ? "white" : "black"}
          variant="outlined"
          onClick={onNext}
          disabled={activePage === totalPages}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </CardFooter>
    );
  }
  
  export default ListFooter;