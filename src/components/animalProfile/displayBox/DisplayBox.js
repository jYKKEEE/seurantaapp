/* eslint-disable indent */
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const DisplayBox = ({ data, id, addToAnimals }) => {
  return (
    <div>
      {data.map((animal, animalIndex) => {
        return animal.number === id ? (
          <div
            key={animalIndex}
            className='text-xl text-white w-auto h-auto border-double border-4'
          >
            {animal.notes.length > 0
              ? animal.notes.map((note, noteIndex) => (
                  <div
                    key={noteIndex}
                    className='flex justify-between items-center font-mono'
                  >
                    {note.date} {note.note}
                    <DeleteForeverIcon
                      onClick={() => {
                        var sure = confirm(
                          `Poistetaanko merkintä:  ${note.date} ${note.note}`
                        );
                        if (sure) {
                          const newAnimal = animal;
                          newAnimal.notes.splice(noteIndex, 1);
                          addToAnimals(newAnimal);
                        }
                      }}
                      className='text-red-700 hover:text-red-500'
                    />
                  </div>
                ))
              : ''}
          </div>
        ) : (
          <div key={animalIndex}></div>
        );
      })}
    </div>
  );
};

export default DisplayBox;
