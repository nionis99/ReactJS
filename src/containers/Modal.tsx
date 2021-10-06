import React, { HTMLAttributes, useCallback, useEffect } from 'react';
import ModalView from 'components/Modals/ModalView';

const modalSizes = {
  default: 'h-auto w-auto',
  large: 'h-2/3 w-2/3',
  medium: 'h-1/2 w-1/2',
  small: 'h-1/3 w-1/3',
};

type ModalSize = keyof typeof modalSizes;

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  title?: string;
  close?: boolean;
  size?: ModalSize;
}

const Modal = ({ isOpen, children, onClose, close = false, size = 'default', ...modalProps }: ModalProps) => {
  const onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onEscape, false);

      return () => {
        document.removeEventListener('keydown', onEscape, false);
      };
    }
  }, [isOpen, onEscape]);

  if (!isOpen) return null;

  return (
    <ModalView onClose={onClose} isOpen={isOpen} close={close} size={size} {...modalProps}>
      {children}
    </ModalView>
  );
};

export default Modal;
