import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Landing from 'layout/Landing';

export default {
  title: 'Components/layout',
  component: Landing,
} as ComponentMeta<typeof Landing>;

const Template: ComponentStory<typeof Landing> = (args) => <Landing {...args} />;

export const LandingPresentational = Template.bind({});
LandingPresentational.args = {};
