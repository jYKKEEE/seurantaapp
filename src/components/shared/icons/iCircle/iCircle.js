import React from 'react';

const iCircle = () => {
  return (
    <div className='flex items-end'>
      <svg
        className='h-8 w-8 text-blue-700 hover:text-blue-500'
        viewBox='0 0 26 26'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='10' />{' '}
        <line x1='12' y1='16' x2='12' y2='12' />
        <line x1='12' y1='8' x2='12.01' y2='8' />
      </svg>
    </div>
  );
};

export default iCircle;
