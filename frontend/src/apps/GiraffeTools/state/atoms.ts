import { atom } from 'recoil';

type AppState = {
  user: string;
  sectionIds: string[];
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
