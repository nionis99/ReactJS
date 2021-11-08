import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchHeader from 'layout/SearchHeader';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/Layout',
  component: SearchHeader,
} as ComponentMeta<typeof SearchHeader>;

const Template: ComponentStory<typeof SearchHeader> = (args) => (
  <BrowserRouter>
    <SearchHeader {...args} />
  </BrowserRouter>
);

export const HeaderWithSearch = Template.bind({});
HeaderWithSearch.args = {};
