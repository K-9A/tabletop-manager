import React from "react";
import { Card } from "@material-tailwind/react";
import { DisplayFormProps } from "@/components/types/display-types";

//This container is for the LIST character/campaign.
const ListCard: React.FC<DisplayFormProps> = ({
  children,
  bgColor = "bg-gray-200",
}) => {
  //Default color is white shade
  const darkBgColor = bgColor === "bg-gray-200" ? "dark:bg-gray-700" : ""; // Handle dark mode if necessary

  return (
    <Card className={`${bgColor} ${darkBgColor} relative h-[34rem] w-[60rem]`}>
      {children}
    </Card>
  );
};

export default ListCard;
