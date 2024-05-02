
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { FeedbackProvider } from './context/FeedbackContext';
import {  ToastContainer } from 'react-toastify';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FeedbackProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
      theme="colored"
    />
 
    <App />
  </FeedbackProvider>
);

