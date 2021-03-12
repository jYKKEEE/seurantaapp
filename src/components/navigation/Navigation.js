import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ handlePage, page }) => {
  const linkStyling = (number) => {
    if (page === number) {
      return 'text-green-500 mr-2 focus:outline-none';
    } else {
      return 'mr-2 hover:text-green-100 focus:outline-none focus:text-white';
    }
  };
  return (
    <div style={{ background: '#091c29' }}>
      <div className='flex items-center justify-between w-11/12 mx-auto py-3 text-white '>
        <span className='flex flex-row justify-center items-center  text-red-700 text-2xl font-mono'>
          Seuranta
          <span className='w-2 h-2 inline-block rounded-full bg-white'>
            app
          </span>
          {/*valkoinen imagopallero */}
        </span>
        <div className='flex flex-row text-base'>
          <Link to='/user'>
            <button
              onClick={() => {
                handlePage(0);
              }}
              className={`${linkStyling(0)}`}
            >
              Käyttäjä
            </button>
          </Link>
          <Link to='/animal/profile'>
            <button
              onClick={() => {
                handlePage(1);
              }}
              className={`${linkStyling(1)}`}
            >
              Lisää
            </button>
          </Link>
          <Link to='/'>
            <button
              onClick={() => {
                handlePage(2);
              }}
              className={`${linkStyling(2)}`}
            >
              Info
            </button>
          </Link>
          <Link to='/notes'>
            <button
              onClick={() => {
                handlePage(3);
              }}
              className={`${linkStyling(3)}`}
            >
              Havainnot
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
