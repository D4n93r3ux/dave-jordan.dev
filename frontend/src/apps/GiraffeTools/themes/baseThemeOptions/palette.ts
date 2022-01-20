import type { PaletteOptions } from '@mui/material/styles/createPalette';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface PaletteColor {
    highlight: string;
    bg: string;
    border: string;
    heading: string;
  }
  interface SimplePaletteColorOptions {
    highlight?: string;
    bg?: string;
    border?: string;
    heading?: string;
  }
  interface Palette {
    unselected: PaletteColor;
    met: PaletteColor;
    unmet: PaletteColor;
    needs: PaletteColor;
    control: PaletteColor;
  }
  interface PaletteOptions {
    unselected?: SimplePaletteColorOptions;
    met?: SimplePaletteColorOptions;
    unmet?: SimplePaletteColorOptions;
    needs?: SimplePaletteColorOptions;
    control?: SimplePaletteColorOptions;
  }
}

const palette: PaletteOptions = {
  unselected: {
    main: grey[400],
    heading: grey[600]
  },
  met: {
    bg: '#C6F6D5',
    border: '#9AE6B4',
    highlight: '#68D391',
    main: 'green',
    heading: '#38A169',
    headingBg: '#38A169'
  },
  unmet: {
    bg: '#FED7D7',
    border: '#FEB2B2',
    main: 'red',
    highlight: '#FC8181',
    heading: '#E53E3E',
    headingBg: '#E53E3E'
  },
  needs: {
    bg: '#BEE3F8',
    border: '#90CDF4',
    main: 'blue',
    heading: '#3182CE',
    headingBg: '#3182CE'
  },
  control: {
    bg: '#FEFCBF',
    border: '#ECC94B',
    main: 'yellow'
  }
};

export default palette;
