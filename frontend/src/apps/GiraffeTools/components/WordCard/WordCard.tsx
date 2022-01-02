import { Heading, Flex, useStyleConfig } from '@chakra-ui/react';
import WordButton from '../WordButton';
import { useRecoilValue } from 'recoil';
import { cardAtomFamily, isCardDisplayedSelector } from '../../state';

interface Props {
  cardId: string;
  sectionId: string;
  modes: string[];
}

const WordCard: React.FC<Props> = ({ cardId, sectionId, modes }) => {
  const { wordButtonIds } = useRecoilValue(cardAtomFamily(cardId));

  const isCardDisplayed = useRecoilValue(
    isCardDisplayedSelector({ cardId, sectionId })
  );

  const cardStyles = useStyleConfig('WordCard', { variant: sectionId });
  const cardHeadingStyles = useStyleConfig('CardHeading', {
    variant: sectionId
  });

  return isCardDisplayed ? (
    <Flex __css={cardStyles} variant={sectionId}>
      <Heading sx={cardHeadingStyles} size='xl'>
        {cardId}
      </Heading>
      <Flex flexWrap='wrap' gap='10px' justify='center'>
        {wordButtonIds.map(wordButtonId => (
          <WordButton wordButtonId={wordButtonId} sectionId={sectionId} />
        ))}
      </Flex>
    </Flex>
  ) : (
    <></>
  );
};

export default WordCard;
