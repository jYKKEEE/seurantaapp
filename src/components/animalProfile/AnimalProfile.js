import React from 'react';
import { useParams } from 'react-router-dom';
import DataForm from '../forms/DataForm/DataForm';

const AnimalProfile = (props) => {
  const { data, addToAnimals, selects, states } = props;
  const { id } = useParams();
  return (
    <div className='text-xl text-white'>
      <h1>Profile</h1>
      <DataForm
        id={id}
        data={data}
        addToAnimals={addToAnimals}
        selects={selects}
        states={states}
      />
    </div>
  );
};
export default AnimalProfile;
