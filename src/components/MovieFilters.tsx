import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

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
    <span className={cx(defaultTabClassName, 'whitespace-nowrap')}>Release date</span>
  </nav>
);

export default MovieFilters;
