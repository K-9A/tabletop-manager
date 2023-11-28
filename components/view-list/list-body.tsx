import { TrashIcon } from "@heroicons/react/24/solid";
import ConfirmDialog from "../layout/dialogue-box/confirm-dialogue";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

function ListBody({
  headers,
  rows,
  isDarkMode,
  onRowDelete,
  isLoading,
  noDataMessage = "No Data Found",
  truncateLength = 40,
  isDialogOpen,
  setIsDialogOpen,
  onRowClick,
  confirmDelete,
}) {
  return (
    <CardBody className="px-0">
      <table className="text-left table-auto">
        <thead>
          <tr>
            {headers.map((head) => (
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

        {isLoading ? (
          <tbody>
            <tr>
              <td>
                <div className="flex ml-96 mt-32 justify-center items-center">
                  <Spinner />
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length}
                  className="text-center py-4 dark:text-gray-200"
                >
                  {noDataMessage}
                </td>
              </tr>
            ) : (
              rows.map((row, index) => {
                const isLast = index === rows.length - 1;
                const classes = isLast
                  ? "p-2"
                  : "p-2 border-b border-blue-gray-100";

                return (
                  <tr key={index}>
                    {Object.values(row).map((value, idx) => (
                      <td className={classes} key={idx}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className={
                            idx === 0
                              ? "font-bold dark:text-white"
                              : "font-normal dark:text-gray-300"
                          }
                        >
                          <span
                            className="cursor-pointer hover:underline transition-all"
                            onClick={() => onRowClick(row.id)}
                          >
                            {typeof value === "string" && idx === 0
                              ? truncateString(value, truncateLength)
                              : value}
                          </span>
                        </Typography>
                      </td>
                    ))}
                    <td className={classes}>
                      <Tooltip content={`Delete ${row.name}`}>
                        <IconButton
                          variant="text"
                          // @ts-ignore
                          color={isDarkMode ? "white" : "black"}
                          onClick={() => onRowDelete(row)}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                      <ConfirmDialog
                        open={isDialogOpen}
                        title="Delete Campaign"
                        body="Are you sure you want to delete this campaign? This action cannot be undone."
                        onConfirm={confirmDelete}
                        onCancel={() => setIsDialogOpen(false)}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        )}
      </table>
    </CardBody>
  );
}

export default ListBody;
