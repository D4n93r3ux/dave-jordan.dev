import { Heading, Flex, useStyleConfig } from '@chakra-ui/react';
import WordButton from '../WordButton';
import { useRecoilValue } from 'recoil';
import { cardAtomFamily, hideCardSelector } from '../GiraffeState';

interface Props {
  cardId: string;
  sectionId: string;
  modes: string[];
}

const WordCard: React.FC<Props> = ({ cardId, sectionId, modes }) => {
  const { buttonIds } = useRecoilValue(cardAtomFamily(cardId));

  const hideCard = useRecoilValue(hideCardSelector({ cardId, sectionId }));

  const styles = useStyleConfig('WordCard', { variant: sectionId });

  // Get hideUnselected from state

  return !hideCard ? (
    <Flex __css={styles} variant={sectionId}>
      <Heading variant={`${sectionId}Card`} size='md'>
        {cardId}
      </Heading>
      <Flex flexWrap='wrap' gap='15px' justify='center'>
        {buttonIds.map(buttonId => (
          <WordButton buttonId={buttonId} sectionId={sectionId} />
        ))}
      </Flex>
    </Flex>
  ) : (
    <></>
  );
};

export default WordCard;
