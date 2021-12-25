import WordCard from './WordCard';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import testData from '../testData';

export default {
  title: 'GiraffeTools/Molecules/WordCard',
  component: WordCard
} as ComponentMeta<typeof WordCard>;

const Template: ComponentStory<typeof WordCard> = args => (
  <WordCard {...args} />
);

const feelingsMetNeeds = testData.sections[0];
const feelingsUnmetNeeds = testData.sections[1];
const needs = testData.sections[2];

// export const FeelingsMetNeeds = Template.bind({});
// {
//   const { cardId: category, wordData } = feelingsMetNeeds.cardData[0];
//   FeelingsMetNeeds.args = {
//     category,
//     wordData,
//     modes: ['unselected', 'met'],
//     sectionType: 'feelingsMetNeeds'
//   };
// }

// export const FeelingsUnmetNeeds = Template.bind({});
// {
//   const { cardId: category, wordData } = feelingsUnmetNeeds.cardData[0];
//   FeelingsUnmetNeeds.args = {
//     category,
//     wordData,
//     modes: ['unselected', 'unmet'],
//     sectionType: 'feelingsUnmetNeeds'
//   };
// }

// export const Needs = Template.bind({});
// {
//   const { cardId: category, wordData } = needs.cardData[0];
//   Needs.args = {
//     category,
//     wordData,
//     modes: ['unselected', 'met', 'unmet'],
//     sectionType: 'needs'
//   };
// }
