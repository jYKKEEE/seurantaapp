import React from 'react';

const classNames = (classnames) => classnames.join(' ');

// HUOM! SÄÄDÄ BUTTONIN KOKOA LISÄÄMÄLLÄ className='py-# px-#'
const Button = ({ className = '', primary, secondary, float, ...props }) => {
  return (
    <button
      type='button'
      className={classNames([
        className,
        primary
          ? 'mr-3 bg-gray-200 hover:bg-gray-300 border  border-gray-400 text-black font-mono font-bold py-1 px-4 rounded-md'
          : '',
        secondary
          ? 'bg-green-500 hover:bg-green-400 border  border-green-900 text-sm text-black font-mono py-1 px-11 rounded-md'
          : '',
        float
          ? 'bg-gray-200 border-none hover:bg-green-100 shadow-2xl text-black focus:outline-none'
          : '',
      ])}
      {...props}
    />
  );
};

const FloatingButton = ({ className = '', ...props }) => {
  return (
    <Button
      className={classNames([
        'fixed text-xl text-bold bottom-10 right-8 rounded-full pl-4 pr-4 pt-4 pb-4',
        className,
      ])}
      {...props}
    >
      <svg
        className='h-6 w-6 text-black'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='10' />
        <line x1='12' y1='8' x2='12' y2='16' />
        <line x1='8' y1='12' x2='16' y2='12' />
      </svg>
    </Button>
  );
};

const ButtonContainer = ({ className = '', children, ...props }) => {
  return (
    <div className={classNames(['relative', className])} {...props}>
      {children}
    </div>
  );
};

const ButtonAppContainer = ({ className = '', children, ...props }) => {
  return (
    <div className={classNames(['origin-bottom-right', className])} {...props}>
      {children}
    </div>
  );
};
export {
  Button as default,
  Button,
  FloatingButton,
  ButtonContainer,
  ButtonAppContainer,
};
