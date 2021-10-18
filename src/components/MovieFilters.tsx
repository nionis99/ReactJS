import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import ArrowDown from 'assets/icons/arrowDown.svg';
import { sortOptions } from '../../__mocks__/data';
import useMoviePageContext from 'contexts/MoviePageProvider';

const defaultTabClassName =
  'text-white p-1 md:p-5 cursor-pointer hover:text-primary focus:outline-none uppercase font-medium border-b-2';

const MovieFilters = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const { setFilter, setSortBy, sortBy, filter } = useMoviePageContext();
  console.log(filter, sortBy);
  const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const onFilterClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const selectedFilter = event.currentTarget.innerText[0] + event.currentTarget.innerText.substring(1).toLowerCase();
    selectedFilter === 'All' ? setFilter(null) : setFilter(selectedFilter);
  };

  return (
    <nav className={cx('flex flex-row overflow-auto', className)}>
      <span
        className={cx(defaultTabClassName, !filter ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        All
      </span>
      <span
        className={cx(defaultTabClassName, filter === 'Documentary' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        Documentary
      </span>
      <span
        className={cx(defaultTabClassName, filter === 'Comedy' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        Comedy
      </span>
      <span
        className={cx(defaultTabClassName, filter === 'Horror' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        Horror
      </span>
      <span
        className={cx(defaultTabClassName, filter === 'Crime' ? 'border-primary text-primary' : 'text-white')}
        onClick={onFilterClick}
      >
        Crime
      </span>
      <span className="cursor-default mx-auto w-full border-b-2" />
      <span className="text-white p-1 md:p-5 uppercase font-normal border-b-2 text-opacity-50 whitespace-nowrap">
        Sort by
      </span>
      <div className="relative">
        <select
          className="appearance-none w-auto bg-transparent text-white p-1 md:p-5 pr-4 border-b-2 font-medium
          focus:outline-none truncate cursor-pointer"
          onChange={onSortChange}
          defaultValue={sortBy || 'genres'}
        >
          {sortOptions.map((sortOption, index) => (
            <option key={index} value={sortOption.value}>
              {sortOption.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 -right-2 flex items-center px-2 text-gray-700">
          <ArrowDown className="fill-current h-3 w-3" />
        </div>
      </div>
    </nav>
  );
};

export default MovieFilters;
