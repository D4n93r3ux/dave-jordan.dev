import WordSection from '../WordSection';
import Controls from '../Controls';
import { Flex } from '@chakra-ui/react';
import testData from '../testData';
import { useRecoilValue, useRecoilCallback } from 'recoil';
import { useEffect } from 'react';
import {
  appStateAtom,
  controlStateAtom,
  sectionAtomFamily,
  cardAtomFamily,
  buttonAtomFamily
} from '../GiraffeState';

interface Props {}

const WordTool = (props: Props) => {
  const appState = useRecoilValue(appStateAtom);

  const hydrateState = useRecoilCallback(
    ({ set }) =>
      ({ user, hideUnselected, sections }: typeof testData) => {
        set(appStateAtom, {
          user,
          sectionIds: sections.map(section => section.sectionId)
        });
        set(controlStateAtom, {
          hideUnselected
        });

        sections.map(
          ({ sectionId, sectionDisplayName, visible, modes, cardData }) => {
            set(sectionAtomFamily(sectionId), {
              sectionDisplayName,
              visible,
              modes,
              cardIds: cardData.map(cardDatum => cardDatum.cardId)
            });
            cardData.map(({ cardId, visible, wordData }) => {
              set(cardAtomFamily(cardId), {
                buttonIds: wordData.map(({ word }) => word)
              });
              wordData.map(({ word, status }) => {
                set(buttonAtomFamily(word), {
                  word,
                  status
                });
                return true;
              });
              return true;
            });
            return true;
          }
        );
      }
  );

  useEffect(() => {
    hydrateState(testData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex flexDirection='column'>
      {appState.sectionIds.map(id => (
        <WordSection sectionId={id} />
      ))}
      <Controls />
    </Flex>
  );
};

export default WordTool;
