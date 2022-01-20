import WordSection from '../WordSection';
import Controls from '../Controls';
import testData from '../../testData';
import { useState, useCallback } from 'react';
import type { SectionData, SetButtonStatusFunction } from '../../types';
import { shouldButtonRender } from '../../utils';
import { Box } from '@mui/material';

const WordTool = () => {
  const [data, setData] = useState(testData);
  const [view, setView] = useState('all');

  const setButtonStatus: SetButtonStatusFunction = useCallback(
    ({ sectionIndex, cardIndex, wordButtonIndex, newStatus }) => {
      setData(currentData => {
        const newData = { ...currentData };
        newData.sectionData[sectionIndex].cardData[cardIndex].wordButtonData[
          wordButtonIndex
        ].status = newStatus;
        return newData;
      });
    },
    []
  );

  const cycleView = () => {
    const viewOptions = ['all', 'selected', 'met', 'unmet'];
    const nextViewIndex = (viewOptions.indexOf(view) + 1) % viewOptions.length;
    setView(viewOptions[nextViewIndex]);
  };

  // This horrible nested mapping function is horrible.
  // Pending better solution.
  const resetButtons = () => {
    setView('all');
    setData(currentData => {
      const newData = {
        ...currentData,

        sectionData: currentData.sectionData.map(currentSectionData => ({
          ...currentSectionData,
          cardData: currentSectionData.cardData.map(currentCardData => ({
            ...currentCardData,
            wordButtonData: currentCardData.wordButtonData.map(
              currentWordButtonData => ({
                ...currentWordButtonData,
                status: 'unselected'
              })
            )
          }))
        }))
      };

      return newData;
    });
  };

  const sections = data.sectionData.map((sectionData, sectionIndex) => {
    const shouldSectionRender = (sectionData: SectionData) => {
      return sectionData.cardData.some(({ wordButtonData }) =>
        wordButtonData.some(({ status }) => shouldButtonRender(view, status))
      );
    };

    const { sectionType, sectionDisplayName, modes, cardData } = sectionData;

    return (
      shouldSectionRender(sectionData) && (
        <WordSection
          sectionType={sectionType}
          sectionIndex={sectionIndex}
          sectionDisplayName={sectionDisplayName}
          modes={modes}
          cardData={cardData}
          view={view}
          setButtonStatus={setButtonStatus}
        />
      )
    );
  });

  return (
    <>
      <Box display='flex' flexDirection='column' marginBottom='30px'>
        {sections}
      </Box>
      <Controls view={view} cycleView={cycleView} resetButtons={resetButtons} />
    </>
  );
};

export default WordTool;
