import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';

// Font Awesome Imports
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
document.getElementById('root'));