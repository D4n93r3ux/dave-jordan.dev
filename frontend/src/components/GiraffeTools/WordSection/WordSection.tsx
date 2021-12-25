import { Heading, Flex } from '@chakra-ui/react';
import WordCard from '../WordCard';
import { useRecoilValue } from 'recoil';
import { sectionAtomFamily } from '../GiraffeState';

interface Props {
  sectionId: string;
}

const WordSection = ({ sectionId }: Props) => {
  // TODO: Implement section hiding with unused 'visible' state here
  const { sectionDisplayName, modes, cardIds } = useRecoilValue(
    sectionAtomFamily(sectionId)
  );

  return (
    <Flex
      maxWidth='1000px'
      gap='15px'
      p='15px'
      margin='15px auto'
      flexWrap='wrap'
    >
      <Heading
        variant={`${sectionId}Section`}
        p='10px 10px'
        size='lg'
        borderRadius='2xl'
        flexBasis='100%'
      >
        {sectionDisplayName}
      </Heading>
      {cardIds.map(cardId => (
        <WordCard cardId={cardId} sectionId={sectionId} modes={modes} />
      ))}
    </Flex>
  );
};

export default WordSection;
