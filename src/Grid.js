import React, { Component } from 'react'
import './smart-grid.css'

const numbers = new Array(950);
for (let i = 1; i < numbers.length; i++) {
    numbers[i] = i;  
}

const listItems = numbers.map((number) =>
    <div key={number} style={{borderTop: "solid 1px rgba(100,100,250, 0.2)", background: "rgba(100,100,250, 0.2)"}} className="styling one">
    <div style={{height: "11px", borderBottom: "solid 1px rgba(100,100,250, 0.2)"}} className="grid__baseline"></div>
    <div style={{height: "11px", borderBottom: "solid 1px rgba(100,100,250, 0.2)"}} className="grid__baseline"></div>
    <div style={{height: "11px", borderBottom: "solid 1px rgba(100,100,250, 0.2)"}} className="grid__baseline"></div>
    <div style={{height: "11px", borderBottom: "solid 1px rgba(100,100,250, 0.2)"}} className="grid__baseline"></div>
    <div style={{height: "11px", borderBottom: "solid 1px rgba(100,100,250, 0.2)"}} className="grid__baseline"></div>
    <div style={{height: "11px", borderBottom: "solid 1px rgba(100,100,250, 0.2)"}} className="grid__baseline"></div>
    </div>
);

export default class Grid extends Component {
    
  state = {
    isToggleOn: false,
    isZoomOn: false
  };
    
  handleClick = () => {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
  }

  handleZoom = () => {
    const htmlElement = document.documentElement;
    // const windowWidth = window.innerWidth;
    const windowWidth = 1280;
    const zoom = windowWidth / 1024;
    console.log(zoom);
    
    this.setState(state => ({
      isZoomOn: !state.isZoomOn
    }));
    
    if (this.state.isZoomOn) {
      htmlElement.style = `zoom: ${zoom}`;
    } else htmlElement.style = "zoom: 1"
  }

  componentDidMount(){
    const htmlElement = document.documentElement;
    const windowWidth = window.screen.width > 600 ? 1280: window.screen.width
    const zoom = windowWidth / 1024;
    htmlElement.style = `zoom: ${zoom}`;
    console.log(windowWidth);
    console.log(window.screen.width);
    
  }
    
    render() {
      // const zoom = window.innerWidth / 1024;
      const zoom = 1280 / 1024;
        return (
            <React.Fragment>
                <button 
                    style={{
                        position: "fixed",
                        top: "0",
                        right: "0",
                        zIndex: "9999999999999"
                    }}
                    onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button 
                    style={{
                        position: "fixed",
                        top: "20px",
                        right: "0",
                        zIndex: "9999999999999"
                    }}
                    onClick={this.handleZoom}>
                        {this.state.isZoomOn ? 'Zoom: 0' : `${zoom}`}
                </button>
                <div 
                    style={{padding: "14px 14px", width: "1024px", position: "absolute", zIndex: "9999999", top: "0"}}
                    className={this.state.isToggleOn ? 'main': 'grid-off'}>
                        {listItems}  
                </div>
            </React.Fragment>
        )
    }
}
