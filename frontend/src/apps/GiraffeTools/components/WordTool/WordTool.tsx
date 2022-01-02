import WordSection from '../WordSection';
import Controls from '../Controls';
import { Flex } from '@chakra-ui/react';
import testData from '../../testData';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import { useEffect } from 'react';
import {
  appAtom,
  viewAtom,
  sectionAtomFamily,
  cardAtomFamily,
  wordButtonAtomFamily
} from '../../state';

const WordTool = () => {
  const appState = useRecoilValue(appAtom);

  const hydrateState = useRecoilCallback(
    ({ set }) =>
      ({ user, view, sectionData }: typeof testData) => {
        // Set app state
        set(appAtom, {
          user,
          sectionIds: sectionData.map(({ sectionId }) => sectionId)
        });
        // Set view state
        set(viewAtom, view);

        sectionData.map(
          ({ sectionId, sectionDisplayName, visible, modes, cardData }) => {
            // Set section state
            set(sectionAtomFamily(sectionId), {
              sectionDisplayName,
              visible,
              modes,
              cardIds: cardData.map(({ cardId }) => cardId)
            });
            // Set card state
            cardData.map(({ cardId, wordData }) => {
              set(cardAtomFamily(cardId), {
                wordButtonIds: wordData.map(({ word }) => `${cardId}-${word}`)
              });
              // Set wordButton state
              wordData.map(({ word, status }) => {
                set(wordButtonAtomFamily(`${cardId}-${word}`), {
                  word,
                  status
                });
              });
            });
          }
        );
      }
  );

  useEffect(() => {
    hydrateState(testData);
  }, []);

  return (
    <>
      <Flex flexDirection='column' marginBottom='30px'>
        {appState.sectionIds.map(id => (
          <WordSection sectionId={id} sectionAtomFamily={sectionAtomFamily} />
        ))}
      </Flex>
      <Controls />
    </>
  );
};

export default WordTool;
