import WordButton from '../WordButton';
import { shouldButtonRender } from '../../utils';
import { Box, Paper, Typography } from '@mui/material';
import type { SetButtonStatusFunction } from '../../types';

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

  const colorMap = new Map([
    ['feelingsMetNeeds', 'met'],
    ['feelingsUnmetNeeds', 'unmet'],
    ['needs', 'needs']
  ]);

  const backgroundColor = `${colorMap.get(sectionType)}.light`;
  const borderColor = `${colorMap.get(sectionType)}.main`;
  const cardHeadingColor = `${colorMap.get(sectionType)}.dark`;

  return (
    <Paper
      variant='wordCard'
      sx={{
        backgroundColor,
        borderColor
      }}
    >
      <Typography variant='h4' color={cardHeadingColor}>
        {cardDisplayName}
      </Typography>
      <Box display='flex' flexWrap='wrap' gap='10px' justifyContent='center'>
        {wordButtons}
      </Box>
    </Paper>
  );
};

export default WordCard;
