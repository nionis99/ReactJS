import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from 'components/Layout/Footer';

export default {
  title: 'Components',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const FooterWithLogo = Template.bind({});
FooterWithLogo.args = {
  className: 'bg-footer',
};
