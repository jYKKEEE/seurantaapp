import React from 'react';
import { useUser, useAuth } from 'reactfire';
import { useForm } from 'react-hook-form';

import { havainnotPopup, ryhmaPopup } from '../../popUpMessages.js';

import AllAnimalsList from '../allAnimalsList/AllAnimalsList';
import Button from '../shared/button';
import DropdownButton from '../shared/dropdownButton';

import Popup from 'reactjs-popup';
import TrashCan from '../shared/icons/trashCan/TrashCan';
import ICircle from '../shared/icons/iCircle';

const Settings = (props) => {
  const {
    addToGroups,
    addToNotes,
    groups,
    data,
    deleteNote,
    deleteGroup,
    notes,
  } = props;
  const { register, handleSubmit } = useForm();

  const user = useUser();
  const auth = useAuth();

  const signOut = async () => {
    await auth.signOut();
  };

  const onSubmit = (newData) => {
    console.log(newData);
    if (newData.note) {
      addToNotes(newData);
    }
    if (newData.newGroup) {
      addToGroups(newData);
    }
  };

  return (
    <div>
      <div className='flex text-4xl font-mono font-semibold text-red-700 pb-3'>
        Käyttäjä
      </div>

      <div className='flex flex-col text-lg font-mono text-white'>
        <div className='flex flex-row '>
          <div className='pr-2 pb-2'>
            <img src={user.data.photoURL} alt='' className='rounded-2xl' />
          </div>
          <div>
            <div>
              {user.data.displayName}
              <br /> {user.data.email}
            </div>
          </div>
        </div>

        <div>
          <Button primary onClick={signOut}>
            Kirjaudu ulos
          </Button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* HAVAINNOT DROPDOWN */}
        <AddRemove
          list={notes}
          text='havainto'
          id='note'
          inputName='note'
          popupMsg={havainnotPopup}
          remove={deleteNote}
          selectName='notes'
          register={register}
        />
        {/* SIJAINNIT DROPDOWN */}
        <AddRemove
          list={groups}
          id='newGroups'
          text='ryhmä
          '
          remove={deleteGroup}
          inputName='newGroup'
          popupMsg={ryhmaPopup}
          register={register}
          selectName='group'
        />
      </form>
      <DropdownButton text={'Listaa kaikki eläimet'}>
        <AllAnimalsList data={data} />
      </DropdownButton>
    </div>
  );
};

const AddRemove = (props) => {
  const {
    list,
    text,
    register,
    inputName,
    selectName,
    id,
    popupMsg,
    remove,
  } = props;
  return (
    <div>
      <DropdownButton text={`Lisää/poista ${text}`} labelText=''>
        <div className='flex flex-col justify-between items-start pb-3 font-mono text-lg'>
          <div className='flex items-end text-white '>
            <label htmlFor='location' className='flex flex-col'>
              Poista valinta:
              <select
                id={id}
                name={selectName}
                className=' shadow-xl text-black rounded w-52 mr-12'
                ref={register}
              >
                {list.map((obj, index) => (
                  <option
                    key={index}
                    className='text-base font-mono text-black'
                  >
                    {obj}
                  </option>
                ))}
              </select>
            </label>
            <div
              onClick={() => {
                var indexToDelete = document.getElementById(id).selectedIndex;
                for (let i = 0; i < list.length; i++) {
                  if (i === indexToDelete) {
                    remove(list[i]);
                    break;
                  }
                }
              }}
            >
              <TrashCan />
            </div>
          </div>

          <div className='pb-3 flex items-end text-white '>
            <label htmlFor='note' className='flex flex-col text-white mr-14'>
              Lisää uusi {text}:
              <input
                type='text'
                name={inputName}
                placeholder={`Lisää ${text} listalle`}
                ref={register}
                required
                className='text-black text-lg rounded font-mono w-52'
              />
            </label>
            <Popup
              trigger={
                <button type='button'>
                  <ICircle />
                </button>
              }
              position='right center'
            >
              {() => (
                <div className='bg-primary rounded-lg font-mono text-white p-1'>
                  <p className=''>{popupMsg}</p>
                </div>
              )}
            </Popup>
          </div>

          <Button primary type='submit'>
            Lisää
          </Button>
        </div>
      </DropdownButton>
    </div>
  );
};

export default Settings;
