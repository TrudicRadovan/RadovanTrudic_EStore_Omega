import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';

/*axios.interceptors.request.use(request => {
  console.log(request);
  console.log('BLABLABLA');
  return request;
});

axios.interceptors.response.use(response => {
  console.log(response);
  console.log('TRUCTRUC');
  return response;
});*/

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
