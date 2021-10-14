import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Movie } from 'reducers/movieReducers/types';
import Input from 'components/Input';
import SelectInput from 'components/SelectInput';
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
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<IMovieForm>({
    resolver: yupResolver(MovieFormSchema),
    defaultValues: { ...movie, runtime: movie?.runtime.toString(), vote_average: movie?.vote_average.toString() },
  });

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
        <SelectInput
          control={control}
          className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
          label="Genre"
          getValues={getValues}
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
          <label className="block uppercase tracking-wide text-xs font-bold mb-2 upper-case text-primary">
            Overview
          </label>
          <textarea
            defaultValue={movie?.overview}
            className="appearance-none w-full bg-gray80 border-gray80 text-white border rounded py-2 px-4 mb-3
            leading-tight focus:outline-none focus:border-gray-200 resize-none"
            placeholder="Movie description"
            {...register('overview')}
            rows={6}
          />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <Button title="Reset" className="ml-auto mr-4" variant="outline-primary" size="medium" onClick={() => reset} />
        <Button title={movie ? 'Edit' : 'Submit'} variant="primary" size="medium" type="submit" />
      </div>
    </form>
  );
};

const MovieFormSchema = Yup.object().shape({
  genres: Yup.array().min(1, 'Select at least one'),
});

export default MovieForm;

//import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers";
// import { FormHelperText, FormControl } from "@material-ui/core";
//
// const genres = ["Comedy", "Drama", "Action"];
//
// export const Schema = Yup.object().shape({
//   genres: Yup.array().min(1, "Select at least one")
// });
//
// export default function CheckboxesGroup() {
//   const defaultGenres = ["Comedy"];
//
//   const { control, handleSubmit, getValues, errors } = useForm({
//     resolver: yupResolver(Schema),
//     defaultValues: { genres: defaultGenres }
//   });
//
//   const handleCheck = genre => {
//     const { genres } = getValues();
//     const newGenres = genres?.includes(genre)
//       ? genres?.filter(selectedGenre => selectedGenre !== genre)
//       : [...(genres ?? []), genre];
//     return newGenres;
//   };
//
//   return (
//     <form onSubmit={handleSubmit(data => console.log("data", data.genres))}>
//       <FormControl error={!!errors.genres?.message}>
//         <FormHelperText>{errors.genres?.message}</FormHelperText>
//         <Controller
//           name="genres"
//           render={props =>
//             genres.map((genre, index) => (
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     onChange={() => props.onChange(handleCheck(genre))}
//                     defaultChecked={defaultGenres.includes(genre)}
//                   />
//                 }
//                 key={index}
//                 label={genre}
//               />
//             ))
//           }
//           control={control}
//         />
//       </FormControl>
//       <pre>SELECTED: {JSON.stringify(getValues(), null, 2)}</pre>
//       <button>Submit</button>
//     </form>
//   );
// }
