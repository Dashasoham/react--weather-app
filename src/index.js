import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div class="box">
      <div class="wave -one"></div>
      <div class="wave -two"></div>
      <div class="wave -three"></div>
    </div>
    <React.StrictMode>
      <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
      </div>

      <App />
    </React.StrictMode>
  </div>
);
