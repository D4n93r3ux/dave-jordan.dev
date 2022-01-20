import WordCardComponent from './WordCard';
import type { ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';

export default {
  title: 'Giraffe Tools/Molecules/Word Card',
  component: WordCardComponent
} as ComponentMeta<typeof WordCardComponent>;

const basicProps = {
  sectionIndex: 0,
  cardIndex: 0,
  wordButtonData: [
    { word: 'word', status: 'unselected' },
    { word: 'word', status: 'unselected' },
    { word: 'word', status: 'unselected' },
    { word: 'word', status: 'unselected' },
    { word: 'word', status: 'unselected' }
  ],
  view: 'all',
  setButtonStatus: null
};

export const WordCard = () => (
  <Box display='flex' flexDirection='column' gap='10px'>
    <WordCardComponent
      {...basicProps}
      sectionType='feelingsMetNeeds'
      cardDisplayName='Affectionate'
      modes={['unselected', 'met']}
    />
    <WordCardComponent
      {...basicProps}
      sectionType='feelingsUnmetNeeds'
      cardDisplayName='Afraid'
      modes={['unselected', 'unmet']}
    />
    <WordCardComponent
      {...basicProps}
      sectionType='needs'
      cardDisplayName='Connection'
      modes={['unselected', 'met', 'unmet']}
    />
  </Box>
);
