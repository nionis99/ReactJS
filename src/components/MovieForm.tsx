import React, { useState } from 'react';
import * as Yup from 'yup';
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Movie } from 'reducers/movieReducers/types';
import GenresInput from 'components/GenresInput';
import Input from 'components/Input';
import Button from 'components/Button';
import { genres } from '../../__mocks__/data';

interface MovieFormProps<T> {
  movie?: T;
  onSubmit: (data: IMovieForm) => void;
}

export interface IMovieForm {
  id: number;
  title: string;
  poster_path: string;
  genres: string[];
  release_date: string;
  runtime: string;
  vote_average: string;
  overview: string;
}

const MovieForm = ({ movie, onSubmit }: MovieFormProps<Movie>) => {
  const defaultValues = {
    ...movie,
    genres: movie?.genres || [],
    runtime: movie?.runtime.toString(),
    vote_average: movie?.vote_average.toString(),
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<IMovieForm>({
    mode: 'all',
    resolver: yupResolver(MovieFormSchema),
    defaultValues,
  });

  const [selectedGenres, setSelectedGenres] = useState<string[]>(getValues().genres || []);
  const onReset = () => {
    setSelectedGenres(movie?.genres || []);
    reset(defaultValues);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Input
          className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
          label="Title"
          type="text"
          register={{ ...register('title') }}
          placeholder="Movie title"
          defaultValue={movie ? movie.title : ''}
          errorMessage={errors.title?.message}
        />
        <Input
          className="w-full sm:w-1/3 px-3"
          label="Release date"
          type="date"
          register={{ ...register('release_date') }}
          placeholder="Select Date"
          defaultValue={movie?.release_date}
          errorMessage={errors.release_date?.message}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Input
          className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
          label="Movie url"
          type="text"
          register={{ ...register('poster_path') }}
          placeholder="https://"
          defaultValue={movie?.poster_path}
          errorMessage={errors.poster_path?.message}
        />
        <Input
          className="w-full sm:w-1/3 px-3"
          label="Rating"
          type="number"
          register={{ ...register('vote_average') }}
          min="0"
          max="10"
          step="0.1"
          placeholder="7.8"
          defaultValue={movie?.vote_average}
          errorMessage={errors.vote_average?.message}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <GenresInput
          control={control}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
          label="Genre"
          getValues={getValues}
          errorMessage={(errors.genres as FieldError | undefined)?.message}
          options={genres}
        />
        <Input
          className="w-full sm:w-1/3 px-3 mb-6 md:mb-0"
          label="runtime"
          register={{ ...register('runtime') }}
          placeholder="minutes"
          type="number"
          step="1"
          min="1"
          defaultValue={movie?.runtime}
          errorMessage={errors.runtime?.message}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className={`block uppercase tracking-wide text-xs font-bold mb-2 upper-case ${
              errors.overview ? 'text-red-500' : 'text-primary'
            }`}
          >
            Overview
          </label>
          <textarea
            defaultValue={movie?.overview}
            className={`appearance-none w-full bg-gray80  ${
              errors.overview ? 'border-red-500' : 'border-gray80'
            } text-white border rounded py-2 px-4 mb-3
            leading-tight focus:outline-none focus:border-gray-200 resize-none`}
            placeholder="Movie description"
            {...register('overview')}
            rows={6}
          />
          {errors.overview && <p className="text-red-500 text-xs italic">{errors.overview.message}</p>}
        </div>
      </div>
      <div className="flex flex-row w-full">
        <Button
          title="Reset"
          className="ml-auto mr-4"
          variant="outline-primary"
          size="medium"
          type="reset"
          onClick={onReset}
        />
        <Button title={movie ? 'Edit' : 'Submit'} variant="primary" size="medium" />
      </div>
    </form>
  );
};

const MovieFormSchema = Yup.object().shape({
  genres: Yup.array().min(1, 'Select at least one'),
  title: Yup.string().required().max(40, 'Should be less then 40 characters'),
  poster_path: Yup.string().required('Url to the poster image is required'),
  runtime: Yup.number().typeError('runtime must be a number').positive('runtime must be greater than zero'),
  overview: Yup.string().required(),
});
export default MovieForm;
