import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
