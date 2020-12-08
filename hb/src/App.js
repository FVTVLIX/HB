import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Support from './Support'
import { Link, NavLink } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'

import 'pure-react-carousel/dist/react-carousel.es.css';
import homeimage from './images/NYCSplashLogoPageNew.png'



class App extends Component {
  constructor() {
    super()

    this.state = {

    };
  }

  render() {

    return (
      <div className="App">

        <Switch>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/support">
            <Support />
          </Route>


          <Link className="splashpage" exact to="/home">
            <img className="splashimage" src={homeimage} alt="splashhomepage.png" />
          </Link>

        </Switch>

      </div>
    )
  };
}

export default App;
