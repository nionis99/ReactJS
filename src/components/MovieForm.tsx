import React from 'react';
import Input from 'components/Input';
import SelectInput from 'components/SelectInput';
import Button from 'components/Button';
import { genres } from '../../__mocks__/data';

interface MovieFormProps {
  onSubmit: () => void;
  onReset: () => void;
}

const MovieForm = ({ onSubmit, onReset }: MovieFormProps) => {
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Input className="w-full sm:w-2/3 px-3 mb-6 md:mb-0" label="Title" type="text" placeholder="Movie title" />
        <Input className="w-full sm:w-1/3 px-3" label="Release date" type="date" placeholder="Select Date" />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Input className="w-full sm:w-2/3 px-3 mb-6 md:mb-0" label="Movie url" type="text" placeholder="https://" />
        <Input
          className="w-full sm:w-1/3 px-3"
          label="Rating"
          type="number"
          min="0"
          max="10"
          step="0.1"
          placeholder="7.8"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <SelectInput className="w-full sm:w-2/3 px-3 mb-6 md:mb-0" label="Genre" options={genres} />
        <Input
          className="w-full sm:w-1/3 px-3 mb-6 md:mb-0"
          label="runtime"
          placeholder="minutes"
          type="number"
          step="1"
          min="1"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-bold mb-2 upper-case text-primary">
            Overview
          </label>
          <textarea
            className="appearance-none w-full bg-gray80 border-gray80 text-white border rounded py-2 px-4 mb-3 
            leading-tight focus:outline-none focus:border-gray-200"
            name="overview"
            placeholder="Movie description"
            rows={6}
          />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <Button title="Reset" className="ml-auto mr-4" variant="outline-primary" size="medium" onClick={onReset} />
        <Button title="Submit" variant="primary" size="medium" type="submit" />
      </div>
    </form>
  );
};

export default MovieForm;
