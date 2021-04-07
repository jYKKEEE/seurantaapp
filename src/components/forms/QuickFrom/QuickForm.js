import React from 'react';
import { useForm } from 'react-hook-form';

const QuickForm = (props) => {
  const { notes, addToAnimals, data, handleNotification } = props;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (newData) => {
    var edit = false;
    var today = new Date().toISOString().substring(0, 10);
    data.map((animal) => {
      //jos eläin löytyy jo listasta, lisätään sille uusi merkintä
      if (animal.number === newData.number) {
        edit = true;
        var newAnimal = animal;
        console.log(animal.group);
        newAnimal.notes.push({
          date: today,
          note: newData.note,
        });
        newAnimal.notes.sort(
          (a, b) => daysFromLastNote(a.date) - daysFromLastNote(b.date)
        );
        if (animal.group === '') {
          handleNotification(
            `Eläin: '${newData.number}' ryhmä puuttuu. Uusi merkintä: ' ${newData.note} ${today} ' lisätty.`,
            'bg-red-700',
            true
          );
        } else {
          addToAnimals(newAnimal);
          handleNotification(
            `Uusi merkintä: ' ${newData.note} ${today} ' lisätty.`,
            'bg-green-500',
            true
          );
        }
      }
    });
    //jos eläintä ei ole olemassa lisätään se.
    if (edit === false) {
      addToAnimals({
        number: newData.number,
        name: '',
        race: '',
        group: '',
        notes: [
          {
            date: today,
            note: newData.note,
          },
        ],
      });
      handleNotification(
        `Eläin: '${newData.number}' ryhmä puuttuu. Uusi merkintä: ' ${newData.note} ${today} ' lisätty.`,
        'bg-red-700',
        true
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='py-5 flex justify-center items-center'>
          {errors.number && <p>{errors.number.message}</p>}
          <div className='flex flex-col'>
            <span className='text-xl font-mono text-red-700'></span>
            {/*KORVANUMERO TÄSSÄ*/}
            <input
              className='appearance-none shadow-2xl rounded-tl-xl py-2 px'
              type='number'
              name='number'
              placeholder='Anna korvanumero'
              ref={register({
                required: 'Anna korvanumero',
                minLength: { value: 1, message: 'Anna korvanumero' },
              })}
              required
            />
            {/*VALINTA RUUTU TÄSSÄ */}
            <select
              name='note'
              className='appearance-none shadow-2xl rounded-bl-xl py-2 px-0 '
              placeholder='Valitse'
              required
              ref={register}
            >
              {notes.map((selection, index) => (
                <option key={index} className='text-base font-mono text-black'>
                  {selection}
                </option>
              ))}
            </select>
          </div>
          {/*BUTTONI TÄSSÄ */}
          <button
            type='submit'
            className='bg-gray-900 text-white border-none outline-none rounded-br-xl rounded-tr-xl shadow-xl font-mono opacity-80 py-7 px-2'
            onClick={() => {}}
          >
            Lisää
          </button>
        </div>
      </form>
    </div>
  );
};

// palauttaa 1 huomenna / 0 tänään / -1 eilen
const daysFromLastNote = (date) => {
  var time = new Date().toISOString().substring(0, 10);
  var now = Date.parse(time);
  var x = Date.parse(date);
  var sec = (now - x) / 1000;
  var h = sec / 3600;
  var days = Math.round(h / 24);
  return days;
};
export { QuickForm as default, daysFromLastNote };
