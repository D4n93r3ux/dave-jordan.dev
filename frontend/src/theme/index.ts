import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import Button from './components/button';
import Heading from './components/heading';
import WordCard from './components/wordCard';
import WordSection from './components/wordSection';

const overrides = {
  ...foundations,
  components: {
    Button,
    Heading,
    WordCard,
    WordSection
  }
};

export default extendTheme(overrides);
