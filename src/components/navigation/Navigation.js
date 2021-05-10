import React from 'react';
import { Link } from 'react-router-dom';
import { linkStyling } from '../tailwindStyles/';
const Navigation = ({ handlePage, page }) => {
  return (
    <div className='bg-primary'>
      <div className='flex items-center justify-between w-11/12 mx-auto py-3 text-white '>
        <span className='flex flex-row justify-center items-center  text-red-700 text-2xl font-mono'>
          Seuranta
          <span className='w-2 h-2 inline-block rounded-full bg-white'>
            app
          </span>
          {/*valkoinen imagopallero */}
        </span>
        <div className='flex flex-row text-xs sm:text-base'>
          <Link to='/user'>
            <button
              onClick={() => {
                handlePage(0);
              }}
              className={`${linkStyling(page, 0)}`}
            >
              Käyttäjä
            </button>
          </Link>
          <Link to='/animal/profile'>
            <button
              onClick={() => {
                handlePage(1);
              }}
              className={`${linkStyling(page, 1)}`}
            >
              Lisää
            </button>
          </Link>
          <Link to='/'>
            <button
              onClick={() => {
                handlePage(2);
              }}
              className={`${linkStyling(page, 2)}`}
            >
              Info
            </button>
          </Link>
          <Link to='/notes'>
            <button
              onClick={() => {
                handlePage(3);
              }}
              className={`${linkStyling(page, 3)}`}
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
