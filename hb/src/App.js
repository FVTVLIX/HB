import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, NavLink } from 'react-router-dom'
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
import image4 from './images/img4.jpeg'
import image5 from './images/img5.jpeg'
import image6 from './images/img6.jpeg'
import image7 from './images/img7.jpeg'
import image8 from './images/img8.jpeg'
import Nav from './Nav'



class App extends Component {
  constructor() {
    super()

    this.state = {

    };
  }

  render() {

    return (
      <div className="App">

        <Nav />

        <CarouselProvider
          interval={4000}
          isPlaying={true}
          naturalSlideHeight={125}
          naturalSlideWidth={100}
          visibleSlides={3}
          totalSlides={8}>
          <Slider>
            <Slide index={0}><img className="slider_image" src={image1} /></Slide>
            <Slide index={1}><img className="slider_image" src={image2} /></Slide>
            <Slide index={2}><img className="slider_image" src={image3} /></Slide>
            <Slide index={3}><img className="slider_image" src={image4} /></Slide>
            <Slide index={4}><img className="slider_image" src={image5} /></Slide>
            <Slide index={5}><img className="slider_image" src={image6} /></Slide>
            <Slide index={6}><img className="slider_image" src={image7} /></Slide>
            <Slide index={7}><img className="slider_image" src={image8} /></Slide>
          </Slider>
          <DotGroup />
          <ButtonFirst>First</ButtonFirst>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
          <ButtonLast>Last</ButtonLast>
        </CarouselProvider>
      </div>
    )
  };
}

export default App;
