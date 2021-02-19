import React from 'react';
import { useForm } from 'react-hook-form';

const QuickForm = (props) => {
  const { selects, addToAnimals } = props;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addToAnimals(data);
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
              {selects.map((selection, index) => (
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
export default QuickForm;
