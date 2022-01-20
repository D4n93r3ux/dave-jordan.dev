import { CardData, SetButtonStatusFunction } from '../../types';
import WordCard from '../WordCard';
import { shouldButtonRender } from '../../utils';
import { Box, Typography } from '@mui/material';

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

  const colorMap = new Map([
    ['feelingsMetNeeds', 'met'],
    ['feelingsUnmetNeeds', 'unmet'],
    ['needs', 'needs']
  ]);

  const sectionHeadingBackgroundColor = `${colorMap.get(sectionType)}.dark`;

  return (
    <Box
      display='flex'
      flexDirection='column'
      maxWidth='640px'
      minWidth='320px'
      width='100%'
      gap='10px'
      margin='auto'
      p='10px 10px 20px'
    >
      <Typography
        variant='h3'
        sx={{ backgroundColor: sectionHeadingBackgroundColor }}
      >
        {sectionDisplayName}
      </Typography>
      {cards}
    </Box>
  );
};

export default WordSection;
