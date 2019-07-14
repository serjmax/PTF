import React, { Component } from 'react'

export default class FontExample extends Component {
    render() {
        return (
            <div style={{height: "300px"}} className="twelve nested">
                <div className="four body_20x24">
                    Artemi
                </div>

                <div className="four body_20x24">
                    Latin / Кириллица
                </div>

                <div style={{textAlign: "end"}} className="four body_20x24">
                    2000 ₽
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
                    fontFamily: "Germanica-Regular", 
                    fontSize: "118pt", 
                    // height: "278px", 
                    marginTop: "-146px",
                    lineHeight: "160pt"}}
                    className="twelve"
                    >
                    Hello!
                </div>
            </div>
        )
    }
}
