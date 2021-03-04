/* eslint-disable no-unused-vars */
import Button from '../shared/button';
import React from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from '../shared/DropdownButton';
const Settings = (props) => {
  const { addToNotes, animalLocations, notes, addToAnimalLocations } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (newData) => {
    console.log(newData);
    if (newData.note) {
      addToNotes(newData);
    }
    if (newData.newAnimalLocation) {
      addToAnimalLocations(newData);
    }
  };

  return (
    <div>
      <h1 className='text-2xl text-white'>settings</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* HAVAINNOT DROPDOWN */}
        <DropdownButton text='Lisää/poista havaintoja' labelText=''>
          <div className='flex flex-col justify-center items-center pb-2'>
            <select
              name='notes'
              className='text-black rounded w-52'
              placeholder='havainnot'
            >
              {notes.map((selection, index) =>
                selection === 'Valitse' ? (
                  <option
                    key={index}
                    className=' shadow-xl text-black px-9'
                    disabled
                  >
                    {selection}
                  </option>
                ) : (
                  <option
                    key={index}
                    className='text-base font-mono text-black'
                  >
                    {selection}
                  </option>
                )
              )}
            </select>
            <div className='pt-4 pb-3'>
              <input
                type='text'
                name='note'
                placeholder='Lisää havaintoja listalle:'
                ref={register()}
                required
                className='text-black text-lg rounded font-mono w-52 pr-2'
              />
            </div>

            <Button primary type='submit'>
              Lisää
            </Button>
          </div>
        </DropdownButton>

        {/* SIJAINNIT DROPDOWN */}
        <DropdownButton text='Lisää/poista sijainteja' labelText=''>
          <div className='flex flex-col justify-center items-center pb-2'>
            <select
              name='location'
              className=' shadow-xl text-black rounded w-52'
              ref={register}
            >
              {animalLocations.map((animalLocation, index) => (
                <option key={index} className='text-base font-mono text-black'>
                  {animalLocation}
                </option>
              ))}
            </select>
            <div className='pt-4 pb-3'>
              <input
                type='text'
                name='newAnimalLocation'
                placeholder='Lisää sijainteja listalle:'
                ref={register}
                required
                className='text-black text-lg rounded font-mono w-52'
              />
            </div>

            <Button primary type='submit'>
              Lisää
            </Button>
          </div>
        </DropdownButton>
      </form>
    </div>
  );
};
export default Settings;
