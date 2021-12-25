import type { ComponentMeta, ComponentStory } from '@storybook/react';
import WordTool from './WordTool';

export default {
  title: 'GiraffeTools/Pages/WordTool',
  component: WordTool
} as ComponentMeta<typeof WordTool>;

const Template: ComponentStory<typeof WordTool> = args => (
  <WordTool {...args} />
);

export const Default = Template.bind({});
Default.args = {};
