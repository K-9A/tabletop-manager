import React, { ReactNode } from 'react';

interface DisplayFormProps {
  children: ReactNode;
  bgColor?: string; // new prop for background color
}

const DisplayForm: React.FC<DisplayFormProps> = ({ children, bgColor = "bg-gray-200" }) => { //Default color is white shade
  const darkBgColor = bgColor === "bg-gray-200" ? "dark:bg-gray-600" : ""; // Handle dark mode if necessary

  return (
    <div className={`${bgColor} ${darkBgColor} p-8 rounded-lg shadow-md flex flex-col justify-center items-center w-full max-w-xl mx-auto`}>
      {children}
    </div>
  );
};

export default DisplayForm;
