import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const REACT_VERSION = React.version;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    {/* <div>React version: {REACT_VERSION}</div> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

