import React, { HTMLAttributes } from 'react';
import AppLogo from '../Logo';

const Footer = ({ className = '', ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <footer className={`flex items-center justify-center bg-footer w-full h-17.5 ${className}`} {...restProps}>
    <AppLogo />
  </footer>
);

export default Footer;
