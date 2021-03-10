import React from 'react';

const Notifications = ({ text, bgcolor, handleNotification }) => {
  if (text !== '') {
    return (
      <div
        className='w-full fixed top-0'
        onClick={() => {
          handleNotification('', 'text-black');
        }}
      >
        <label
          className={` close cursor-pointer flex items-center justify-between w-full p-2 my-14 ${bgcolor} bg-opacity-75 shadow text-white`}
          title='close'
          htmlFor='banneralert'
        >
          <p className='animate-bounce pl-10'>{text}</p>
          <svg
            className='fill-current text-white'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
        </label>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Notifications;
