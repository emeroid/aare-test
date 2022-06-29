import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import axios from 'axios';
//import { Provider } from 'react-redux';
//import {store} from './util/helpers'
//konectar.roselinodoh.com
/* const auth = JSON.parse(localStorage.getItem('konectar_user'));
axios.defaults.baseURL = 'https://konectarend.roselinodoh.com/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.Authorization = `Bearer ${ auth !== null ? auth.token: "" }`; */

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
