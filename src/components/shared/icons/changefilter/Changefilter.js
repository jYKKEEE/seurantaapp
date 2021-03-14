import React from 'react';

const ChangeFilter = () => {
  return (
    <div>
      <svg
        className='h-7 w-7 cursor-pointer hover:text-green-100'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' />
        <path d='M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5' />
      </svg>
    </div>
  );
};

export default ChangeFilter;
