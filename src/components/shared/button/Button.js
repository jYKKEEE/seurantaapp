import React from 'react';

const classNames = (classnames) => classnames.join(' ');

// HUOM! SÄÄDÄ BUTTONIN KOKOA LISÄÄMÄLLÄ className='py-# px-#'
const Button = ({ className = '', primary, secondary, ...props }) => {
  return (
    <button
      type='button'
      className={classNames([
        'bg-gray-500 border-none outline-none focus:outline-none focus:ring rounded shadow font-bold opacity-80 flex flex-row justify-center items-center',
        className,
        primary ? 'bg-gray-800 hover:bg-black text-white' : '',
        secondary
          ? 'bg-red-500 border-none hover:bg-gray-800 shadow-2xl text-white'
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
        'fixed text-sm bottom-12 right-8 rounded-full ',
        className,
      ])}
      {...props}
    />
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
