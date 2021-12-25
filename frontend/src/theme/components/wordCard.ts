import { StyleConfig } from '@chakra-ui/theme-tools';

const WordCard: StyleConfig = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    p: '15px',
    borderRadius: '2xl',
    gap: '15px',
    shadow: 'lg',
    minWidth: '320px',
    flexBasis: '30%',
    flexGrow: '1',
    border: '2px solid'
  },
  variants: {
    feelingsMetNeeds: {
      borderColor: 'green.100',
      bg: 'green.50'
    },
    feelingsUnmetNeeds: {
      borderColor: 'red.100',
      bg: 'red.50'
    },
    needs: {
      borderColor: 'blue.100',
      bg: 'blue.50'
    }
  },
  defaultProps: {}
};

export default WordCard;
