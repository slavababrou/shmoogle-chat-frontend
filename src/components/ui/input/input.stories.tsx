import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchSvg from 'components/svg/search-svg';

import Input from './';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ width: '200px' }}>
    <Input {...args} value={args.value || ''}>
      {args.children}{' '}
    </Input>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  placeholder: 'I am input',
};

export const WithLengthIndicator = Template.bind({});
WithLengthIndicator.args = {
  placeholder: 'I am input',
  maxLength: 64,
  isLengthIndicator: true,
};

export const WithContent = Template.bind({});
WithContent.args = {
  placeholder: 'I am input',
  children: <SearchSvg />,
};
