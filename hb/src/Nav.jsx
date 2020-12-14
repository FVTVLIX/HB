import React, { Component } from 'react'
import './Nav.css'
import { Link, NavLink, Switch, Route } from 'react-router-dom'
import logo from './images/HB Logo.png'


export default class Nav extends Component {
  render() {
    return (
      <div className="nav_bar">

        <NavLink exact to='/home'><img className="logo" src={logo} alt="logo" /></NavLink>
        {/* <NavLink className="home_button" exact to='/'>HB</NavLink> */}
        <nav>
          <NavLink className="about_button" to='/about'>About</NavLink>/
          <NavLink className="shop_button" to='/shop'>Shop</NavLink>/
          <NavLink className="support_button" to='/support'>Support</NavLink>
        </nav>

      </div>
    )
  }
}
