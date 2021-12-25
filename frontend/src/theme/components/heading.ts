import { StyleConfig } from '@chakra-ui/theme-tools';

const Heading: StyleConfig = {
  baseStyle: {
    textAlign: 'center',
    color: 'white'
  },
  variants: {
    feelingsMetNeedsSection: {
      bg: 'green.600'
    },
    feelingsUnmetNeedsSection: {
      bg: 'red.600'
    },
    needsSection: {
      bg: 'blue.600'
    },
    feelingsMetNeedsCard: {
      color: 'green.500'
    },
    feelingsUnmetNeedsCard: {
      color: 'red.500'
    },
    needsCard: {
      color: 'blue.500'
    }
  },
  defaultProps: {}
};

export default Heading;
