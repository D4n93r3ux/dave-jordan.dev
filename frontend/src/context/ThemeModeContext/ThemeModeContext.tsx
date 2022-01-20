import { useState } from 'react';
import createSafeContext from '../../utils/createSafeContext';

type ThemeModeContextValue = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const [useThemeModeContext, ThemeModeContextProviderComponent] =
  createSafeContext<ThemeModeContextValue>();

const ThemeModeContextProvider: React.FC = ({ children }) => {
  const darkModeInitialState = JSON.parse(
    localStorage.getItem('darkMode') || 'false'
  );
  const [darkMode, setDarkMode] = useState<boolean>(darkModeInitialState);

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', (!darkMode).toString());
    setDarkMode(!darkMode);
  };

  const value = {
    darkMode,
    toggleDarkMode
  };

  return (
    <ThemeModeContextProviderComponent value={value}>
      {children}
    </ThemeModeContextProviderComponent>
  );
};

export { ThemeModeContextProvider, useThemeModeContext };
