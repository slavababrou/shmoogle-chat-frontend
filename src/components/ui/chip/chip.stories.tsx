import { ComponentMeta, ComponentStory } from '@storybook/react';

import Chip from './';
import image from 'assets/no-avatar.jpg';

export default {
  title: 'Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'I am button',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  name: 'I am button',
  imageSrc: 'n',
};

export const NoText = Template.bind({});
NoText.args = {
  imageSrc: image,
};
