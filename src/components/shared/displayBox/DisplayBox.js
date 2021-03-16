/* eslint-disable indent */
import React from 'react';

const DisplayBox = (props) => {
  return (
    <div className='w-auto h-auto border-double border-4'>{props.children}</div>
  );
};

export default DisplayBox;
