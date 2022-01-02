import { StyleConfig } from '@chakra-ui/theme-tools';

const SectionHeading: StyleConfig = {
  baseStyle: {
    flexBasis: '100%',
    borderRadius: '2xl',
    p: '5px 5px',
    fontFamily: 'Caveat',
    fontWeight: '700',
    textAlign: 'center',
    color: 'white'
  },
  variants: {
    feelingsMetNeeds: {
      bg: 'green.500'
    },
    feelingsUnmetNeeds: {
      bg: 'red.500'
    },
    needs: {
      bg: 'blue.500'
    }
  }
};

export default SectionHeading;
