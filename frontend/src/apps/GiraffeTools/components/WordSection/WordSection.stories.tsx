import WordSectionComponent from './WordSection';
import type { ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';

export default {
  title: 'Giraffe Tools/Organisms/Word Section',
  component: WordSectionComponent
} as ComponentMeta<typeof WordSectionComponent>;

const basicProps = {
  sectionIndex: 0,
  view: 'all',
  setButtonStatus: null
};

export const WordSection = () => (
  <Box display='flex' flexDirection='column' gap='10px'>
    <WordSectionComponent
      {...basicProps}
      sectionType='feelingsMetNeeds'
      sectionDisplayName='Feelings: Met Needs'
      modes={['unselected', 'met']}
      cardData={[
        {
          cardDisplayName: 'Affectionate',
          wordButtonData: Array(5).fill({ word: 'word', status: 'unselected' })
        },
        {
          cardDisplayName: 'Engaged',
          wordButtonData: Array(5).fill({ word: 'word', status: 'unselected' })
        }
      ]}
    />
    <WordSectionComponent
      {...basicProps}
      sectionType='feelingsUnmetNeeds'
      sectionDisplayName='Feelings: Unmet Needs'
      modes={['unselected', 'unmet']}
      cardData={[
        {
          cardDisplayName: 'Afraid',
          wordButtonData: Array(5).fill({ word: 'word', status: 'unselected' })
        },
        {
          cardDisplayName: 'Annoyed',
          wordButtonData: Array(5).fill({ word: 'word', status: 'unselected' })
        }
      ]}
    />
    <WordSectionComponent
      {...basicProps}
      sectionType='needs'
      sectionDisplayName='Needs'
      modes={['unselected', 'met', 'unmet']}
      cardData={[
        {
          cardDisplayName: 'Connection',
          wordButtonData: Array(5).fill({ word: 'word', status: 'unselected' })
        },
        {
          cardDisplayName: 'Physical Well-Being',
          wordButtonData: Array(5).fill({ word: 'word', status: 'unselected' })
        }
      ]}
    />
  </Box>
);
