import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';

import Button from '../button/Button';
import UpDownArrow from '../icons/upDownArrow';
const DropdownButton = (props) => {
  // const { register, handleSubmit, setError, getValues } = useForm();
  const [dropEvent, setDropEvent] = useState(false);

  return (
    <div className='pt-8 flex justify-start flex-col'>
      <Button
        secondary
        onClick={() => {
          setDropEvent(!dropEvent);
        }}
      >
        <div className='flex justify-between items-center flex-row'>
          <UpDownArrow bool={dropEvent} />
          {props.text}
          <UpDownArrow bool={dropEvent} />
        </div>
      </Button>

      {dropEvent ? (
        <div>
          <label className='pt-1 pb-1 flex flex-row text-xl text-white '>
            {props.labelText}
          </label>
          {props.children}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropdownButton;
