import WordButtonComponent from './WordButton';
import type { ComponentMeta } from '@storybook/react';
import { Flex } from '@chakra-ui/react';

export default {
  title: 'Giraffe Tools/Atoms/Word Button',
  component: WordButtonComponent
} as ComponentMeta<typeof WordButtonComponent>;

export const WordButton = () => (
  <Flex gap='10px' p='10px' bg='gray.200'>
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
  </Flex>
);
