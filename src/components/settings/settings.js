/* eslint-disable no-unused-vars */
import Button from '../shared/button';
import React from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from '../shared/DropdownButton';
const Settings = (props) => {
  const { addToNotes, animalLocations, notes, addToAnimalLocations } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      newAnimalLocation: 'Lisää uusi sijainti:',
      newNote: 'Lisää uusi havainto:',
    },
  });

  const onSubmit = (newData) => {
    console.log(newData.newNote);
    addToNotes(notes.concat(newData.newNote));
    // alert('added new note ' + newData.note);
    // addToAnimalLocations(newData.newAnimalLocation);
  };

  return (
    <div>
      <h1 className='text-2xl text-white'>settings</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* HAVAINNOT DROPDOWN */}
        <DropdownButton
          text='Lisää uusia havaintoja'
          labelText='Havainnot lista:'
        >
          <div className='flex flex-col pb-2'>
            <select
              name='notes'
              className='text-black rounded  w-52  py-0 px-9'
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
          </div>
          <input
            type='text'
            name='newNote'
            ref={register()}
            required
            className='text-black text-xl font-mono w-52 pr-2'
          />
          <Button primary className='h-8' type='submit'>
            Lisää
          </Button>
        </DropdownButton>

        {/* SIJAINNIT DROPDOWN */}
        <DropdownButton
          text='Lisää uusia sijainteja:'
          labelText='Sijainnit lista:'
        >
          <div className='flex flex-col pb-2'>
            <select
              name='location'
              className=' shadow-xl text-black rounded w-52  px-9'
              ref={register}
            >
              {animalLocations.map((animalLocation, index) => (
                <option key={index} className='text-base font-mono text-black'>
                  {animalLocation}
                </option>
              ))}
            </select>
          </div>
          <input
            type='text'
            name='newAnimalLocation'
            ref={register()}
            required
            className='text-black text-xl font-mono w-52'
          />
          <Button primary className='h-8' type='submit'>
            Lisää
          </Button>
        </DropdownButton>
      </form>
    </div>
  );
};
export default Settings;
