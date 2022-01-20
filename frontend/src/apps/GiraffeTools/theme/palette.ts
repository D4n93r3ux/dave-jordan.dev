import type {
  PaletteColor,
  PaletteOptions
} from '@mui/material/styles/createPalette';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    highlight?: string;
  }
  interface Palette {
    unselected: PaletteColor;
    met: PaletteColor;
    unmet: PaletteColor;
    needs: PaletteColor;
    control: PaletteColor;
  }
  interface PaletteOptions {
    unselected: SimplePaletteColorOptions;
    met: SimplePaletteColorOptions;
    unmet: SimplePaletteColorOptions;
    needs: SimplePaletteColorOptions;
    control: SimplePaletteColorOptions;
  }
}

const palette: PaletteOptions = {
  unselected: {
    light: grey[50],
    main: grey[200],
    dark: grey[500]
  },
  met: {
    light: '#F0FFF4',
    main: '#C6F6D5',
    highlight: '#68D391',
    dark: '#38A169'
  },
  unmet: {
    light: '#FFF5F5',
    main: '#FED7D7',
    highlight: '#FC8181',
    dark: '#E53E3E'
  },
  needs: {
    light: '#EBF8FF',
    main: '#BEE3F8',
    dark: '#3182CE'
  },
  control: {
    light: '#FEFCBF',
    main: '#FAF089',
    dark: '#ECC94B'
  }
};

export default palette;
