/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { daysFromLastNote } from '../forms/QuickFrom';
import Filter from '../filter';

const Info = (props) => {
  const { data, states, groups, handleFilter } = props;

  return (
    <div className='flex flex-col text-xl text-white ml-2 mr-2'>
      <div className='flex  flex-col  text-4xl font-mono font-semibold text-red-700 pb-3'>
        <p className='flex justify-center'>Tapahtumat:</p>
        <Filter states={states} handleFilter={handleFilter} groups={groups} />
      </div>
      {states.filter === 99999
        ? data.map((animal, index) => (
            <div key={index} className='flex flex-col'>
              {animal.notes.map((note, i) => {
                var infoOutput = note.note.includes('Veri') ? (
                  <p className='text-red-700 pl-2'>verestä</p>
                ) : note.note.includes('Siemennys') ? (
                  <p className='text-green-500 pl-2'>siemennyksestä</p>
                ) : note.note.includes('Kiima') ? (
                  <p className='text-green-500 pl-2'>kiimasta</p>
                ) : (
                  <p className='text-gray-400 pl-2'>{note.note}</p>
                );
                //jos edellinen merkintä 18 pv ni ilmota!!, jos vika merkintä veri ni ilmota siemennys?
                if (
                  daysFromLastNote(note.date) >= 20 &&
                  daysFromLastNote(note.date) <= 22
                ) {
                  return (
                    <div key={i} className='flex justify-between'>
                      <Link to={`animal/${animal.number}`}>
                        <div className='flex  text-xl transform hover:scale-110 pb-2 pr-6'>
                          {animal.number}
                        </div>
                      </Link>
                      <div className='flex flex-row items-center pb-2 pl-2 text-sm'>
                        {daysFromLastNote(note.date) === 21 ? (
                          <p>3 viikkoa edellisestä </p>
                        ) : (
                          <p>
                            {daysFromLastNote(note.date)} päivää edellisestä
                          </p>
                        )}
                        {states.add ? (
                          <div>{infoOutput}</div>
                        ) : (
                          <Link to={`animal/${animal.number}`}>
                            {infoOutput}
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                } else if (
                  (daysFromLastNote(note.date) >= 41 &&
                    daysFromLastNote(note.date) <= 42 &&
                    note.note.includes('Veri')) ||
                  (daysFromLastNote(note.date) >= 41 &&
                    daysFromLastNote(note.date) <= 42 &&
                    note.note.includes('Siemennys')) ||
                  (daysFromLastNote(note.date) >= 41 &&
                    daysFromLastNote(note.date) <= 42 &&
                    note.note.includes('Kiima'))
                ) {
                  return (
                    <div key={i} className='flex justify-between'>
                      <Link to={`animal/${animal.number}`}>
                        <div className='flex  text-xl transform hover:scale-110 pb-2 pr-6'>
                          {animal.number}
                        </div>
                      </Link>
                      <div className='flex flex-row items-center pb-2 pl-2 text-sm'>
                        <p>6 viikkoa</p>

                        {states.add ? (
                          <div>{infoOutput}</div>
                        ) : (
                          <Link to={`animal/${animal.number}`}>
                            {infoOutput}
                          </Link>
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
              {animal.group === groups[states.filter] ? (
                animal.notes.map((note, i) => {
                  var infoOutput = note.note.includes('Veri') ? (
                    <p className='text-red-700 pl-2'>verestä</p>
                  ) : note.note.includes('Siemennys') ? (
                    <p className='text-green-500 pl-2'>siemennyksestä</p>
                  ) : note.note.includes('Kiima') ? (
                    <p className='text-green-500 pl-2'>kiimasta</p>
                  ) : (
                    <p className='text-gray-400 pl-2'>{note.note}</p>
                  );
                  //jos edellinen merkintä 18 pv ni ilmota!!, jos vika merkintä veri ni ilmota siemennys?
                  if (
                    daysFromLastNote(note.date) >= 20 &&
                    daysFromLastNote(note.date) <= 22
                  ) {
                    return (
                      <div key={i} className='flex justify-between'>
                        <Link to={`animal/${animal.number}`}>
                          <div className='flex  text-xl transform hover:scale-110 pb-2 pr-6'>
                            {animal.number}
                          </div>
                        </Link>
                        <div className='flex flex-row items-center pb-2 pl-2 text-sm'>
                          {daysFromLastNote(note.date) === 21 ? (
                            <p>3 viikkoa edellisestä </p>
                          ) : (
                            <p>
                              {daysFromLastNote(note.date)} päivää edellisestä
                            </p>
                          )}
                          {states.add ? (
                            <div>{infoOutput}</div>
                          ) : (
                            <Link to={`animal/${animal.number}`}>
                              {infoOutput}
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  } else if (
                    (daysFromLastNote(note.date) >= 41 &&
                      daysFromLastNote(note.date) <= 42 &&
                      note.note.includes('Veri')) ||
                    (daysFromLastNote(note.date) >= 41 &&
                      daysFromLastNote(note.date) <= 42 &&
                      note.note.includes('Siemennys')) ||
                    (daysFromLastNote(note.date) >= 41 &&
                      daysFromLastNote(note.date) <= 42 &&
                      note.note.includes('Kiima'))
                  ) {
                    return (
                      <div key={i} className='flex justify-between'>
                        <Link to={`animal/${animal.number}`}>
                          <div className='flex  text-xl transform hover:scale-110 pb-2 pr-6'>
                            {animal.number}
                          </div>
                        </Link>
                        <div className='flex flex-row items-center pb-2 pl-2 text-sm'>
                          <p>6 viikkoa</p>

                          {states.add ? (
                            <div>{infoOutput}</div>
                          ) : (
                            <Link to={`animal/${animal.number}`}>
                              {infoOutput}
                            </Link>
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
export default Info;
