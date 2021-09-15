import React, { HTMLAttributes } from 'react';

const Content = ({ className = '', ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex items-center justify-center bg-background w-full h-screen text-white ${className}`}
    {...restProps}
  >
    This is content
  </div>
);

export default Content;
