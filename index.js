import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import axios from 'axios';
// import { BrowserRouter } from 'react-router-dom';

// axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
// axios.defaults.headers.post['Content-Type'] = 'application/json';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);