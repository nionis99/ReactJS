import React, { HTMLAttributes } from 'react';
import AppLogo from 'components/Logo';

const Footer = ({ className = '', ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <header className={`flex items-center justify-center bg-footer w-full h-17.5 ${className}`} {...restProps}>
    <AppLogo />
  </header>
);

export default Footer;
