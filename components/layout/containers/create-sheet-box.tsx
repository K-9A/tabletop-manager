import React from 'react';
import { DisplayFormProps } from '@/components/types/display-types';

//This container is for the CREATE character/campaign page.
const CreateSheetForm: React.FC<DisplayFormProps> = ({ children, bgColor = "bg-gray-200" }) => { //Default color is white shade
  const darkBgColor = bgColor === "bg-gray-200" ? "dark:bg-gray-700" : ""; // Handle dark mode if necessary

  return (
    <div className={`${bgColor} ${darkBgColor} py-10 px-12 rounded-lg shadow-md flex flex-col justify-center items-center w-full max-w-4xl mx-auto h-[590px]`}>
      {children}
    </div>
  );
};

export default CreateSheetForm;
