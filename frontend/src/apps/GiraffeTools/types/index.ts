export type SetButtonStatusFunction = ({
  sectionIndex,
  cardIndex,
  wordButtonIndex,
  newStatus
}: {
  sectionIndex: number;
  cardIndex: number;
  wordButtonIndex: number;
  newStatus: string;
}) => void;

export type WordButtonData = {
  word: string;
  status: string;
};

export type CardData = {
  cardDisplayName: string;
  wordButtonData: WordButtonData[];
};

export type SectionData = {
  sectionType: string;
  sectionDisplayName: string;
  modes: string[];
  cardData: CardData[];
};

export type AppData = {
  user: string;
  sectionData: SectionData[];
};
