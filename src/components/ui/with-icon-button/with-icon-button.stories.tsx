import { ComponentMeta, ComponentStory } from '@storybook/react';
import ShareFileSvg from 'components/svg/share-file-svg';

import WithIconButton from './';

export default {
  title: 'WithIconButton',
  component: WithIconButton,
} as ComponentMeta<typeof WithIconButton>;

const Template: ComponentStory<typeof WithIconButton> = (args) => (
  <WithIconButton {...args}>{args.children}</WithIconButton>
);

export const Default = Template.bind({});
Default.args = {
  name: 'I am button',
  outlined: true,
  children: <ShareFileSvg />,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  name: 'I am button',
  outlined: true,
};

export const ListItem = Template.bind({});
ListItem.args = {
  name: 'Do this',
  children: <ShareFileSvg />,
  textJustifyContentProperty: 'flex-start',
  gap: '20px',
};
