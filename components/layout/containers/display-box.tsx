import React from 'react';
import { DisplayFormProps } from '@/components/types/display-types';

//This container is to display Login, Register and About Pages
const DisplayForm: React.FC<DisplayFormProps> = ({ children, bgColor = "bg-gray-200" }) => { //Default color is white shade
  const darkBgColor = bgColor === "bg-gray-200" ? "dark:bg-gray-700" : ""; // Handle dark mode if necessary

  return (
    <div className={`${bgColor} ${darkBgColor} mt-4 p-8 rounded-lg shadow-md flex flex-col justify-center items-center w-full max-w-xl mx-auto overflow-x-hidden`}>
      {children}
    </div>
  );
};

export default DisplayForm;
