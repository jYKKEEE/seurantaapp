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
      <div className='flex flex-col justify-center items-center p-2'>
        <div className='flex flex-row text-xl text-white pb-24 pt-3'>
          Tervetuloa käyttämään Seuranta.appia
        </div>

        <div className='flex flex-col items-center justify-center text-white max-w-sm pb-4'>
          <p className='text-base font-mono text-green-500 pb-24'>
            Tämä on sovellus lehmien kiimojen seurantaan.
          </p>
        </div>
        <div className='max-w-xs pb-2 text-sm text-white'>
          Sinun tulee kirjautua sisään Google-tunnuksillasi, jotta voit käyttää
          sovellusta.
        </div>
        <Button primary onClick={signIn}>
          Kirjaudu sisään
        </Button>
      </div>
    </div>
  );
}
export default Startup;
