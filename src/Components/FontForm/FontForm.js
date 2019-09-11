import React, { Component } from 'react'
import './FontForm.scss'

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
    const white = "#f7f7f7";

      return ( 
          <div 
            className="font-form"
            style={{
              height: "252px",
              width: "100%"
            }} 
            >

              <div 
                className="font-form__upper-line"
                style={{
                  borderTop: "solid 1px", 
                  marginLeft: "-14px",
                  paddingRight: "28px",
                  marginBottom: "6px",
                  width: "100%",
                  borderColor: white
                }}>  
              </div>

              <div 
                className="font-form__font-name"
                style={{
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: white,
                  textTransform: "lowercase",
                  width: "336px",
                  display: "inline-block"
                }}  
              >
                {this.props.name}
              </div>

              <a 
                className="font-form__specimen-link"
                style={{
                  color: white,
                  fontSize: '16px',
                  lineHeight: '16px',
                  width: "336px",
                  display: "inline-block",
                  textAlign: 'center'
                }}
                href={this.props.specimen}
                >PDF</a>

              <a 
                className="font-form__price"
                href={"https://gum.co/" + this.props.price}
                style={{
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: white,
                  width: "324px",
                  display: "inline-block",
                  textAlign: "end",
                  textDecoration: "none"
                }} 
              > $25
              </a>
              <div 
                className="font-form__input-wrapper"
                style={{
                  overflow: 'hidden',
                  height:' 210px'
                }}
                >
                <input
                  onClick={this.handleFocus}
                  style={{
                    color: white,
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
                  className="font-form__input-font" 
                />
              </div>

              <div
                onClick={this.handleUnhide} 
                style={{
                  width: "100%",
                  backgroundColor: `${this.state.isToggleOn ? "black" : "black"}`,
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