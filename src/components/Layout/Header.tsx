import React, { HTMLAttributes } from 'react';
import AppLogo from 'components/Logo';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Header = ({ children, ...rest }: HeaderProps) => (
  <header {...rest}>
    <AppLogo />
    {children}
  </header>
);

export default Header;
