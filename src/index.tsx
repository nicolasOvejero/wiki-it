import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from './store/store'; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0BnCnFbrMYNqt0LJG1egSlRSjBb06GKc",
  authDomain: "wiki-it-f9d1e.firebaseapp.com",
  projectId: "wiki-it-f9d1e",
  storageBucket: "wiki-it-f9d1e.appspot.com",
  messagingSenderId: "810287948791",
  appId: "1:810287948791:web:5fb94bf090aedbea9984f2"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={reduxStore} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
