import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from 'components/Layout/Header';

export default {
  title: 'Components',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderContainer = Template.bind({});
HeaderContainer.args = {
  children: <div>Test</div>,
  className: 'flex justify-center items-center w-full h-full bg-background text-white',
};