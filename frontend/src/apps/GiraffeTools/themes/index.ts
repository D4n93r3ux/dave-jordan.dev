import baseThemeOptions from './baseThemeOptions';
import darkThemeOptions from './darkThemeOptions';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

const lightTheme = responsiveFontSizes(createTheme(baseThemeOptions));
const darkTheme = responsiveFontSizes(
  createTheme(deepmerge(baseThemeOptions, darkThemeOptions))
);

const themes = {
  lightTheme,
  darkTheme
};

export default themes;
