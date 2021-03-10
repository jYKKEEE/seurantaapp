/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../shared/button';
import DropdownButton from '../shared/dropdownButton';
import TrashCan from '../shared/icons/trashCan/TrashCan';

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
      <div className='flex justify-center items-center text-4xl font-mono font-semibold text-red-700 pb-3'>
        Settings
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* HAVAINNOT DROPDOWN */}
        <DropdownButton text='Lisää/poista havaintoja' labelText=''>
          <div className='flex flex-col justify-center items-center pb-2'>
            <div className='flex items-center'>
              <select
                name='notes'
                className='text-black rounded w-52 mr-8'
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

              <TrashCan
                className='text-red-700 hover:text-red-500'
                onClick={() => {
                  confirm('poistetaanko');
                }}
              />
            </div>
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
            <div className='flex justify-center items-center'>
              <select
                name='location'
                className=' shadow-xl text-black rounded w-52 mr-8'
                ref={register}
              >
                {animalLocations.map((animalLocation, index) => (
                  <option
                    key={index}
                    className='text-base font-mono text-black'
                  >
                    {animalLocation}
                  </option>
                ))}
              </select>
              <TrashCan
                onClick={() => {
                  confirm('poistetaanko');
                }}
              />
            </div>
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
