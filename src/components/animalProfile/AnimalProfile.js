import React from 'react';
import { useParams } from 'react-router-dom';
import DataForm from '../forms/DataForm/DataForm';

const AnimalProfile = (props) => {
  const { data, addToAnimals, notes, states, animalLocations } = props;
  const { id } = useParams();
  return (
    <div className='text-xl text-white'>
      <h1>Animal Profile: </h1>
      <DataForm
        animalLocations={animalLocations}
        id={id}
        data={data}
        addToAnimals={addToAnimals}
        notes={notes}
        states={states}
      />
    </div>
  );
};
export default AnimalProfile;
