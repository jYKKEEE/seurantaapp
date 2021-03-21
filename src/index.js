import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Startup from './components/startup';

const firebaseConfig = {
  apiKey: 'AIzaSyBeCQJUfT_7v2R0HNSVHkoFCwQjwPa-q_I',
  authDomain: 'seurantaapp.firebaseapp.com',
  projectId: 'seurantaapp',
  storageBucket: 'seurantaapp.appspot.com',
  messagingSenderId: '1080444147469',
  appId: '1:1080444147469:web:d4c9031856c20088510244',
  measurementId: 'G-YRQ8BHJRC0',
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <AuthCheck fallback={<Startup />}>
        <App />
      </AuthCheck>
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
