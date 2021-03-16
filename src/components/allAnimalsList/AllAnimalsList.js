/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import DisplayBox from '../shared/displayBox/DisplayBox';
import { listAllStyling } from '../shared/tailwindStyles';

const AllAnimals = (props) => {
  const { data } = props;
  //const today = new Date().toISOString().substring(0, 10);

  return (
    <div className='flex flex-col font-mono font-semibold  pb-3'>
      <DisplayBox>
        <div className='text-lg text-green-100 flex flex-row justify-between pl-2 pr-2'>
          <p>Korvanumero:</p> <p>Sijainti:</p>
        </div>
        {data.map((animal, index) => (
          <div key={index} className={`${listAllStyling(index)}`}>
            <Link to={`/animal/${animal.number}`}>
              <p>{animal.number}</p>
            </Link>
            <p>{animal.animalLocation}</p>
          </div>
        ))}
      </DisplayBox>
    </div>
  );
};

export default AllAnimals;
