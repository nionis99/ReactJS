import React, { useState } from 'react';
import { Control, Controller, UseFormGetValues } from 'react-hook-form';
import ArrowDown from 'assets/icons/arrowDown.svg';
import { IMovieForm } from 'components/MovieForm';
import cx from 'classnames';

interface SelectInputProps {
  control: Control<IMovieForm>;
  label: string;
  options: string[];
  getValues: UseFormGetValues<IMovieForm>;
  className?: string;
}

const SelectInput = ({ control, label, options, getValues, className }: SelectInputProps) => {
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(getValues().genres || []);

  const toggleGenreSelection = () => setIsOptionsShown((isShown) => !isShown);

  const handleCheck = (genre: string) => {
    const { genres } = getValues();
    const selectedGenres = genres?.includes(genre)
      ? genres.filter((selectedGenre) => selectedGenre !== genre)
      : [...(genres ?? []), genre];
    setSelectedGenres(selectedGenres);
    return selectedGenres;
  };

  return (
    <div className={className}>
      {label && <label className="block uppercase tracking-wide text-primary text-xs font-bold mb-2">{label}</label>}
      <div className="flex flex-row relative">
        <div
          className="flex flex-row appearance-none w-full bg-gray80 border border-gray80 text-white h-12 py-2 px-4
          rounded leading-tight focus:outline-none focus:border-gray-200 cursor-pointer"
          onClick={toggleGenreSelection}
        >
          <span className="flex items-center justify-start select-none">
            {selectedGenres.length > 0 ? selectedGenres.join(', ') : 'Select genre'}
          </span>
          <div className="flex ml-auto items-center">
            <ArrowDown
              className={cx('flex justify-end items-center fill-current h-3 w-3', {
                'transform rotate-180': isOptionsShown,
              })}
            />
          </div>
        </div>
        <Controller
          name="genres"
          control={control}
          render={({ field: { onChange } }) => (
            <ul
              className={cx(
                'absolute w-full right-0 top-10 py-1 mt-2 bg-white bg-content z-2 shadow-modal select-none',
                { hidden: !isOptionsShown },
              )}
            >
              {options.map((genre, index) => (
                <li key={index} className="flex flex-row text-white w-full">
                  <input
                    className="m-auto"
                    type="checkbox"
                    id={genre}
                    name={genre}
                    checked={getValues().genres?.includes(genre) || false}
                    onChange={() => onChange(handleCheck(genre))}
                  />
                  <label className="flex ml-2 px-4 py-2 w-full cursor-pointer" htmlFor={genre}>
                    {genre}
                  </label>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    </div>
  );
};

export default SelectInput;
