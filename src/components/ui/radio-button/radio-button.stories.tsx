import { ComponentMeta, ComponentStory } from '@storybook/react';

import RadioButton from './';

export default {
  title: 'RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <>
    <RadioButton {...args} name="name">
      {args.children}
    </RadioButton>
    <br></br>
    <RadioButton {...args} name="name">
      {args.children}
    </RadioButton>
  </>
);
export const Default = Template.bind({});
Default.args = {
  children: 'Switch this',
};
