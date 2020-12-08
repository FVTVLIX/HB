import React, { Component } from 'react'
import './About.css'
import Nav from './Nav'
import StoreImage from './images/StoreImage.jpg'


export default class About extends Component {
  render() {
    return (
      <div>

        <Nav />

        <img className='storeimage' src={StoreImage} alt='Store Image.jpg' />

        <h1 className='abouttitle'>We Are HB</h1>
          
        <p className='aboutquote'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>

        <div className='description'>


          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus turpis, lobortis eu ornare ut, laoreet id sem. Donec congue cursus dui mattis imperdiet. Integer auctor enim ligula, id tincidunt metus consequat varius. Cras et neque vel erat consequat laoreet. Suspendisse leo urna, varius sit amet elit ac, placerat semper nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In facilisis nibh a eros ultricies, eget tempus nisi condimentum. Cras sit amet nibh nunc. Mauris congue nulla a commodo bibendum. Fusce pulvinar, nisi tempus congue semper, eros lorem volutpat nibh, ut eleifend risus sapien sed mi. Aliquam hendrerit nisi massa, eget hendrerit ipsum vehicula ut. Duis in sem at sem molestie ornare nec consequat purus.</p>

          <p>Nullam aliquam maximus aliquam. Morbi semper orci non elit venenatis vehicula. Nunc tincidunt auctor nisi non suscipit. Quisque eu gravida magna, sit amet sagittis ipsum. In consequat tempus libero, nec eleifend mi. Phasellus iaculis, lorem sit amet fermentum pretium, felis mi tristique urna, non tincidunt lorem metus ut neque. Sed ut mi velit. Curabitur luctus dui lectus, vel volutpat justo mattis et. Nulla fermentum neque tortor, vitae luctus arcu sagittis sit amet. Aenean ac luctus erat. Fusce et varius elit.</p>

          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a magna varius, imperdiet lorem in, porta nunc. Proin vitae ligula est. Etiam nisl nunc, maximus id urna ultricies, varius dapibus nisi. Aliquam commodo, odio nec fringilla consectetur, lorem arcu ornare diam, sit amet gravida ante nulla in elit. Nullam porta nunc nec magna venenatis fringilla. Nam feugiat vel neque at viverra. Vestibulum mollis ut neque quis iaculis. Maecenas diam lacus, tempus eu enim a, blandit condimentum est. Vestibulum et diam aliquet, lobortis odio quis, placerat justo. Pellentesque odio arcu, pulvinar in aliquam eu, viverra eu ligula. Donec rhoncus porttitor lectus, vel sagittis odio commodo non.</p>

          <p>Praesent aliquet congue ex id dictum. Nam metus magna, porttitor vulputate placerat non, mattis et velit. Donec ut turpis dapibus, posuere massa vel, placerat elit. Integer sagittis dapibus faucibus. Etiam bibendum iaculis diam, quis ornare ex pellentesque eget. In hac habitasse platea dictumst. Praesent hendrerit dolor pulvinar rhoncus auctor. Donec sit amet tempor turpis.</p>
        </div>

      </div>
    )
  }
}
