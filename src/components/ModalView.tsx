import React, { HTMLAttributes } from 'react';
import XIcon from '../assets/icons/x.svg';
import cx from 'classnames';

const absoluteCenter = 'absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4';

const modalSizes = {
  default: 'h-auto w-auto',
  large: 'h-2/3 w-2/3',
  medium: 'h-1/2 w-1/2',
  small: 'h-1/3 w-1/3',
};

type ModalSize = keyof typeof modalSizes;

interface ModalViewProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  title?: string;
  close?: boolean;
  size?: ModalSize;
}

const ModalView = ({
  children,
  title,
  onClose,
  close = false,
  size = 'default',
  className = '',
  ...restProps
}: ModalViewProps) => (
  <div
    className={cx('p-4 bg-content text-white rounded shadow-modal', absoluteCenter, modalSizes[size], className)}
    {...restProps}
  >
    {close && (
      <div className="flex items-center w-full">
        <XIcon className="ml-auto justify-end w-6 h-6 cursor-pointer" onClick={onClose} />
      </div>
    )}
    <div className="flex-col justify-center items-center px-14 py-2 w-full h-full">
      {!!title && <div className="flex w-full text-4xl text-white text-left font-medium uppercase">{title}</div>}
      <div className={cx('flex justify-center items-center m-auto h-full', { 'mt-4': !!title })}>{children}</div>
    </div>
  </div>
);

export default ModalView;
