import React, { HTMLAttributes, useState } from 'react';
import AppLogo from '../Logo';
import Button from '../Button';

const SearchHeader = ({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = () => {
    if (searchValue) alert(`Looking for: ${searchValue}`);
  };

  return (
    <header className={`flex-col h-96 bg-header py-5 px-16 text-white bg-cover ${className}`} {...rest}>
      <div className="flex w-full justify-between items-start">
        <AppLogo />
        <Button title="+ ADD MOVIE" variant="secondary" size="small" />
      </div>
      <div className="flex-col mx-16 my-11">
        <label className="flex text-5xl">FIND YOUR MOVIE</label>
        <div className="flex mt-9 ">
          <input
            className="flex rounded p-4 text-lg w-full bg-gray80 opacity-60"
            name="search"
            onInput={(e) => setSearchValue(e.currentTarget.value)}
            placeholder="What do you want to watch?"
          />
          <Button
            className="flex ml-2 transform uppercase"
            title="Search"
            variant="primary"
            size="large"
            onClick={onSubmit}
          />
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
