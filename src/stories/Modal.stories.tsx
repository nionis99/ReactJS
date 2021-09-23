import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ModalView from 'components/ModalView';

export default {
  title: 'Components',
  component: ModalView,
} as ComponentMeta<typeof ModalView>;

const Template: ComponentStory<typeof ModalView> = (args) => <ModalView {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  title: 'Title',
  children: 'Content',
  close: true,
};
