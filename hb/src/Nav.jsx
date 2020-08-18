import React, { Component } from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'
import logo from './images/HB Logo.png'


export default class Nav extends Component {
  render() {
    return (
      <div className="nav_bar">

        <nav>
          <NavLink className="home_button" exact to='/'>HB</NavLink>
          <NavLink exact to='/'><img className="logo" src={logo} alt="logo"/></NavLink>
          <NavLink className="about_button" to='/about'>About</NavLink>/
          <NavLink className="shop_button" to='/shop'>Shop</NavLink>/
          <NavLink className="support_button" to='/support'>Support</NavLink>
        </nav>

      </div>
    )
  }
}
