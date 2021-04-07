/* eslint-disable indent */
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataForm from '../forms/DataForm';
import TrashCan from '../shared/icons/trashCan/TrashCan';
import DisplayBox from '../shared/displayBox/DisplayBox';

const AnimalProfile = (props) => {
  const {
    addToAnimals,
    groups,
    deleteAnimal,
    handleNotification,
    data,
    notes,
    states,
  } = props;
  const { id } = useParams();

  let history = useHistory();

  return (
    <div className='text-xl text-white'>
      <div className='flex justify-center items-center text-4xl font-mono font-semibold text-red-700 pb-3'>
        {id === 'profile' ? (
          <div className='pl-3'> Lisää Eläin</div>
        ) : (
          <div className='flex flex-row'>
            Eläin
            <div
              className='text-green-500 pl-4 flex flex-row items-center'
              onClick={() => {
                deleteAnimal(id) ? history.goBack() : () => {};
              }}
            >
              {id}
              <TrashCan />
            </div>
          </div>
        )}
      </div>

      <DataForm
        addToAnimals={addToAnimals}
        groups={groups}
        data={data}
        handleNotification={handleNotification}
        id={id}
        notes={notes}
        states={states}
      />
      {id !== 'profile' ? (
        <DisplayBox>
          {data.map((animal, animalIndex) => {
            return animal.number === id ? (
              <div key={animalIndex}>
                {animal.notes.length > 0
                  ? animal.notes.map((note, noteIndex) => (
                      <div
                        key={noteIndex}
                        className='flex justify-between items-center font-mono'
                      >
                        {note.date} {note.note}
                        <p
                          onClick={() => {
                            console.log('klikkkki');
                            var sure = confirm(
                              `Poistetaanko merkintä:  ${note.date} ${note.note}`
                            );
                            if (sure) {
                              const newAnimal = animal;
                              newAnimal.notes.splice(noteIndex, 1);
                              addToAnimals(newAnimal);
                            }
                          }}
                        >
                          <TrashCan />
                        </p>
                      </div>
                    ))
                  : ''}
              </div>
            ) : (
              <div key={animalIndex}></div>
            );
          })}
        </DisplayBox>
      ) : (
        <></>
      )}
    </div>
  );
};
export default AnimalProfile;
