import palette from './palette';
import typography from './typography';
import components from './components';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';

const giraffeTheme: ThemeOptions = {
  palette,
  typography,
  components
};

export default responsiveFontSizes(createTheme(giraffeTheme));
