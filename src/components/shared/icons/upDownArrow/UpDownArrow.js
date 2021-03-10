import React from 'react';

const UpDownArrow = ({ bool }) => {
  if (bool) {
    return (
      <svg
        className='h-6 w-12 text-black'
        width='8'
        height='10'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' />
        <polyline points='7 11 12 6 17 11' />
        <polyline points='7 17 12 12 17 17' />
      </svg>
    );
  } else {
    return (
      <svg
        className='h-6 w-12 text-black'
        width='8'
        height='10'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' />{' '}
        <polyline points='7 7 12 12 17 7' />{' '}
        <polyline points='7 13 12 18 17 13' />
      </svg>
    );
  }
};
export default UpDownArrow;
