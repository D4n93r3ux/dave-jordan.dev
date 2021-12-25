import { StyleConfig } from '@chakra-ui/theme-tools';

const Button: StyleConfig = {
  baseStyle: {
    fontFamily: 'Roboto Mono',
    fontWeight: '600',
    borderRadius: 'xl',
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
      bg: 'green.300'
    },
    unmet: {
      bg: 'red.300'
    }
  },
  defaultProps: {
    size: 'sm'
  }
};

export default Button;
