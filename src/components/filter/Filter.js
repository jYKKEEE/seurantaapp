import React, { useState } from 'react';
import ChangeFilter from '../shared/icons/changefilter/Changefilter';
import { linkStyling } from '../shared/tailwindStyles';

const Filter = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { states, animalLocations, handleFilter } = props;
  const [effect, setEffect] = useState(false);

  return (
    <div className='flex flex-row justify-between items-center text-base text-white'>
      {states.filter === 99999 ? (
        // on default
        <p className={`${linkStyling(states.filter, 99999)}`}>Kaikki:</p>
      ) : (
        <p className={`${linkStyling(states.filter, states.filter)}`}>
          {animalLocations[states.filter]}:
        </p>
      )}
      <div
        className={`${effect && 'text-green-500  animate-spinFast'}`}
        onClick={() => {
          setEffect(true);
          setTimeout(() => {
            handleFilter();
            setEffect(false);
          }, 350);
        }}
      >
        <ChangeFilter />
      </div>
    </div>
  );
};
export default Filter;
