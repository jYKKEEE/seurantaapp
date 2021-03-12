import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DataForm from '../forms/DataForm';
import TrashCan from '../shared/icons/trashCan/TrashCan';
import DisplayBox from './displayBox/DisplayBox';

const AnimalProfile = (props) => {
  const {
    addToAnimals,
    animalLocations,
    deleteAnimal,
    handleNotification,
    data,
    notes,
    states,
  } = props;
  const { id } = useParams();

  return (
    <div className='text-xl text-white'>
      <div className='flex justify-center items-center text-4xl font-mono font-semibold text-red-700 pb-3'>
        Eläin
        {id === 'profile' ? (
          <div className='pl-3'>profiili</div>
        ) : (
          <Link to='/'>
            <div
              className='text-green-500 pl-4 flex flex-row items-center'
              onClick={() => {
                deleteAnimal(id);
              }}
            >
              {id}
              <TrashCan />
            </div>
          </Link>
        )}
      </div>

      <DataForm
        addToAnimals={addToAnimals}
        animalLocations={animalLocations}
        data={data}
        handleNotification={handleNotification}
        id={id}
        notes={notes}
        states={states}
      />
      <DisplayBox data={data} id={id} addToAnimals={addToAnimals} />
    </div>
  );
};
export default AnimalProfile;
