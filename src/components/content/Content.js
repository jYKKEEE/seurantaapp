import React from 'react';
import { Redirect } from 'react-router';
const Content = (props) => {
  const { children, swipe, page } = props;
  return (
    <div
      {...swipe}
      className='overflow-auto flex flex-col items-center h-screen w-screen'
    >
      {page === 0 ? (
        <Redirect to='/user' />
      ) : page === 1 ? (
        <Redirect to='/animal/profile' />
      ) : page === 2 ? (
        <Redirect to='/' />
      ) : (
        <Redirect to='/notes' />
      )}
      {children}
    </div>
  );
};
export default Content;
