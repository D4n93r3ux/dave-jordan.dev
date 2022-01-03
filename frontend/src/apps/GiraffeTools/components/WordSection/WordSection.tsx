import { Heading, Flex, useStyleConfig } from '@chakra-ui/react';
import WordCard from '../WordCard';
import { useRecoilValue } from 'recoil';
import { sectionAtomFamily, isSectionDisplayedSelector } from '../../state';

interface Props {
  sectionId: string;
}

const WordSection = ({ sectionId }: Props) => {
  const { sectionDisplayName, modes, cardIds } = useRecoilValue(
    sectionAtomFamily(sectionId)
  );

  const isSectionDisplayed = useRecoilValue(
    isSectionDisplayedSelector(sectionId)
  );

  const sectionStyles = useStyleConfig('WordSection');
  const sectionHeadingStyles = useStyleConfig('SectionHeading', {
    variant: sectionId
  });

  return isSectionDisplayed ? (
    <Flex __css={sectionStyles}>
      <Heading sx={sectionHeadingStyles} size='2xl'>
        {sectionDisplayName}
      </Heading>
      {cardIds.map(cardId => (
        <WordCard cardId={cardId} sectionId={sectionId} modes={modes} />
      ))}
    </Flex>
  ) : (
    <></>
  );
};

export default WordSection;
