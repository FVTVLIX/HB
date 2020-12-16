import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './ShopItem.css'
import Nav from './Nav'
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

class ShopItem extends Component {


  render() {

    const index = (parseInt(this.props.match.params.index))


    return (
      <div>
        <Nav />


        <div className='main-container'>
          <div className='item-container1'>
            <h1 className='shopitem-name'>{this.props.items[index].name}</h1>
            <button type='button' className='add-cart'>+Cart</button>
            <button type='button' className='add-gift'>+Wishlist</button>
          </div>
          <div className='item-container2'>
            <h2 className='shopitem-description'>{this.props.items[index].description}</h2>
          </div>
          <div className='item-container3'>
            <p className='shopitem-price'>{this.props.items[index].price}</p>
            <p className='shopitem-color'>Color: {this.props.items[index].color}</p>
            <p className='shopitem-size'>Size: {this.props.items[index].size}</p>
          </div>
        </div>

        <CarouselProvider
          interval={4000}
          isPlaying={true}
          naturalSlideHeight={50}
          naturalSlideWidth={50}
          visibleSlides={3}
          totalSlides={4}>

          <Slider>
            <Slide index={0}>
              <img
                className="item_image"
                src={this.props.items[index].images[0]}
                alt={this.props.items[index].images[0]} />
            </Slide>
            <Slide index={1}>
              <img
                className="item_image"
                src={this.props.items[index].images[1]}
                alt={this.props.items[index].images[1]} />
            </Slide>
            <Slide index={2}>
              <img
                className="item_image"
                src={this.props.items[index].images[2]}
                alt={this.props.items[index].images[2]} />
            </Slide>
            <Slide index={3}>
              <img
                className="item_image"
                src={this.props.items[index].images[3]}
                alt={this.props.items[index].images[3]} />
            </Slide>
          </Slider>

          <DotGroup className='slider' />
          <ButtonFirst className='navbutton2'>First</ButtonFirst>
          <ButtonBack className='navbutton'>Back</ButtonBack>
          <ButtonNext className='navbutton'>Next</ButtonNext>
          <ButtonLast className='navbutton'>Last</ButtonLast>
        </CarouselProvider>

      </div>
    )
  }
}


export default withRouter(ShopItem);