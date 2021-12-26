import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import Button from './components/button';
import SectionHeading from './components/sectionHeading';
import CardHeading from './components/cardHeading';
import WordCard from './components/wordCard';
import WordSection from './components/wordSection';

const overrides = {
  ...foundations,
  components: {
    Button,
    CardHeading,
    SectionHeading,
    WordCard,
    WordSection
  }
};

export default extendTheme(overrides);
