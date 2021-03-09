import React from 'react';
import { Link } from 'react-router-dom';
import { daysFromLastNote } from '../forms/QuickFrom';

const Info = (props) => {
  const { data, add } = props;

  return (
    <div className='flex flex-col text-xl text-white ml-2 mr-2'>
      {/*<Filter filters={states} />*/}
      <div className='flex justify-center items-center text-6xl font-mono font-semibold text-red-700 pb-3'>
        Info:
      </div>
      {data.map((animal, index) => (
        <div key={index} className='flex flex-col'>
          {animal.notes.map((note, i) => {
            var sightingOutput = note.note.includes('Veri') ? (
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
                      <p>{daysFromLastNote(note.date)} päivää edellisestä</p>
                    )}
                    {add ? (
                      <div>{sightingOutput}</div>
                    ) : (
                      <Link to={`animal/${animal.number}`}>
                        {sightingOutput}
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

                    {add ? (
                      <div>{sightingOutput}</div>
                    ) : (
                      <Link to={`animal/${animal.number}`}>
                        {sightingOutput}
                      </Link>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};
export default Info;
/*: animal.notes.length > 1 ? (
                animal.notes.map((note, i) => {
                  if ( i > 0){
                    var prevNote = animal.notes[i-1];
                    jos nyt on lima, tuleva merkintä on Veri tai Siem
                    ja siitä kulunut aika verrattuna nykyiseen on pienempiku 0
                    if(note.note.includes('Lima') && prevNote.note === 'Veri' ||
                      prevNote.note === 'Siemennys' || prevNote.note === 'Kiima'  &&
                      (daysFromLastNote(prevNote.note)<=daysFromLastNote(note.note))){
                        return (
                          <div
                            key={i}
                            className='flex flex-row justify-between items-center'
                          >
                            <Link to={`animal/${animal.number}`}>
                              <p className='text-xl transform hover:scale-110'>
                                {showNumber ? animal.number : ''}
                                {(showNumber = false)}
                              </p>
                            </Link>
                            <div className='flex justify-between items-center'>
                              <p>
                                {daysFromLastNote(note.date)} päivää edellisestä
                              </p>
                              {prevNote.note.includes('Veri') ? (
                                <p className='text-red-700 '>verestä</p>
                              ) : prevNote.note.includes('Siemennys') ? (
                                <p className='text-green-500 '>siemennyksestä</p>
                              ) : prevNote.note.includes('Kiima') ? (
                                <p className='text-green-500'>kiimasta</p>
                              ):<></>}
                            </div>
                          </div>
                        );
                      }
                  } */
