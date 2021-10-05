import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeleteModal from 'components/DeleteConfirmationModal';

export default {
  title: 'Components',
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => <DeleteModal {...args} />;

export const DeleteConfirmationModal = Template.bind({});
DeleteConfirmationModal.args = {
  isOpen: true,
  title: 'Delete movie',
  description: 'Are you sure you want to delete this movie?',
};
