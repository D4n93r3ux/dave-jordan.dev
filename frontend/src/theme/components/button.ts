import { StyleConfig } from '@chakra-ui/theme-tools';

const Button: StyleConfig = {
  baseStyle: {
    fontFamily: 'Roboto Mono',
    fontWeight: '400',
    borderRadius: 'xl',
    bg: 'white',
    _focus: {
      shadow: 'none'
    }
  },
  sizes: {},
  variants: {
    unselected: {
      bg: 'white',
      color: 'gray.500',
      shadow: 'md',
      _focus: {
        shadow: 'md'
      }
    },
    met: {
      outline: '3px solid',
      outlineColor: 'green.300'
    },
    unmet: {
      outline: '3px solid',
      outlineColor: 'red.300'
    },
    control: {
      bg: 'yellow.100',
      border: '2px solid',
      borderRadius: 'xl',
      borderColor: 'yellow.400',
      fontWeight: '600',
      _hover: {
        bg: 'yellow.200'
      },
      _active: {
        bg: 'yellow.100'
      }
    }
  },
  defaultProps: {
    size: 'sm'
  }
};

export default Button;
