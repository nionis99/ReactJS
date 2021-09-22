import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from 'containers/Modal';

export default {
  title: 'Components',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  title: 'Title',
  children: 'Content',
  close: true,
};
