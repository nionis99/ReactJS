import React from 'react';
import RefreshIcon from 'assets/icons/refresh.svg';
import Landing from 'layout/Landing';
import Modal from 'containers/Modal';

interface Props {
  onRefresh: () => void;
}

const ErrorBoundaryView = ({ onRefresh }: Props) => (
  <Landing>
    <Modal title="Something wrong" isOpen={true}>
      <div className="flex cursor-pointer bg-primary rounded-full p-5">
        <RefreshIcon className="w-20 h-20" onClick={onRefresh} />
      </div>
    </Modal>
  </Landing>
);

export default ErrorBoundaryView;
