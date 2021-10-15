import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import ArrowDown from 'assets/icons/arrowDown.svg';
import { sortOptions } from '../../__mocks__/data';

const defaultTabClassName =
  'text-white p-1 md:p-5 cursor-pointer hover:text-primary focus:outline-none uppercase font-medium border-b-2';

// TODO : Nav links || Filtering
const MovieFilters = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <nav className={cx('flex flex-row overflow-auto', className)}>
    {/*Active*/}
    <span className={cx(defaultTabClassName, 'border-primary')}>All</span>
    <span className={defaultTabClassName}>Documentary</span>
    <span className={defaultTabClassName}>Comedy</span>
    <span className={defaultTabClassName}>Horror</span>
    <span className={defaultTabClassName}>Crime</span>
    <span className="cursor-default mx-auto w-full border-b-2" />
    <span className="text-white p-1 md:p-5 uppercase font-normal border-b-2 text-opacity-50 whitespace-nowrap">
      Sort by
    </span>
    <div className="relative w-96">
      <select
        className="appearance-none w-auto bg-transparent text-white p-1 md:p-5 pr-4 border-b-2 font-medium
          focus:outline-none truncate cursor-pointer"
      >
        {sortOptions.map((sortOption, index) => (
          <option key={index}>{sortOption}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 -right-2 flex items-center px-2 text-gray-700">
        <ArrowDown className="fill-current h-3 w-3" />
      </div>
    </div>
  </nav>
);

export default MovieFilters;
