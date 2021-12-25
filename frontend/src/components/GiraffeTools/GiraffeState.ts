import { atom, atomFamily, selectorFamily } from 'recoil';

type AppState = {
  user: string;
  sectionIds: string[];
};

type ControlState = {
  hideUnselected: boolean;
};

type SectionState = {
  sectionDisplayName: string;
  visible: boolean;
  modes: string[];
  cardIds: string[];
};

type CardState = {
  buttonIds: string[];
};

type ButtonState = {
  word: string;
  status: string;
};

export const appStateAtom = atom<AppState>({
  key: 'appState',
  default: {
    user: '',
    sectionIds: []
  }
});

export const controlStateAtom = atom<ControlState>({
  key: 'controlState',
  default: {
    hideUnselected: false
  }
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
    buttonIds: []
  }
});

export const hideCardSelector = selectorFamily<
  boolean,
  { cardId: string; sectionId: string }
>({
  key: 'hideCard',
  get:
    ({ cardId, sectionId }) =>
    ({ get }) => {
      const { buttonIds } = get(cardAtomFamily(cardId));
      const { hideUnselected } = get(controlStateAtom);
      const buttonStatuses = buttonIds.map(
        buttonId => get(buttonAtomFamily(buttonId)).status
      );

      return (
        buttonStatuses.every(status => status === 'unselected') &&
        hideUnselected
      );
    }
});

export const buttonAtomFamily = atomFamily<ButtonState, string>({
  key: 'buttons',
  default: {
    word: '',
    status: 'unselected'
  }
});
