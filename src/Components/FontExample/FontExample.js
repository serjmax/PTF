import React, { Component } from 'react'

export default class FontExample extends Component {
    
    render() {
      console.log('props', this.props);
      
        return (      
            <div style={{height: "252px"}} className="twelve nested">
                <div className="four body_20x24">
                  {this.props.name}
                </div>

                <div className="four body_20x24">
                  {this.props.language}
                </div>

                <div style={{textAlign: "end"}} className="four body_20x24">
                  {this.props.price} ₽
                </div>
                <div style={{
                    borderTop: "solid 2px", 
                    marginLeft: "-14px",
                    marginRight: "-14px",
                    marginTop: "-50px"
                }} 
                className="twelve"></div>
                <div 
                  style={{
                    fontFamily: `${this.props.link}`,
                    fontSize: "118pt", 
                    // height: "278px", 
                    marginTop: "-146px",
                    lineHeight: "160pt"}}
                    className="twelve"
                    >
                    {this.props.word}
                </div>
            </div>
        )
    }
}
