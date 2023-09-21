

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from "@/store/dark-slice";
import { RootState } from "@/store";

import { Switch } from "@material-tailwind/react";

interface ThemeSwitchProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const ThemeSwitch: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.darkMode);

    // Update body class and local storage when Redux state changes
    useEffect(() => {
        window.localStorage.setItem('dark-mode', String(isDarkMode));

        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return <Switch color="blue" checked={isDarkMode} onChange={handleToggle} crossOrigin="" />;
}

export default ThemeSwitch;
