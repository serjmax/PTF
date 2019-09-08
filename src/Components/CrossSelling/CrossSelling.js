import React, { Component } from 'react'
import './CrossSelling.scss'

export default class FontExample extends Component {

  render() {
      return (      
        <div 
          style={{
            backgroundColor: 'white'
          }}
          className="cross-selling">
            <div 
            className="cross-selling__header"
            style={{}}
            >
            THE REAL PLAY TYPEFOUNDRY
            </div>
            <div className="cross-selling__image"></div>
            <div className="cross-selling__content"></div>
            <div className="cross-selling__footer"></div>
        </div>
      )
  }
}