import { Heading, Flex, useStyleConfig } from '@chakra-ui/react';
import WordButton from '../WordButton';
import type { SetButtonStatusFunction } from '../../types';
import { shouldButtonRender } from '../../utils';

interface Props {
  sectionType: string;
  sectionIndex: number;
  cardIndex: number;
  cardDisplayName: string;
  wordButtonData: { word: string; status: string }[];
  view: string;
  modes: string[];
  setButtonStatus: SetButtonStatusFunction | null;
}

const WordCard: React.FC<Props> = ({
  sectionType,
  sectionIndex,
  cardIndex,
  cardDisplayName,
  wordButtonData,
  view,
  modes,
  setButtonStatus
}) => {
  const cardStyles = useStyleConfig('WordCard', { variant: sectionType });
  const cardHeadingStyles = useStyleConfig('CardHeading', {
    variant: sectionType
  });

  const wordButtons = wordButtonData.map(
    ({ word, status }, wordButtonIndex) => {
      return (
        shouldButtonRender(view, status) && (
          <WordButton
            key={wordButtonIndex}
            sectionIndex={sectionIndex}
            cardIndex={cardIndex}
            wordButtonIndex={wordButtonIndex}
            word={word}
            status={status}
            view={view}
            modes={modes}
            setButtonStatus={setButtonStatus}
          />
        )
      );
    }
  );

  if (cardIndex === 0 && sectionIndex === 0) console.log(wordButtons[0]);

  return (
    <Flex __css={cardStyles} variant={sectionIndex}>
      <Heading sx={cardHeadingStyles} size='xl'>
        {cardDisplayName}
      </Heading>
      <Flex flexWrap='wrap' gap='10px' justify='center'>
        {wordButtons}
      </Flex>
    </Flex>
  );
};

export default WordCard;
