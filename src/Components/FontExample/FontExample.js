import React, { Component } from 'react'
import './FontExample.scss'

export default class FontExample extends Component {

  state = {
    isToggleOn: true,
  };
    
  handleFocus = () => {
    this.setState(state => ({
      isToggleOn: false
    }));
  }

  handleUnhide = () => {
    this.setState(state => ({
      isToggleOn: true
    }));
  }

  render() {
    console.log('props', this.props);
    
      return (      
          <div 
            style={{
              height: "252px",
              width: "100%"
            }} 
            className="">

              <div 
                className="body_20x24"
                style={{
                  width: "336px",
                  display: "inline-block"
                }}  
              >
                {this.props.name}
              </div>

              <div 
                className="body_20x24"
                style={{
                  width: "336px",
                  display: "inline-block"
                }}
                >{this.props.language}</div>

              <div 
                className="body_20x24"
                style={{
                  width: "324px",
                  display: "inline-block",
                  textAlign: "end"
                }} 
              >{this.props.price} ₽</div>

              <div 
                style={{
                  borderTop: "solid 2px", 
                  marginLeft: "-14px",
                  paddingRight: "28px",
                  marginTop: "2px",
                  width: "100%"
                }}>  
              </div>

              <input
                onClick={this.handleFocus}
                style={{
                  zIndex: `${this.state.isToggleOn ? "0" : "2"}`,
                  fontFamily: `${this.props.link}`,
                  fontSize: `${this.props.fontSize}`, 
                  lineHeight: `${this.props.lineHeight}`,
                  width: "100%",
                  border: "none",
                  padding: "0",
                  backgroundColor: "#ffffff00",
                  marginTop: `${this.props.marginTop}`,
                  position: "relative",
                }} 
                type="text" 
                placeholder={this.props.word}
                name="name"
                className="input-font" 
              />

              <div
                onClick={this.handleUnhide} 
                style={{
                  width: "100%",
                  backgroundColor: `${this.state.isToggleOn ? "white" : "white"}`,
                  position: `${this.state.isToggleOn ? "relative" : "fixed"}`,
                  height: `${this.state.isToggleOn ? "100%" : "100vh"}`,
                  zIndex: `${this.state.isToggleOn ? "0" : "1"}`,
                  top: `${this.state.isToggleOn ? "" : "0"}`,
                  left: `${this.state.isToggleOn ? "" : "0"}`,
                  display: `${this.state.isToggleOn ? "none" : "block"}`
                }}
              
              >
              </div>
              {/* <div
                
                style={{
                  fontFamily: `${this.props.link}`,
                  fontSize: "118pt", 
                  // height: "278px", 
                  marginTop: "-146px",
                  lineHeight: "160pt"}}
                  className="twelve"
                  >
                    {this.props.word}
                  
              </div> */}
          </div>
      )
  }
}