import WordButton from './WordButton';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/WordButton',
  component: WordButton
} as ComponentMeta<typeof WordButton>;

const Template: ComponentStory<typeof WordButton> = args => (
  <WordButton {...args} />
);

// export const FeelingMetNeed = Template.bind({});
// FeelingMetNeed.args = {
//   variant: 'unselected',
//   modes: ['unselected', 'met'],
//   children: 'comfortable'
// };

// export const FeelingUnmetNeed = Template.bind({});
// FeelingUnmetNeed.args = {
//   variant: 'unselected',
//   modes: ['unselected', 'unmet'],
//   children: 'agitated'
// };

// export const Need = Template.bind({});
// Need.args = {
//   variant: 'unselected',
//   modes: ['unselected', 'met', 'unmet'],
//   children: 'affection'
// };
