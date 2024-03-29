import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore, { persistor } from './store/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={reduxStore} >
            <PersistGate persistor={persistor}>
                <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
