import { StyleConfig } from '@chakra-ui/theme-tools';

const CardHeading: StyleConfig = {
  baseStyle: {
    fontFamily: 'Caveat',
    textAlign: 'center'
  },
  variants: {
    feelingsMetNeeds: {
      color: 'green.500'
    },
    feelingsUnmetNeeds: {
      color: 'red.500'
    },
    needs: {
      color: 'blue.500'
    }
  }
};

export default CardHeading;
