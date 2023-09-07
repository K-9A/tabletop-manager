import React, { ReactNode } from 'react';

interface DisplayFormProps {
  children: ReactNode;
}

const DisplayForm: React.FC<DisplayFormProps> = ({ children }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center w-full max-w-xl mx-auto">
      {children}
    </div>
  );
};

export default DisplayForm;
