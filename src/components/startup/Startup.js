import React from 'react';
import firebase from 'firebase';
import { useAuth } from 'reactfire';
import Button from '../shared/button';

function Startup() {
  const auth = useAuth();

  const signIn = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div className='m-0 bg-gradient-to-tl from-red-500 via-gray-800 to-gray-600 h-screen w-full flex-auto'>
      <div style={{ background: '#091c29' }}>
        <div className='flex items-center justify-between w-11/12 mx-auto py-3 text-white '>
          <span className='flex flex-row justify-center items-center  text-red-700 text-2xl font-mono'>
            Seuranta
            <span className='w-2 h-2 inline-block rounded-full bg-white'>
              app
            </span>
            {/*valkoinen imagopallero */}
          </span>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center text-base text-white mt-6 p-2'>
        <p>
          Tervetuloa käyttämään Seuranta appia. Sinun tulee kirjautua sisään
        </p>
        <p className='mb-2'>
          Google-tunnuksillasi, jotta voit käyttää sovellusta.
        </p>
        <Button primary onClick={signIn}>
          Kirjaudu sisään
        </Button>
      </div>
    </div>
  );
}
export default Startup;
