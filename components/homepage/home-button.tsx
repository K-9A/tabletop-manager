// components/Button.tsx
import React from "react";
import Link from "next/link";

//Type declaration for the button
type ButtonProps = {
  text: string;
  linkPath: string;
};

const Button: React.FC<ButtonProps> = ({ text, linkPath }) => {
  return (
    <div className="flex items-center justify-center">
      <Link href={linkPath}>
        <div className="text-xl transition duration-300 ease-in-out bg-white text-black hover:bg-amber-200 active:bg-black active:text-white px-10 py-3 my-5 rounded-full font-bold drop-shadow-1shr border-4 border-amber-900 dark:bg-blue-gray-700 dark:text-white dark:border-gray-200 dark:hover:bg-gray-500 cursor-pointer">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default Button;
