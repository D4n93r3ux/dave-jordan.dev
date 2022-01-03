import { useRecoilCallback } from 'recoil';
import {
  appAtom,
  viewAtom,
  sectionAtomFamily,
  cardAtomFamily,
  wordButtonAtomFamily
} from '../state';

type AppData = {
  user: string;
  view: string;
  sectionData: {
    sectionId: string;
    sectionDisplayName: string;
    modes: string[];
    cardData: {
      cardId: string;
      wordData: {
        word: string;
        status: string;
      }[];
    }[];
  }[];
};

const useStateHydrator = ({ user, view, sectionData }: AppData) => {
  const hydrateState = useRecoilCallback(({ set }) => () => {
    // Set app state
    set(appAtom, {
      user,
      sectionIds: sectionData.map(({ sectionId }) => sectionId)
    });
    // Set view state
    set(viewAtom, view);

    sectionData.map(({ sectionId, sectionDisplayName, modes, cardData }) => {
      // Set section state
      set(sectionAtomFamily(sectionId), {
        sectionDisplayName,
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
    });
  });

  return hydrateState;
};

export default useStateHydrator;
