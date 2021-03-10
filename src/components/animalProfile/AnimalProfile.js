/* eslint-disable indent */
import React from 'react';
import { useParams } from 'react-router-dom';
import DataForm from '../forms/DataForm';
import DisplayBox from './displayBox/DisplayBox';

const AnimalProfile = (props) => {
  const { data, addToAnimals, notes, states, animalLocations } = props;
  const { id } = useParams();

  return (
    <div className='text-xl text-white'>
      <div className='flex justify-center items-center text-4xl font-mono font-semibold text-red-700 pb-3'>
        Animal{' '}
        {id === 'profile' ? id : <p className='text-green-500 pl-4'>{id}</p>}
      </div>

      <DataForm
        animalLocations={animalLocations}
        id={id}
        data={data}
        addToAnimals={addToAnimals}
        notes={notes}
        states={states}
      />
      <DisplayBox data={data} id={id} addToAnimals={addToAnimals} />
    </div>
  );
};
export default AnimalProfile;
