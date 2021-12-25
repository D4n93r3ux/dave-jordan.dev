import WordSection from './WordSection';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import testData from '../testData';

export default {
  title: 'Organisms/WordSection',
  component: WordSection
} as ComponentMeta<typeof WordSection>;

const Template: ComponentStory<typeof WordSection> = args => (
  <WordSection {...args} />
);

// export const FeelingsMetNeeds = Template.bind({});
// {
//   const {
//     sectionType,
//     sectionDisplayName,
//     cardData: categories,
//     modes
//   } = testData.sections[0];
//   FeelingsMetNeeds.args = {
//     sectionType,
//     sectionDisplayName,
//     categories,
//     modes
//   };
// }

// export const FeelingsUnmetNeeds = Template.bind({});
// {
//   const {
//     sectionType,
//     sectionDisplayName,
//     cardData: categories,
//     modes
//   } = testData.sections[1];
//   FeelingsUnmetNeeds.args = {
//     sectionType,
//     sectionDisplayName,
//     categories,
//     modes
//   };
// }

// export const Needs = Template.bind({});
// {
//   const {
//     sectionType,
//     sectionDisplayName,
//     cardData: categories,
//     modes
//   } = testData.sections[2];
//   Needs.args = {
//     sectionType,
//     sectionDisplayName,
//     categories,
//     modes
//   };
// }
