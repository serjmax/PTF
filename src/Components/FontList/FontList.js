import React, { Component } from 'react'
import FontForm from '../FontForm/FontForm';
import Script from 'react-load-script'

export default class FontList extends Component {
  state = {
    fonts: [
      {id: 15, name: 'Potexa Bold', link: 'Poteha-Bold', word: 'ПОТЕШНЫЙ ПОЛК', specimenLink: 'sh/6ne3zfzb28gcwqa/AAB8yKJ7u7kT28jvS_9_ALrka?dl=1', price: 'pezDH', fontSize: "109px", lineHeight: "203px", marginTop: "-22px"},
      {id: 16, name: 'Potexa Regular', link: 'Poteha-Regular', word: 'ГЕКСАГОНЫЧ', specimenLink: 'sh/by1fqjaqkqdiybr/AAA_gu3U7RgMZX30iy2ckQKta?dl=1', price: 'SRUws', fontSize: "106px", lineHeight: "203px", marginTop: "-21px"},
      {id: 1, name: 'Artemi', link: 'AFForm-Regular', word: 'артемий лебедев', specimenLink: 'sh/216ch1vvtg36mp1/AABIF-CAIYQsUK8V2PEjQz75a?dl=1', price: 'ybhO', fontSize: "113pt", lineHeight: "261px", marginTop: "-49px"},
      {id: 2, name: 'Form Bold', link: 'Form-Bold', word: 'GROTESKO RYLLO', specimenLink: 'sh/5ndmrswd8xonwmc/AAAA6iySse-gAy-UFy5YUKYIa?dl=1', price: 'giRbi', fontSize: "78pt", lineHeight: "184px", marginTop: "0"},
      {id: 3, name: 'Fuller', link: 'Fuller-Regular', word: 'Папа Юлий 3', specimenLink: 'sh/iv0d4w3zjyuy1ax/AACmkXTfpLwPNn35vI-3McN9a?dl=1', price: 'LzxTK', fontSize: "143px", lineHeight: "200px", marginTop: "-31px"},
      {id: 4, name: 'Germanica', link: 'Germanica-Regular', word: 'Бетон Песок', specimenLink: 'sh/y50vzj0swbiutlg/AADmPfmjuxm0eMk7a_Qg-96ma?dl=1', price: 'Vxiao', fontSize: "146px", lineHeight: "203px", marginTop: "-35px"},
      {id: 5, name: 'Handwrt', link: 'Handwrt-Regular', word: 'ну чё, как ты?', specimenLink: 'sh/a3a8n5wmm55k4k1/AACpB9aVFx0mJkh-k1eUPuQVa?dl=1', price: 'PNzd', fontSize: "98px", lineHeight: "200px", marginTop: "12px"},
      {id: 6, name: 'Hrustal', link: 'Hrustal', word: 'Хрусталь 0123', specimenLink: 'sh/atb6ifrnvpvodvl/AAC8UQNYkPQwO7q5pkhSX6Zua?dl=1', price: 'zBIDT', fontSize: "149px", lineHeight: "240px", marginTop: "-42px"},
      {id: 7, name: 'Matisse', link: 'MATISSE-Regular', word: 'youth is the time', specimenLink: 'sh/of1f3aa8q3nlf9j/AAB9gyQ-o3-G6kohP3snPTuZa?dl=1', price: 'fQRDN', fontSize: "101px", lineHeight: "186px", marginTop: "-8px"},
      {id: 8, name: 'MC-Cutter', link: 'MC-Cutter-Regular', word: 'Значительный', specimenLink: 'sh/mwzspfxjbypnn1q/AAAlc6MRsCY8vFMkzviJHnIga?dl=1', price: 'LZuP', fontSize: "133px", lineHeight: "195px", marginTop: "-29px"},
      {id: 9, name: 'MC-Worms Outline', link: 'MC-Worms-Outline', word: 'МУРАВЬИ КОМАРЫ', specimenLink: 'sh/la56s6x2kknwhns/AAAaTo9sXvDkEDQ5VHEmRJ8la?dl=1', price: 'OgVTv', fontSize: "105px", lineHeight: "171px", marginTop: "0"},
      {id: 11, name: 'Meteorito Bold', link: 'Meteorito-Bold', word: 'THIS IS FOREST GUMP', specimenLink: 'sh/90fdq7fjnbkj741/AAA9JI59Qx8O_zFOPAlr4P68a?dl=1', price: 'qHIwm', fontSize: "100px", lineHeight: "171px", marginTop: "0"},
      {id: 12, name: 'Naturalist', link: 'Naturalist-Regular', word: 'Козюля и Нос', specimenLink: 'sh/z79gq6ejat259dz/AAApY9dxjxw-tRdTKoRVZEKca?dl=1', price: 'SwPPoh', fontSize: "117px", lineHeight: "203px", marginTop: "-5px"},
      {id: 13, name: 'Ocbita', link: 'Ocbt', word: 'Привет Братья', specimenLink: 'sh/kjam1kmbvtzb7w9/AADpZo-JEQ81fcaEVhPD3xSja?dl=1', price: 'weZey', fontSize: "104px", lineHeight: "203px", marginTop: "-12px"},
      {id: 14, name: 'Pitcrew', link: 'Pitcrew-Regular', word: 'Скорость и отвага', specimenLink: 'sh/57qv9uwaeq7ewzx/AAAG2Y7S1ijuQePAA6981bATa?dl=1', price: 'qDctD', fontSize: "104px", lineHeight: "166px", marginTop: "0"},
      {id: 17, name: 'Siberia', link: 'Siberia-Regular', word: 'сны журавлёнка ', specimenLink: 'sh/gatokzffo9pcikr/AAD8AEHDiGi97S8zhnnok9Bqa?dl=1', price: 'fUVbN', fontSize: "101px", lineHeight: "191px", marginTop: "0"},
      {id: 18, name: 'Tempo Outline 1', link: 'Tempo-Outline1', word: 'Дизайн 2019', specimenLink: 'sh/esgacypbti1uvs3/AAAsdcrHci0nxPs0Z3uQlGzoa?dl=1', price: 'NuYug', fontSize: "135px", lineHeight: "237px", marginTop: "-45px"},
      {id: 19, name: 'Tempo Outline 2', link: 'Tempo-Outline2', word: 'брошка Про!', specimenLink: 'sh/0rvuieu7cs46iyt/AAACeAuDijVcsFXakjppfC_ea?dl=1', price: 'WIufb', fontSize: "134px", lineHeight: "193px", marginTop: "-23px"},
      {id: 20, name: 'Tempo Regular', link: 'Tempo-Regular', word: 'Motto & Fun', specimenLink: 'sh/67ti8zt6zv5czyo/AABU7J3x04UYFHgyGuyTax1ja?dl=1', price: 'QZWdx', fontSize: "134px", lineHeight: "190px", marginTop: "-22px"},
      {id: 21, name: 'Moskek', link: 'MC-Moskek-Regular', word: 'Транквилизатор', specimenLink: 'sh/ztus3x93rphm740/AAAHoh3EAxZXAwJciXl9kmtUa?dl=1', price: 'wxPRd', fontSize: "134px", lineHeight: "190px", marginTop: "-22px"}
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
              specimenLink={font.specimenLink}
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
