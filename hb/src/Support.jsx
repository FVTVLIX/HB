import React, { Component } from 'react'
import './Support.css'
import Nav from './Nav'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class Support extends Component {

  render() {

    // const style = {
    //   width: '800px',
    //   height: '500px'
    // }

    const containerStyle = {
      position: 'absolute',
      width: '100%',
      height: '50%'
    }

    return (
      <>
        <div>
          <Nav />

          <h1 className='contactus'>Contact Us</h1>

          <h3>A 4-min walk from Washington Square Park!</h3>

          <h3>27 W 8th St, New York, NY 10011</h3>
          <h3>(212) 228-5166</h3>
          <h3>Mon - Thurs: 12-8 PM</h3>
          <h3>Fri - Sun: 12-9 PM</h3>

          <Map
            google={this.props.google}
            zoom={13}
            initialCenter={{
              lat: 40.723686,
              lng: -74.002375
            }}
            // style={style}>
            containerStyle={containerStyle}>
            <Marker />
          </Map>


        </div>

      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAWxGMwWUX37uslDWjHe9uG3tVB6xYrwao')
})(Support);
