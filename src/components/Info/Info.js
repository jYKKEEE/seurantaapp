import React from 'react';
import { Link } from 'react-router-dom';

const Info = (props) => {
  const { data, note } = props;

  const daysFromLastNote = (x) => {
    var now = new Date();
    var sec = (now - x) / 1000;
    var h = sec / 3600;
    var days = Math.round(h / 24);

    return days;
  };
  //const lastNoteToString = () => {};

  const colors = [
    'text-white flex flex-row items-center justify-between',
    'text-gray-400 flex flex-row items-center justify-between',
  ];

  const output = data.map((animal, index) => {
    return (
      <div
        key={animal.number}
        className={index % 2 === 0 ? `${colors[0]}` : `${colors[1]}`}
      >
        <div className='flex text-xl justify-between pb-2 transform hover:scale-110'>
          {note ? (
            <Link onClick={() => {}}>{animal.number}</Link>
          ) : (
            <Link>{animal.number}</Link>
          )}
        </div>
        <div key={index} className='flex flex-row pb-2 text-sm mr-4'>
          {animal.notes.map((note) => (
            <div key={note.number}>
              {daysFromLastNote(note.date.getTime())} päivää edellisestä{' '}
              {note.note}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='pl-8 py-10 w-96 h-96  text-xl'>
        {output}
        {output}
        {output}
        {output}
        {output}
        {output}
        {output}
        {output}
      </div>
    </div>
  );
};
export default Info;
