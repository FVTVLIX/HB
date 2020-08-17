import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <link href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@200&family=Do+Hyeon&family=Eczar&family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,400;1,100;1,400&family=Raleway:wght@400;500;700&family=VT323&family=Yatra+One&display=swap" rel="stylesheet" />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
