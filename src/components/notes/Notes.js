/* eslint-disable indent */
import React from 'react';
import { daysFromLastNote } from '../forms/QuickFrom';
import { Link } from 'react-router-dom';
import Filter from '../filter';

const Notes = (props) => {
  const { data, states, animalLocations, handleFilter } = props;
  const today = new Date().toISOString().substring(0, 10);

  return (
    <div className='flex flex-col text-xl text-white ml-2 mr-2'>
      <div className='flex  flex-col  text-4xl font-mono font-semibold text-red-700 pb-3'>
        <p className='flex justify-center'>Havainnot:</p>
        <Filter
          states={states}
          handleFilter={handleFilter}
          animalLocations={animalLocations}
        />
      </div>

      {states.filter === 99999
        ? data.map((animal, index) => (
            <div key={index} className='flex flex-col'>
              {animal.notes.map((note, i) => {
                const output = note.note.includes('Veri') ? (
                  <p className='text-red-700 pl-2'>veri</p>
                ) : note.note.includes('Siemennys') ? (
                  <p className='text-green-500 pl-2'>siemennys</p>
                ) : note.note.includes('Kiima') ? (
                  <p className='text-green-500 pl-2'>kiimassa</p>
                ) : (
                  <p className='text-gray-400 pl-2'>{note.note}</p>
                );
                if (
                  daysFromLastNote(note.date) <= daysFromLastNote(today) + 1 &&
                  daysFromLastNote(note.date) >= -1
                ) {
                  return (
                    <div key={i} className='flex justify-between'>
                      <Link to={`animal/${animal.number}`}>
                        <div className='flex  text-xl transform hover:scale-110 pb-2 pr-6'>
                          {animal.number}
                        </div>
                      </Link>
                      <div className='flex flex-row items-center pb-2 pl-2 text-sm'>
                        {daysFromLastNote(note.date) === -1 ? (
                          <p to={`animal/${animal.number}`}>Huomenna</p>
                        ) : daysFromLastNote(note.date) === 1 ? (
                          <p>Eilen</p>
                        ) : daysFromLastNote(note.date) === 0 ? (
                          <p>Tänään</p>
                        ) : (
                          <></>
                        )}
                        {states.add ? (
                          <div>{output}</div>
                        ) : (
                          <Link to={`animal/${animal.number}`}>{output}</Link>
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          ))
        : data.map((animal, index) => (
            <div key={index} className='flex flex-col'>
              {animal.animalLocation === animalLocations[states.filter] ? (
                animal.notes.map((note, i) => {
                  const output = note.note.includes('Veri') ? (
                    <p className='text-red-700 pl-2'>veri</p>
                  ) : note.note.includes('Siemennys') ? (
                    <p className='text-green-500 pl-2'>siemennys</p>
                  ) : note.note.includes('Kiima') ? (
                    <p className='text-green-500 pl-2'>kiimassa</p>
                  ) : (
                    <p className='text-gray-400 pl-2'>{note.note}</p>
                  );
                  if (
                    daysFromLastNote(note.date) <=
                      daysFromLastNote(today) + 1 &&
                    daysFromLastNote(note.date) >= -1
                  ) {
                    return (
                      <div key={i} className='flex justify-between'>
                        <Link to={`animal/${animal.number}`}>
                          <div className='flex  text-xl transform hover:scale-110 pb-2 pr-6'>
                            {animal.number}
                          </div>
                        </Link>
                        <div className='flex flex-row items-center pb-2 pl-2 text-sm'>
                          {daysFromLastNote(note.date) === -1 ? (
                            <p to={`animal/${animal.number}`}>Huomenna</p>
                          ) : daysFromLastNote(note.date) === 1 ? (
                            <p>Eilen</p>
                          ) : daysFromLastNote(note.date) === 0 ? (
                            <p>Tänään</p>
                          ) : (
                            <></>
                          )}
                          {states.add ? (
                            <div>{output}</div>
                          ) : (
                            <Link to={`animal/${animal.number}`}>{output}</Link>
                          )}
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <></>
              )}
            </div>
          ))}
    </div>
  );
};

export default Notes;

/*{data.map((animal, index) => (
  <div key={index} className='flex flex-col'>
    {animal.notes.map((note, i) => {
      const output = note.note.includes('Veri') ? (
        <p className='text-red-700 pl-2'>veri</p>
      ) : note.note.includes('Siemennys') ? (
        <p className='text-green-500 pl-2'>siemennys</p>
      ) : note.note.includes('Kiima') ? (
        <p className='text-green-500 pl-2'>kiimassa</p>
      ) : (
        <p className='text-gray-400 pl-2'>{note.note}</p>
      );
      if (
        daysFromLastNote(note.date) <= daysFromLastNote(today) + 1 &&
        daysFromLastNote(note.date) >= -1
      ) {
        return (
          <div key={i} className='flex justify-between'>
            <Link to={`animal/${animal.number}`}>
              <div className='flex  text-xl transform hover:scale-110 pb-2 pr-6'>
                {animal.number}
              </div>
            </Link>
            <div className='flex flex-row items-center pb-2 pl-2 text-sm'>
              {daysFromLastNote(note.date) === -1 ? (
                <p to={`animal/${animal.number}`}>Huomenna</p>
              ) : daysFromLastNote(note.date) === 1 ? (
                <p>Eilen</p>
              ) : daysFromLastNote(note.date) === 0 ? (
                <p>Tänään</p>
              ) : (
                <></>
              )}
              {states.add ? (
                <div>{output}</div>
              ) : (
                <Link to={`animal/${animal.number}`}>{output}</Link>
              )}
            </div>
          </div>
        );
      }
    })}
  </div>
))}*/
