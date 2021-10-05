import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navigation from 'components/Navigation';

export default {
  title: 'Components',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = () => <Navigation />;

export const NavigationTabs = Template.bind({});
NavigationTabs.args = {};
