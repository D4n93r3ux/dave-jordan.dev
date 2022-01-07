import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ControlsComponent from './Controls';

export default {
  title: 'Giraffe Tools/Molecules/Controls',
  component: ControlsComponent
} as ComponentMeta<typeof ControlsComponent>;

export const Controls: ComponentStory<typeof ControlsComponent> = args => (
  <ControlsComponent view='all' cycleView={() => {}} resetButtons={() => {}} />
);
