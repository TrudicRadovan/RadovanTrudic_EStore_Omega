import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';
import { redirect } from 'react-router-dom';

/*axios.interceptors.request.use(request => {
  console.log(request);
  return request;
});

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  (error: any) => {
    if (error?.response?.status == 404) {
      redirect('/login');
    }
    return Promise.reject(error);
  }
);*/

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
