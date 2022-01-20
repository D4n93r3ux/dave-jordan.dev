import WordButtonComponent from './WordButton';
import type { ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';

export default {
  title: 'Giraffe Tools/Atoms/Word Button',
  component: WordButtonComponent
} as ComponentMeta<typeof WordButtonComponent>;

export const WordButton = () => (
  <Box
    sx={{
      display: 'flex',
      gap: '10px',
      padding: '10px',
      backgroundColor: 'lightgray'
    }}
  >
    <WordButtonComponent
      word='word'
      status='unselected'
      modes={['unselected', 'met', 'unmet']}
      setButtonStatus={null}
    />
    <WordButtonComponent
      word='word'
      status='met'
      modes={['unselected', 'met', 'unmet']}
      setButtonStatus={null}
    />
    <WordButtonComponent
      word='word'
      status='unmet'
      modes={['unselected', 'met', 'unmet']}
      setButtonStatus={null}
    />
  </Box>
);
