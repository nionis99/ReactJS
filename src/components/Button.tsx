import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

const buttonVariants = {
  primary: `text-white bg-primary border-primary`,
};

type ButtonVariant = keyof typeof buttonVariants;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: ButtonVariant;
}

const Button = ({ title, variant, className = '', ...rest }: ButtonProps) => (
  <button
    className={cx('flex justify-center items-center rounder-lg border p-2', buttonVariants[variant], className)}
    {...rest}
  >
    {title}
  </button>
);

export default Button;
