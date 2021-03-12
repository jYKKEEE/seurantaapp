/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import Button from '../../shared/button/Button';
import { daysFromLastNote } from '../QuickFrom';
import DropdownButton from '../../shared/dropdownButton';

const DataForm = (props) => {
  const {
    animalLocations,
    addToAnimals,
    data,
    id,
    notes,
    handleNotification,
  } = props;

  function getAnimal(id) {
    var olio = {
      number: '',
      name: '',
      race: '',
      animalLocation: '',
      notes: [],
    };
    for (let i = 0; i < data.length; i++) {
      if (data[i].number === id) {
        olio = data[i];
      }
    }
    return olio;
  }

  const {
    register,
    handleSubmit,
    setError,
    errors,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      number: getAnimal(id).number,
      name: getAnimal(id).name,
      race: getAnimal(id).race,
      animalLocation: getAnimal(id).animalLocation,
      note: '',
      date: new Date(),
    },
  });

  const onSubmit = (newData) => {
    var edit = false;
    data.map((animal) => {
      //jos eläin löytyy jo listasta. Mikäli kenttiä jätetty tyhjiksi niin käytetään edellisiä arvoja.
      if (animal.number === newData.number) {
        edit = true;
        var newAnimal = {
          number: newData.number,
          name: newData.name === '' ? animal.name : newData.name,
          race: newData.race === '' ? animal.race : newData.race,
          animalLocation:
            newData.animalLocation === ''
              ? animal.animalLocation
              : newData.animalLocation,
          notes: animal.notes,
        };

        if (newData.note !== undefined && newData.note !== 'Valitse') {
          newAnimal.notes.push({
            date: newData.date,
            note: newData.note,
          });
          handleNotification(
            `Lisätty ${newData.note}, pvm: ${newData.date} eläimelle ${newData.number}`,
            'bg-green-500'
          );
        } else {
          handleNotification('Tietojen muokkaus onnistui,', 'bg-green-500');
        }
        newAnimal.notes.sort(
          //a-b 0->10, b-a 10->0
          (a, b) => daysFromLastNote(a.date) - daysFromLastNote(b.date)
        );
        addToAnimals(newAnimal);
      }
    });
    if (edit === false) {
      addToAnimals({
        number: newData.number,
        name: newData.name,
        race: newData.race,
        animalLocation: newData.animalLocation,
        notes: newData.note
          ? [
              {
                date: newData.date,
                note: newData.note,
              },
            ]
          : [],
      });
      handleNotification(
        `Uusi eläin: '${newData.number}' lisätty.`,
        'bg-green-500'
      );
    }
  };

  return (
    <div className='text-xl text-white flex justify-center items-center flex-row'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <label className='pt-3'>Korvanumero:</label>
          <input
            className='text-black rounded w-64'
            type='number'
            name='number'
            placeholder='Anna korvanumero:'
            required
            ref={register({
              required: true,
            })}
          />
          {errors.number && (
            <p className='text-white text-xl'>{errors.number.message}</p>
          )}
          <label className='pt-3 rounded'>Nimi:</label>
          <input
            className='text-black rounded w-64'
            type='text'
            name='name'
            placeholder='Anna nimi:'
            ref={register}
          />
          <label className='pt-3 rounded'>Rotu:</label>
          <input
            className='text-black rounded w-64'
            type='text'
            name='race'
            placeholder=' Anna rotu:'
            ref={register}
          />
          <label className='pt-3'>Sijainti:</label>
          <div className='flex flex-col w-64'>
            <select
              name='animalLocation'
              className=' shadow-2xl text-black rounded py-0'
              required
              ref={register}
            >
              {animalLocations.map((animalLocation, index) => (
                <option key={index} className='text-base font-mono text-black'>
                  {animalLocation}
                </option>
              ))}
            </select>
          </div>
          {/*//!!!! BUTTONIT !!!!*/}
          <div className='flex justify-start items-center pt-6'>
            <Button primary type='submit'>
              Tallenna
            </Button>
            <Button primary>Peruuta</Button>
          </div>
          {errors.note && <p>{errors.note.message}</p>}
          {/*tähän diviin taulu */}
          <div className='flex justify-center items-center pr-3'>
            {/*LISÄÄ TAPAHTUMA VALIKKO*/}
            <DropdownButton text='Lisää tapahtuma:'>
              <div className='flex flex-col'>
                <label className='pt-3 text-gray-200'>
                  Valitse tapahtuma:{' '}
                </label>
                <select
                  name='note'
                  className=' shadow-2xl text-black rounded py-0'
                  placeholder='Tapahtuma'
                  required
                  ref={register}
                >
                  {notes.map((selection, index) =>
                    selection === 'Valitse' ? (
                      <option
                        key={index}
                        className='text-base font-mono text-black'
                        disabled
                      >
                        {selection}
                      </option>
                    ) : (
                      <option
                        key={index}
                        className='text-base font-mono text-black'
                      >
                        {selection}
                      </option>
                    )
                  )}
                </select>

                <label>Valitse päivämäärä:</label>
                <Controller
                  control={control}
                  name='date'
                  render={(props) => (
                    <input
                      type='date'
                      className='text-xl rounded font-mono text-black '
                      onChange={(e) => props.onChange(e)}
                      selected={props.value}
                      required
                    />
                  )}
                />

                <div className='pt-3'>
                  <Button primary type='submit'>
                    Lisää
                  </Button>
                </div>
              </div>
            </DropdownButton>
          </div>
          <div className='flex justify-center items-center pt-12'></div>
        </div>
      </form>
    </div>
  );
};
export default DataForm;
