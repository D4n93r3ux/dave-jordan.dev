import type { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './Navigation';

export default {
  title: 'GiraffeTools/Molecules/Navigation',
  component: NavBar
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = args => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
