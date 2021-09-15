import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Landing from 'components/Layout/Landing';

export default {
  title: 'Components/Layout',
  component: Landing,
} as ComponentMeta<typeof Landing>;

const Template: ComponentStory<typeof Landing> = (args) => <Landing {...args} />;

export const LandingPresentational = Template.bind({});
LandingPresentational.args = {};
