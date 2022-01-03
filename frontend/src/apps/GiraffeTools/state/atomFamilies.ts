import { atomFamily } from 'recoil';

export type SectionState = {
  sectionDisplayName: string;
  modes: string[];
  cardIds: string[];
};

export type CardState = {
  wordButtonIds: string[];
};

export type WordButtonState = {
  word: string;
  status: string;
};

export const sectionAtomFamily = atomFamily<SectionState, string>({
  key: 'sections',
  default: {
    sectionDisplayName: '',
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

export const wordButtonAtomFamily = atomFamily<WordButtonState, string>({
  key: 'wordButtons',
  default: {
    word: '',
    status: 'unselected'
  }
});
