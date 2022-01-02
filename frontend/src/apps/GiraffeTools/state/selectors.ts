import { selectorFamily } from 'recoil';
import { viewAtom } from './atoms';
import {
  sectionAtomFamily,
  cardAtomFamily,
  wordButtonAtomFamily
} from './atomFamilies';

export const isButtonDisplayedSelector = selectorFamily<boolean, string>({
  key: 'isButtonDisplayed',
  get:
    wordButtonId =>
    ({ get }) => {
      const { status } = get(wordButtonAtomFamily(wordButtonId));
      const view = get(viewAtom);
      return (
        view === status ||
        view === 'all' ||
        (view === 'selected' && status !== 'unselected')
      );
    }
});

export const isCardDisplayedSelector = selectorFamily<
  boolean,
  { cardId: string; sectionId: string }
>({
  key: 'isCardDisplayed',
  get:
    ({ cardId }) =>
    ({ get }) => {
      const { wordButtonIds } = get(cardAtomFamily(cardId));
      return wordButtonIds.some(buttonId =>
        get(isButtonDisplayedSelector(buttonId))
      );
    }
});

export const isSectionDisplayedSelector = selectorFamily<boolean, string>({
  key: 'isSectionDisplayed',
  get:
    sectionId =>
    ({ get }) => {
      const { cardIds } = get(sectionAtomFamily(sectionId));
      return cardIds.some(cardId =>
        get(isCardDisplayedSelector({ sectionId, cardId }))
      );
    }
});
