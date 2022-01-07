import { Heading, Flex, useStyleConfig } from '@chakra-ui/react';
import { CardData, SetButtonStatusFunction } from '../../types';
import WordCard from '../WordCard';
import { shouldButtonRender } from '../../utils';

interface Props {
  sectionType: string;
  sectionIndex: number;
  sectionDisplayName: string;
  modes: string[];
  cardData: {
    cardDisplayName: string;
    wordButtonData: { word: string; status: string }[];
  }[];
  view: string;
  setButtonStatus: SetButtonStatusFunction | null;
}

const WordSection = ({
  sectionType,
  sectionIndex,
  sectionDisplayName,
  modes,
  cardData,
  view,
  setButtonStatus
}: Props) => {
  const sectionStyles = useStyleConfig('WordSection');
  const sectionHeadingStyles = useStyleConfig('SectionHeading', {
    variant: sectionType
  });

  const cards = cardData.map((cardData, cardIndex) => {
    const shouldCardRender = ({ wordButtonData }: CardData) => {
      return wordButtonData.some(({ status }) =>
        shouldButtonRender(view, status)
      );
    };

    const { cardDisplayName, wordButtonData } = cardData;

    return (
      shouldCardRender(cardData) && (
        <WordCard
          sectionType={sectionType}
          sectionIndex={sectionIndex}
          cardIndex={cardIndex}
          cardDisplayName={cardDisplayName}
          wordButtonData={wordButtonData}
          view={view}
          modes={modes}
          setButtonStatus={setButtonStatus}
        />
      )
    );
  });

  return (
    <Flex __css={sectionStyles}>
      <Heading sx={sectionHeadingStyles} size='2xl'>
        {sectionDisplayName}
      </Heading>
      {cards}
    </Flex>
  );
};

export default WordSection;
