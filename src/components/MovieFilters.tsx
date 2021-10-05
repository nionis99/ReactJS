import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import ArrowDown from 'assets/icons/arrowDown.svg';

const defaultTabClassName =
  'text-white p-5 cursor-pointer hover:text-primary focus:outline-none transform uppercase font-medium border-b-2';

// TODO : Nav links || Filtering
const MovieFilters = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <nav className={cx('flex flex-row', className)}>
    {/*Active*/}
    <span className={cx(defaultTabClassName, 'border-primary')}>All</span>
    <span className={defaultTabClassName}>Documentary</span>
    <span className={defaultTabClassName}>Comedy</span>
    <span className={defaultTabClassName}>Horror</span>
    <span className={defaultTabClassName}>Crime</span>
    <span className="cursor-default mx-auto w-full border-b-2" />
    <span className="text-white p-5 transform font-normal uppercase border-b-2 text-opacity-50 whitespace-nowrap ">
      Sort by
    </span>
    <span className={cx(defaultTabClassName, 'flex flex-row whitespace-nowrap')}>
      Release date
      <ArrowDown className="h-full justify-center align-center w-3 h-3 ml-3" />
    </span>
  </nav>
);

export default MovieFilters;
