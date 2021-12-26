import { atom, atomFamily, selectorFamily } from 'recoil';

type AppState = {
  user: string;
  sectionIds: string[];
};

type SectionState = {
  sectionDisplayName: string;
  visible: boolean;
  modes: string[];
  cardIds: string[];
};

type CardState = {
  wordButtonIds: string[];
};

type WordButtonState = {
  word: string;
  status: string;
};

export const appAtom = atom<AppState>({
  key: 'app',
  default: {
    user: '',
    sectionIds: []
  }
});

export const viewAtom = atom<string>({
  key: 'controls',
  default: 'all'
});

export const sectionAtomFamily = atomFamily<SectionState, string>({
  key: 'sections',
  default: {
    sectionDisplayName: '',
    visible: true,
    modes: [],
    cardIds: []
  }
});

export const cardAtomFamily = atomFamily<CardState, string>({
  key: 'cards',
  default: {
    wordButtonIds: []
  }
});

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

export const hideCardSelector = selectorFamily<
  boolean,
  { cardId: string; sectionId: string }
>({
  key: 'hideCard',
  get:
    ({ cardId }) =>
    ({ get }) => {
      const { wordButtonIds } = get(cardAtomFamily(cardId));
      const buttonsDisplayed = wordButtonIds.map(buttonId =>
        get(isButtonDisplayedSelector(buttonId))
      );

      return buttonsDisplayed.every(isDisplayed => !isDisplayed);
    }
});

export const hideSectionSelector = selectorFamily<boolean, string>({
  key: 'hideSection',
  get:
    sectionId =>
    ({ get }) => {
      const { cardIds } = get(sectionAtomFamily(sectionId));
      const cardsHidden = cardIds.map(cardId =>
        get(hideCardSelector({ sectionId, cardId }))
      );

      return cardsHidden.every(isHidden => isHidden);
    }
});

export const wordButtonAtomFamily = atomFamily<WordButtonState, string>({
  key: 'wordButtons',
  default: {
    word: '',
    status: 'unselected'
  }
});
