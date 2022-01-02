import { useRecoilCallback } from 'recoil';
import {
  appAtom,
  viewAtom,
  cardAtomFamily,
  sectionAtomFamily,
  wordButtonAtomFamily
} from '../state';

const useResetApp = () => {
  const resetApp = useRecoilCallback(({ snapshot, set }) => () => {
    const sectionIds = snapshot.getLoadable(appAtom).contents
      .sectionIds as string[];

    sectionIds.map(sectionId => {
      const cardIds = snapshot.getLoadable(sectionAtomFamily(sectionId))
        .contents.cardIds as string[];

      cardIds.map(cardId => {
        const wordButtonIds = snapshot.getLoadable(cardAtomFamily(cardId))
          .contents.wordButtonIds as string[];

        wordButtonIds.map(wordButtonId => {
          const { word } = snapshot.getLoadable(
            wordButtonAtomFamily(wordButtonId)
          ).contents;

          set(wordButtonAtomFamily(wordButtonId), {
            word,
            status: 'unselected'
          });
        });
      });
    });

    set(viewAtom, 'all');
  });

  return resetApp;
};

export default useResetApp;
