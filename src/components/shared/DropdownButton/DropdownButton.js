import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '../button/Button';

const DropdownButton = (props) => {
  // const { register, handleSubmit, setError, getValues } = useForm();
  const [dropEvent, setDropEvent] = useState(false);

  return (
    <div className='pt-8'>
      <Button
        secondary
        onClick={() => {
          setDropEvent(!dropEvent);
        }}
      >
        <div className=''>
          <ImportExportIcon />
          {props.text}
        </div>
      </Button>

      {dropEvent ? (
        <div>
          <label className='pt-3 pb-1 flex flex-row text-xl text-white '>
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
