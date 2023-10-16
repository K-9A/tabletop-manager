import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useSession } from "next-auth/react";
import ConfirmDialog from "@/components/layout/dialogue-box/confirm-dialogue";
import { useCampaignList } from "@/components/custom-hooks/campaign-hooks/use-campaign-list";
import { TrashIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = [
  { title: "Campaign Name", width: "w-1/2" },
  { title: "Campaign Code", width: "w-1/4" },
  { title: "Date Created", width: "w-1/4" },
  { title: "Delete", width: "w-1/4" },
];

const CampaignList = () => {
  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  //GetUserID
  const { data: session } = useSession();
  const userId = (session?.user as any)?.id;

  const {
    searchTerm,
    setSearchTerm,
    isDialogOpen,
    setIsDialogOpen,
    handleCampaignDelete,
    confirmCampaignDelete,
    next,
    prev,
    totalPages,
    filteredRows,
    currentRows,
    active
  } = useCampaignList(userId);


  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <Card className="relative h-[34rem] w-[60rem] bg-gray-100 dark:bg-gray-800">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none bg-gray-100 dark:bg-gray-800 mb-4"
      >
        <div className="mb-4 mx-12 flex flex-col justify-between gap-12 md:flex-row md:items-center bg-gray-100 dark:bg-gray-800">
          <div className="pr-32 bg-gray-100 dark:bg-gray-800">
            <Typography
              variant="h5"
              color="blue-gray"
              className="dark:text-white"
            >
              Campaign List
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal dark:text-gray-400"
            >
              List of your Campaigns
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72 ">
              <Input
                label="Search by Name"
                color={isDarkMode ? "white" : "black"}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                crossOrigin=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
        <table className="w-full min-w-max text-left table-fixed">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head.title}
                  className={`${head.width} border-y border-blue-gray-200 bg-blue-gray-50/50 p-4 dark:bg-gray-600`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 dark:text-white"
                  >
                    {head.title}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td
                  colSpan={TABLE_HEAD.length}
                  className="text-center py-4 dark:text-gray-200"
                >
                  No Campaigns Found
                </td>
              </tr>
            ) : (
              currentRows.map(({ name, code, date }, index) => {
                const isLast = index === currentRows.length - 1;
                const classes = isLast
                  ? "p-2"
                  : "p-2 border-b border-blue-gray-100";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center w-1/2">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold dark:text-white"
                        >
                          {truncateString(name, 40)}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-300"
                      >
                        {code}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-gray-300"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <IconButton variant="text">
                        <Tooltip content="Delete Campaign">
                          <IconButton
                            variant="text"
                            // @ts-ignore
                            color={isDarkMode && "white"}
                            onClick={() => handleCampaignDelete(code)}
                          >
                            <TrashIcon className="h-5 w-5" />
                          </IconButton>
                        </Tooltip>
                        <ConfirmDialog
                          open={isDialogOpen}
                          title="Delete Campaign"
                          body="Are you sure you want to delete this campaign? This action cannot be undone."
                          onConfirm={confirmCampaignDelete}
                          onCancel={() => setIsDialogOpen(false)}
                        />
                      </IconButton>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-blue-gray-100 p-4">
        <IconButton
          size="sm"
          variant="outlined"
          // @ts-ignore
          color={isDarkMode && "white"}
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal dark:text-gray-400">
          Page{" "}
          <strong className="text-gray-900 dark:text-white">{active}</strong> of{" "}
          <strong className="text-gray-900 dark:text-white">
            {totalPages}
          </strong>
        </Typography>
        <IconButton
          size="sm"
          // @ts-ignore
          color={isDarkMode && "white"}
          variant="outlined"
          onClick={next}
          disabled={active === totalPages}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </CardFooter>
    </Card>
  );
};

//export default CampaignList;
export default React.memo(CampaignList);
