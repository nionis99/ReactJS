import React, { HTMLAttributes, useState } from 'react';
import AppLogo from 'components/Logo';
import Button from 'components/Button';

const SearchHeader = ({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
        <form className="flex mt-9">
          <input
            className="flex rounded p-4 text-lg w-full bg-gray80 opacity-60 focus:outline-none"
            name="search"
            onInput={(e) => setSearchValue(e.currentTarget.value)}
            placeholder="What do you want to watch?"
          />
          <Button
            className="flex ml-2 transform uppercase"
            title="Search"
            variant="primary"
            type="submit"
            size="large"
            onClick={onSubmit}
          />
        </form>
      </div>
    </header>
  );
};

export default SearchHeader;
