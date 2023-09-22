import React from "react";
import ThemeSwitch from "./theme-switch";

import { ListItem } from "@material-tailwind/react";

import {
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";


interface DarkModeToggleProps {
    isDarkMode: boolean;
  }

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode }) => (
<ListItem className="flex items-center">
  <span className="px-2">
    {isDarkMode ? (
      <span className="dark:text-white">
        <MoonIcon className="h-6 w-6 " />
      </span>
    ) : (
      <SunIcon className="h-6 w-6" />
    )}
  </span>
  <ThemeSwitch />
</ListItem>
);
