import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from 'react-router-dom'//ES6
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <App />    
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)


