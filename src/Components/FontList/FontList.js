import React, { Component } from 'react'
import FontForm from '../FontForm/FontForm';
import Script from 'react-load-script'

export default class FontList extends Component {
  state = {
    fonts: [
      {id: 15, name: 'Potexa Bold', link: 'Poteha-Bold', word: 'ПОТЕШНЫЙ ПОЛК', specimen: "", price: 'pezDH', fontSize: "109px", lineHeight: "203px", marginTop: "-22px"},
      {id: 16, name: 'Potexa Regular', link: 'Poteha-Regular', word: 'ГЕКСАГОНЫЧ', specimen: "", price: 'SRUws', fontSize: "106px", lineHeight: "203px", marginTop: "-21px"},
      {id: 1, name: 'Artemi', link: 'AFForm-Regular', word: 'артемий лебедев', specimen: "", price: 'ybhO', fontSize: "113pt", lineHeight: "261px", marginTop: "-49px"},
      {id: 2, name: 'Form Bold', link: 'Form-Bold', word: 'GROTESKO RYLLO', specimen: "", price: 'giRbi', fontSize: "78pt", lineHeight: "184px", marginTop: "0"},
      {id: 3, name: 'Fuller', link: 'Fuller-Regular', word: 'Папа Юлий 3', specimen: "", price: 'LzxTK', fontSize: "143px", lineHeight: "200px", marginTop: "-31px"},
      {id: 4, name: 'Germanica', link: 'Germanica-Regular', word: 'Бетон Песок', specimen: "", price: 'Vxiao', fontSize: "146px", lineHeight: "203px", marginTop: "-35px"},
      {id: 5, name: 'Handwrt', link: 'Handwrt-Regular', word: 'ну чё, как ты?', specimen: "", price: 'PNzd', fontSize: "98px", lineHeight: "200px", marginTop: "12px"},
      {id: 6, name: 'Hrustal', link: 'Hrustal', word: 'Хрусталь 0123', specimen: "", price: 'zBIDT', fontSize: "149px", lineHeight: "240px", marginTop: "-42px"},
      {id: 7, name: 'Matisse', link: 'MATISSE-Regular', word: 'youth is the time', specimen: "", price: 'fQRDN', fontSize: "101px", lineHeight: "186px", marginTop: "-8px"},
      {id: 8, name: 'MC-Cutter', link: 'MC-Cutter-Regular', word: 'Значительный', specimen: "", price: 'LZuP', fontSize: "133px", lineHeight: "195px", marginTop: "-29px"},
      {id: 9, name: 'MC-Worms Outline', link: 'MC-Worms-Outline', word: 'МУРАВЬИ КОМАРЫ', specimen: "", price: 'OgVTv', fontSize: "105px", lineHeight: "171px", marginTop: "0"},
      // {id: 10, name: 'MC-Worms Solid', link: 'MC-Worms-Solid', word: 'дизайн', specimen: "", price: 2000, fontSize: "136px", lineHeight: "190px", marginTop: "-22px"},
      {id: 11, name: 'Meteorito Bold', link: 'Meteorito-Bold', word: 'THIS IS FOREST GUMP', specimen: "", price: 'qHIwm', fontSize: "100px", lineHeight: "171px", marginTop: "0"},
      {id: 12, name: 'Naturalist', link: 'Naturalist-Regular', word: 'Козюля и Нос', specimen: "", price: 'SwPPoh', fontSize: "117px", lineHeight: "203px", marginTop: "-5px"},
      {id: 13, name: 'Ocbita', link: 'Ocbt', word: 'Привет Братья', specimen: "", price: 'weZey', fontSize: "104px", lineHeight: "203px", marginTop: "-12px"},
      {id: 14, name: 'Pitcrew', link: 'Pitcrew-Regular', word: 'Скорость и отвага', specimen: "", price: 'qDctD', fontSize: "104px", lineHeight: "166px", marginTop: "0"},
      {id: 17, name: 'Siberia', link: 'Siberia-Regular', word: 'сны журавлёнка ', specimen: "", price: 'fUVbN', fontSize: "101px", lineHeight: "191px", marginTop: "0"},
      {id: 18, name: 'Tempo Outline 1', link: 'Tempo-Outline1', word: 'Дизайн 2019', specimen: "", price: 'NuYug', fontSize: "135px", lineHeight: "237px", marginTop: "-45px"},
      {id: 19, name: 'Tempo Outline 2', link: 'Tempo-Outline2', word: 'брошка Про!', specimen: "", price: 'WIufb', fontSize: "134px", lineHeight: "193px", marginTop: "-23px"},
      {id: 20, name: 'Tempo Regular', link: 'Tempo-Regular', word: 'Motto & Fun', specimen: "", price: 'QZWdx', fontSize: "134px", lineHeight: "190px", marginTop: "-22px"},
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
