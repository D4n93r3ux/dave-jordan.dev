import rawData from './words.json';

type RawCardData = { cardId: string; words: string[] }[];

const createSection = ({
  sectionId,
  sectionDisplayName,
  modes,
  rawCardData
}: {
  sectionId: string;
  sectionDisplayName: string;
  modes: string[];
  rawCardData: RawCardData;
}) => {
  return {
    sectionId,
    sectionDisplayName,
    modes,
    cardData: rawCardData.map(({ cardId, words }) => {
      return {
        cardId,
        wordData: words.map(word => ({ word, status: 'unselected' })),
        visible: true
      };
    }),
    visible: true
  };
};

const testData = {
  user: 'testUser',
  hideUnselected: false,
  sections: [
    createSection({
      sectionId: 'feelingsMetNeeds',
      sectionDisplayName: 'Feelings: Met Needs',
      modes: ['unselected', 'met'],
      rawCardData: rawData.feelings.metNeeds
    }),
    createSection({
      sectionId: 'feelingsUnmetNeeds',
      sectionDisplayName: 'Feelings: Unmet Needs',
      modes: ['unselected', 'unmet'],
      rawCardData: rawData.feelings.unmetNeeds
    }),
    createSection({
      sectionId: 'needs',
      sectionDisplayName: 'Needs',
      modes: ['unselected', 'met', 'unmet'],
      rawCardData: rawData.needs
    })
  ]
};

export default testData;
