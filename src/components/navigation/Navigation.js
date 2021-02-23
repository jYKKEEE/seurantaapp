import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  //const [activeColor, setActiveColor] = useState(true);

  return (
    <div style={{ background: '#091c29' }}>
      <div className='flex items-center justify-between w-10/12 mx-auto py-3 text-white'>
        <span className='flex flex-row justify-center items-center  text-red-700 text-2xl font-mono'>
          Seuranta
          <span className='w-2 h-2 inline-block rounded-full bg-white'>
            app
          </span>
          {/*valkoinen imagopallero */}
        </span>
        <div className='flex flex-row text-base'>
          <Link to='/animal/profile'>
            <button className='mr-3 hover:text-green-500'>Lisää uusi</button>
          </Link>
          <Link to='/'>
            <button className='mr-3 hover:text-green-500'>Info</button>
          </Link>
          <Link to='/havainnot'>
            <button className='hover:text-green-500'>Havainnot</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
