import rawData from './words.json';

type RawCardData = { cardDisplayName: string; words: string[] }[];

const createSection = ({
  sectionType,
  sectionDisplayName,
  modes,
  rawCardData
}: {
  sectionType: string;
  sectionDisplayName: string;
  modes: string[];
  rawCardData: RawCardData;
}) => {
  return {
    sectionType,
    sectionDisplayName,
    modes,
    cardData: rawCardData.map(({ cardDisplayName, words }) => {
      return {
        cardDisplayName,
        wordButtonData: words.map(word => ({ word, status: 'unselected' }))
      };
    })
  };
};

const testData = {
  user: 'testUser',
  sectionData: [
    createSection({
      sectionType: 'feelingsMetNeeds',
      sectionDisplayName: 'Feelings: Met Needs',
      modes: ['unselected', 'met'],
      rawCardData: rawData.feelings.metNeeds
    }),
    createSection({
      sectionType: 'feelingsUnmetNeeds',
      sectionDisplayName: 'Feelings: Unmet Needs',
      modes: ['unselected', 'unmet'],
      rawCardData: rawData.feelings.unmetNeeds
    }),
    createSection({
      sectionType: 'needs',
      sectionDisplayName: 'Needs',
      modes: ['unselected', 'met', 'unmet'],
      rawCardData: rawData.needs
    })
  ]
};

export default testData;
