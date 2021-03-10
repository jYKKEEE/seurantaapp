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
        <AddRemove
          list={notes}
          text='havainto'
          inputName='note'
          selectName='notes'
          register={register}
        />
        {/* SIJAINNIT DROPDOWN */}
        <AddRemove
          list={animalLocations}
          text='sijainti'
          inputName='newAnimalLocation'
          selectName='location'
          register={register}
        />
      </form>
    </div>
  );
};

const AddRemove = (props) => {
  const { list, text, register, inputName, selectName } = props;
  return (
    <div>
      <DropdownButton text={`Lisää/poista ${text}`} labelText=''>
        <div className='flex flex-col justify-between items-start pb-3 font-mono text-lg'>
          <div className='flex items-end text-white '>
            <label htmlFor='location' className='flex flex-col'>
              Poista valinta:
              <select
                name={selectName}
                className=' shadow-xl text-black rounded w-52 mr-12'
                ref={register}
              >
                {list.map((obj, index) => (
                  <option
                    key={index}
                    className='text-base font-mono text-black'
                  >
                    {obj}
                  </option>
                ))}
              </select>
            </label>
            <TrashCan
              onClick={() => {
                confirm('poistetaanko');
              }}
            />
          </div>
          <div className=' pb-3'>
            <label htmlFor='note' className='flex flex-col text-white '>
              Lisää uusi {text}:
              <input
                type='text'
                name={inputName}
                placeholder={`Lisää ${text} listalle`}
                ref={register}
                required
                className='text-black text-lg rounded font-mono w-52'
              />
            </label>
          </div>

          <Button primary type='submit'>
            Lisää
          </Button>
        </div>
      </DropdownButton>
    </div>
  );
};

export default Settings;
