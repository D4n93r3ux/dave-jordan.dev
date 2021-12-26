import { StyleConfig } from '@chakra-ui/theme-tools';

const WordCard: StyleConfig = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    p: '10px',
    borderRadius: '2xl',
    gap: '10px',
    shadow: 'lg',
    w: '100%',
    minWidth: '320px',
    maxWidth: '640px',
    flexBasis: '30%',
    flexGrow: '1',
    border: '2px solid'
  },
  variants: {
    feelingsMetNeeds: {
      borderColor: 'green.200',
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
