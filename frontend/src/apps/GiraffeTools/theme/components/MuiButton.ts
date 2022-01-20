import { Components } from '@mui/material/styles';
import palette from '../palette';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    wordButton: true;
    control: true;
  }
  interface ButtonPropsColorOverrides {
    unselected: true;
    met: true;
    unmet: true;
  }
}

const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableRipple: true
  },
  variants: [
    {
      props: { variant: 'wordButton' },
      style: {
        padding: '4px 10px',
        fontFamily: 'Roboto Mono',
        fontWeight: '400',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '&:hover': {
          backgroundColor: 'white'
        }
      }
    },
    {
      props: { variant: 'wordButton', color: 'unselected' },
      style: {
        color: palette.unselected.dark
      }
    },
    {
      props: { variant: 'wordButton', color: 'met' },
      style: {
        outlineStyle: 'solid',
        outlineWidth: '3px',
        outlineColor: palette.met.highlight
      }
    },
    {
      props: { variant: 'wordButton', color: 'unmet' },
      style: {
        outlineStyle: 'solid',
        outlineWidth: '3px',
        outlineColor: palette.unmet.highlight
      }
    },
    {
      props: { variant: 'control' },
      style: {
        fontSize: '0.7rem',
        fontFamily: 'Roboto Mono',
        padding: '0 5px',
        backgroundColor: palette.control.light,
        border: '2px solid',
        borderRadius: '15px',
        borderColor: palette.control.dark,
        fontWeight: '600',
        _hover: {
          backgroundColor: palette.control.main
        },
        _active: {
          backgroundColor: palette.control.main
        }
      }
    }
  ]
};

export default MuiButton;
