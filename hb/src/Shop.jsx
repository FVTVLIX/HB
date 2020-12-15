import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
  DotGroup,
  Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from './images/img1.jpeg'
import image2 from './images/img2.jpeg'
import image3 from './images/img3.jpeg'
import image4 from './images/img4.jpg'
import image5 from './images/img5.jpeg'
import image6 from './images/img6.jpeg'
import image7 from './images/img7.jpeg'
import image8 from './images/img8.jpeg'
import image9 from './images/img9.jpg'
import image10 from './images/img10.jpg'
import image11 from './images/img11.jpg'
import image12 from './images/img12.jpg'
import Nav from './Nav'
import './Shop.css'
const data = require('./products.json')




export default class Shop extends Component {
  constructor() {
    super()

    this.state = {

    };
  }

  render() {

    const item = data
    return (
      <div>
        <Link>

          <Nav />

          <CarouselProvider
            interval={4000}
            isPlaying={true}
            naturalSlideHeight={125}
            naturalSlideWidth={100}
            visibleSlides={3}
            totalSlides={12}>

            <Slider>
              <Slide index={0}><img className="slider_image" src={image1} alt={image1} /></Slide>
              <Slide index={1}><img className="slider_image" src={image2} alt={image2} /></Slide>
              <Slide index={2}><img className="slider_image" src={image3} alt={image3} /></Slide>
              <Slide index={3}><img className="slider_image" src={image4} alt={image4} /></Slide>
              <Slide index={4}><img className="slider_image" src={image5} alt={image5} /></Slide>
              <Slide index={5}><img className="slider_image" src={image6} alt={image6} /></Slide>
              <Slide index={6}><img className="slider_image" src={image7} alt={image7} /></Slide>
              <Slide index={7}><img className="slider_image" src={image8} alt={image8} /></Slide>
              <Slide index={8}><img className="slider_image" src={image9} alt={image9} /></Slide>
              <Slide index={9}><img className="slider_image" src={image10} alt={image10} /></Slide>
              <Slide index={10}><img className="slider_image" src={image11} alt={image11} /></Slide>
              <Slide index={11}><img className="slider_image" src={image12} alt={image12} /></Slide>
            </Slider>

            <DotGroup className='slider' />
            <ButtonFirst className='navbutton2'>First</ButtonFirst>
            <ButtonBack className='navbutton'>Back</ButtonBack>
            <ButtonNext className='navbutton'>Next</ButtonNext>
            <ButtonLast className='navbutton'>Last</ButtonLast>
          </CarouselProvider>
        </Link>

        {item.map(item => {
          return (
            <>
              <div className='shop-container'>
                <div key={item.id} className='item-box'>
                  <Link
                  to={`/shop/${item.id}`}>
                    <img className='item-image' alt='shop item' src={item.images[0]} />
                    <h1 className='item-title'>{item.name}</h1>
                    <h2 className='item-price'>{item.price}</h2>
                  </Link>
                </div>
              </div>
            </>
          )
        })}
      </div>
    )
  }
}
