import React, { useEffect, useState } from "react";
import { Switch } from "@material-tailwind/react";

interface ThemeSwitchProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ isDarkMode, toggleDarkMode }) => {
    const [localDarkMode, setLocalDarkMode] = useState(isDarkMode);

    // Initialize local state based on local storage
    useEffect(() => {
        const darkModeStored = window.localStorage.getItem('dark-mode') === 'true';
        setLocalDarkMode(darkModeStored);
    }, []);

    // Update local state when isDarkMode prop changes
    useEffect(() => {
        setLocalDarkMode(isDarkMode);
    }, [isDarkMode]);

    // Update body class and local storage when local state changes
    useEffect(() => {
        window.localStorage.setItem('dark-mode', String(localDarkMode));

        if (localDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [localDarkMode]);

    const handleToggle = () => {
        setLocalDarkMode(!localDarkMode);
        toggleDarkMode();
    };

    return <Switch color="blue" checked={localDarkMode} onChange={handleToggle} />;
}

export default ThemeSwitch;
