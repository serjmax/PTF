import React, { Component } from 'react'
import FontForm from '../FontForm/FontForm';
import Script from 'react-load-script'

export default class FontList extends Component {
  state = {
    fonts: [
      {id: 15, name: 'Potexa Bold', link: 'Poteha-Bold', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 16, name: 'Potexa Regular', link: 'Poteha-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 1, name: 'Artemi', link: 'AFForm-Regular', word: 'Дух времени', specimen: "", price: 2000, fontSize: "113pt", lineHeight: "261px", marginTop: "-49px"},
      {id: 2, name: 'Form Bold', link: 'Form-Bold', word: 'Бесстрашие', specimen: "", price: 2000, fontSize: "78pt", lineHeight: "184px", marginTop: "0"},
      {id: 3, name: 'Fuller', link: 'Fuller-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "143px", lineHeight: "200px", marginTop: "-31px"},
      {id: 4, name: 'Germanica', link: 'Germanica-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-42px"},
      {id: 5, name: 'Handwrt', link: 'Handwrt-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "127px", lineHeight: "200px", marginTop: "0"},
      {id: 6, name: 'Hrustal', link: 'Hrustal', word: 'дизайн', specimen: "", price: 2000, fontSize: "193px", lineHeight: "240px", marginTop: "-30px"},
      {id: 7, name: 'Matisse', link: 'MATISSE-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "107px", lineHeight: "186px", marginTop: "0"},
      {id: 8, name: 'MC-Cutter', link: 'MC-Cutter-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "133px", lineHeight: "195px", marginTop: "-29px"},
      {id: 9, name: 'MC-Worms Outline', link: 'MC-Worms-Outline', word: 'дизайн', specimen: "", price: 2000, fontSize: "105px", lineHeight: "171px", marginTop: "0"},
      {id: 10, name: 'MC-Worms Solid', link: 'MC-Worms-Solid', word: 'дизайн', specimen: "", price: 2000, fontSize: "136px", lineHeight: "190px", marginTop: "-22px"},
      {id: 11, name: 'Meteorito Bold', link: 'Meteorito-Bold', word: 'дизайн', specimen: "", price: 2000, fontSize: "100px", lineHeight: "171px", marginTop: "0"},
      {id: 12, name: 'Naturalist', link: 'Naturalist-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 13, name: 'Ocbita', link: 'Ocbt', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 14, name: 'Pitcrew', link: 'Pitcrew-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 17, name: 'Siberia', link: 'Siberia-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 18, name: 'Tempo Outline 1', link: 'Tempo-Outline1', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 19, name: 'Tempo Outline 2', link: 'Tempo-Outline2', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
      {id: 20, name: 'Tempo Regular', link: 'Tempo-Regular', word: 'дизайн', specimen: "", price: 2000, fontSize: "165px", lineHeight: "203px", marginTop: "-12px"},
    ]
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    
    return (
      
      <div>
        <Script
          url="https://gumroad.com/js/gumroad.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
          {this.state.fonts.map((font) => 
            <FontForm 
              key={font.id} 
              name={font.name}
              link={font.link}
              word={font.word}
              language={font.language}
              price={font.price}
              fontSize={font.fontSize}
              lineHeight={font.lineHeight}
              marginTop={font.marginTop}
              selected={true}/>
          )} 
      </div>
    )
  }
}
