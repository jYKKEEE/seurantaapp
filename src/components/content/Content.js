import React from 'react';
const Content = (props) => {
  return (
    <div className='overflow-auto flex flex-col items-center h-screen w-screen'>
      {props.children}
    </div>
  );
};
export default Content;
