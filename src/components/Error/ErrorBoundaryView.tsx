import React from 'react';
import Landing from '../Layout/Landing';
import Modal from '../Modal';
import RefreshIcon from '../../assets/icons/refresh.svg';

interface Props {
  onRefresh: () => void;
}

const ErrorBoundaryView = ({ onRefresh }: Props) => (
  <Landing>
    <Modal title="Something wrong">
      <div className="flex cursor-pointer bg-primary rounded-full p-5">
        <RefreshIcon className="w-20 h-20" onClick={onRefresh} />
      </div>
    </Modal>
  </Landing>
);

export default ErrorBoundaryView;