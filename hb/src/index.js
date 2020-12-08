import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <link href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@200&family=Abril+Fatface&family=Do+Hyeon&family=DM+Serif+Display&family=Eczar&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,400;1,100;1,400&family=Raleway:wght@400;500;700&family=VT323&family=Yatra+One&display=swap" rel="stylesheet" />
      <link href="//db.onlinewebfonts.com/c/b461b7ace66f0d83a3146b642ad9baff?family=Le+Jeune+Deck" rel="stylesheet" type="text/css"/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
