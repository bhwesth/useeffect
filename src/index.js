import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


localStorage.clear();
localStorage.setItem("effectCountempty", 0);
localStorage.setItem("effectCountnone", 0);
localStorage.setItem("effectCountused", 0);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
