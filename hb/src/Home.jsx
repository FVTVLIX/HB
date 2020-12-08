import React, { Component } from 'react'
import './Home.css'
import Nav from './Nav'
import { Link, NavLink } from 'react-router-dom'
import JeansSale from './images/JeansSale.jpg'
import MensAccessories from './images/MensAccessories.jpg'
import MensSpring from './images/MensSpring.jpg'
import SummerImage from './images/SummerImage.jpg'
import WomensAccessories from './images/WomensAccessories.jpg'



export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />


        <div className='summer'>
          <h2 className='bannertext'>Summer Collection 2021</h2>
          <Link className='homelinks' exact to='/shop'>
            <img className='summerimage' src={SummerImage} alt='SummerImage.jpg' />
          </Link>
        </div>

        <div className='jeans'>
          <h2 className='bannertext'>Jeans Sale</h2>
          <h3 className='bannertext2'>Up to 80% Off!</h3>
          <Link className='homelinks' exact to='/shop'>
            <img className='jeansimage' src={JeansSale} alt='JeansSaleImage.jpg' />
          </Link>

        </div>

        <div className='mensacc'>
          <h2 className='bannertext'>Men's Accessories</h2>
          <Link className='homelinks' exact to='/shop'>
            <img className='mensaccessories' src={MensAccessories} alt='MensAccessories.jpg' />
          </Link>

        </div>

        <div className='spring'>
          <h2 className='bannertext3'>Men's S/S 2021</h2>
          <Link className='homelinks' exact to='/shop'>
            <img className='mensspring' src={MensSpring} alt='MensSpring.jpg' />
          </Link>

        </div>

        <div className='womensacc'>
          <h2 className='bannertext3'>Women's Accessories</h2>
          <Link className='homelinks' exact to='/shop'>
            <img className='womensaccessories' src={WomensAccessories} alt='WomensAccessories.jpg' />
          </Link>

        </div>


      </div>
    )
  }
}
