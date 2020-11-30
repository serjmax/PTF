import React, { Component } from 'react';
import FontForm from '../FontForm/FontForm';

export default class FontList extends Component {
  state = {
    fonts: [
      {id: 15, name: 'Potexa Bold', link: 'Poteha-Bold', word: 'ПОТЕШНЫЙ ПОЛК', specimenLink: 'https://www.dropbox.com/s/h4vctw8lbj7rsdo/Potexa%20bold.pdf?raw=1', gumroadLink: 'https://gum.co/pezDH', price: '$25', fontSize: "109px", lineHeight: "203px", marginTop: "-22px"},
      {id: 16, name: 'Potexa Regular', link: 'Poteha-Regular', word: 'ГЕКСАГОН 9/1', specimenLink: 'https://www.dropbox.com/s/zgo8tukw5ht1r4g/Potexa%20regular.pdf?raw=1', gumroadLink: 'https://gum.co/SRUws', price: '$25', fontSize: "106px", lineHeight: "203px", marginTop: "-21px"},
      {id: 24, name: 'Unicial', link: 'Unicial-Regular', word: 'Приветик дружные вимпирята', specimenLink: 'https://www.dropbox.com/s/7vcu5csof9suvsc/Uncial.pdf?raw=1', gumroadLink: 'https://gum.co/JRRKV', price: '$25', fontSize: "104px", lineHeight: "213px", marginTop: "-21px"},
      {id: 23, name: 'Giovanni', link: 'Giovanni-Regular', word: 'Play Faces foundry In Da MIX', specimenLink: '', gumroadLink: 'mailto:vladimir.kolomeytcev@gmail.com', price: 'upon request', fontSize: "144px", lineHeight: "214px", marginTop: "-39px"},
      {id: 1, name: 'Afform', link: 'AFForm-Regular', word: 'артемий лебедев', specimenLink: 'https://www.dropbox.com/s/77cp308k5u7759b/Afform.pdf?raw=1', gumroadLink: 'https://gum.co/ybhO', price: '$25', fontSize: "113pt", lineHeight: "261px", marginTop: "-49px"},
      {id: 2, name: 'Form Bold', link: 'Form-Bold', word: 'GROTESKO RYLLO', specimenLink: 'https://www.dropbox.com/s/fnl5cbv8kaoukmu/Forma%20bold.pdf?raw=1', gumroadLink: 'mailto:vladimir.kolomeytcev@gmail.com', price: 'upon request', fontSize: "78pt", lineHeight: "184px", marginTop: "0"},
      {id: 3, name: 'Fuller', link: 'Fuller-Regular', word: 'Папа Юлий 3', specimenLink: 'https://www.dropbox.com/s/iqzcxtay8ze31jd/Fuller.pdf?raw=1', gumroadLink: 'https://gum.co/LzxTK', price: '$25', fontSize: "143px", lineHeight: "200px", marginTop: "-31px"},
      {id: 4, name: 'Germanica', link: 'Germanica-Regular', word: 'Бетон Песок', specimenLink: 'https://www.dropbox.com/s/ftsfvclv32o6ta4/Germanica.pdf?raw=1', gumroadLink: 'https://gum.co/Vxiao', price: '$25', fontSize: "146px", lineHeight: "203px", marginTop: "-35px"},
      {id: 5, name: 'Handwrt', link: 'Handwrt-Regular', word: 'ну чё, как ты?', specimenLink: 'https://www.dropbox.com/s/60qmcp0d52qzccq/Handwrt.pdf?raw=1', gumroadLink: 'https://gum.co/PNzd', price: '$25', fontSize: "98px", lineHeight: "200px", marginTop: "12px"},
      {id: 6, name: 'Hrustal', link: 'Hrustal', word: 'Хрусталь 0123', specimenLink: 'https://www.dropbox.com/s/r23s1gy3bytopgx/Hrustal%2013.pdf?raw=1', gumroadLink: 'https://gum.co/zBlDT', price: '$25', fontSize: "149px", lineHeight: "240px", marginTop: "-42px"},
      {id: 7, name: 'Matisse', link: 'MATISSE-Regular', word: 'youth is the time', specimenLink: 'https://www.dropbox.com/s/7iq0232fw2wmm3n/Matisse.pdf?raw=1', gumroadLink: 'https://gum.co/fQRDN', price: '$25', fontSize: "101px", lineHeight: "186px", marginTop: "-8px"},
      {id: 8, name: 'MC-Cutter', link: 'MC-Cutter-Regular', word: 'Значительный', specimenLink: 'https://www.dropbox.com/s/o8w147niogx63wb/Cutter.pdf?raw=1', gumroadLink: 'https://gum.co/LZuP', price: '$25', fontSize: "133px", lineHeight: "195px", marginTop: "-29px"},
      {id: 9, name: 'MC-Worms Outline', link: 'MC-Worms-Outline', word: 'МУРАВЬИ КОМАРЫ', specimenLink: 'https://www.dropbox.com/s/s4xf7y8y6i28ln0/Worms.pdf?raw=1', gumroadLink: 'https://gum.co/OgVTv', price: '$25', fontSize: "105px", lineHeight: "171px", marginTop: "0"},
      {id: 11, name: 'Meteorito Bold', link: 'Meteorito-Bold', word: 'THIS IS FOREST GUMP', specimenLink: 'https://www.dropbox.com/s/8kxdkre3pevl91f/Meteorito.pdf?raw=1', gumroadLink: 'https://gum.co/qHlwm', price: '$25', fontSize: "100px", lineHeight: "171px", marginTop: "0"},
      {id: 12, name: 'Naturalist', link: 'Naturalist-Regular', word: 'Козюля и Нос', specimenLink: 'https://www.dropbox.com/s/w3vx0e7owmple5q/Naturalist.pdf?raw=1', gumroadLink: 'https://gum.co/SwPPoh', price: '$25', fontSize: "117px", lineHeight: "203px", marginTop: "-5px"},
      {id: 13, name: 'Ocbita', link: 'Ocbt', word: 'Привет Братья', specimenLink: 'https://www.dropbox.com/s/b2srh7r4pgo2ok1/Ocbita.pdf?raw=1', gumroadLink: 'https://gum.co/weZey', price: '$25', fontSize: "104px", lineHeight: "203px", marginTop: "-12px"},
      {id: 14, name: 'Pitcrew', link: 'Pitcrew-Regular', word: 'Скорость и отвага', specimenLink: 'https://www.dropbox.com/s/beigbpgty9ixv4c/Pitcrew.pdf?raw=1', gumroadLink: 'https://gum.co/qDctD', price: '$25', fontSize: "104px", lineHeight: "166px", marginTop: "0"},
      {id: 17, name: 'Siberia', link: 'Siberia-Regular', word: 'сны журавлёнка ', specimenLink: 'https://www.dropbox.com/s/ipwdlydohq2cej5/Siberia.pdf?raw=1', gumroadLink: 'https://gum.co/fUVbN', price: '$25', fontSize: "101px", lineHeight: "191px", marginTop: "0"},
      {id: 18, name: 'Tempo Outline 1', link: 'Tempo-Outline1', word: 'Дизайн 2019', specimenLink: 'https://www.dropbox.com/s/gxa4vek10jbx8s7/Tempo%20outline%201.pdf?raw=1', gumroadLink: 'https://gum.co/NuYug', price: '$25', fontSize: "135px", lineHeight: "237px", marginTop: "-45px"},
      {id: 19, name: 'Tempo Outline 2', link: 'Tempo-Outline2', word: 'брошка Про!', specimenLink: 'https://www.dropbox.com/s/x08ahwa39vegblq/Tempo%20outline%202.pdf?raw=1', gumroadLink: 'https://gum.co/WIufb', price: '$25', fontSize: "134px", lineHeight: "193px", marginTop: "-23px"},
      {id: 20, name: 'Tempo Regular', link: 'Tempo-Regular', word: 'Motto & Fun', specimenLink: 'https://www.dropbox.com/s/ddqngbu9wdp5s0u/Tempo%20regular.pdf?raw=1', gumroadLink: 'https://gum.co/QZWdx', price: '$25', fontSize: "134px", lineHeight: "190px", marginTop: "-22px"},
      {id: 21, name: 'Moskek', link: 'MC-Moskek-Regular', word: 'Транквилизатор', specimenLink: 'https://www.dropbox.com/s/515h6xgxd8ln5i7/Moskek.pdf?raw=1', gumroadLink: 'https://gum.co/wxPRd', price: '$25', fontSize: "134px", lineHeight: "190px", marginTop: "-22px"},
      {id: 22, name: 'Medieval', link: 'Medieval-Regular', word: 'Сосиски гриль', specimenLink: '', gumroadLink: 'mailto:vladimir.kolomeytcev@gmail.com', price: 'upon request', fontSize: "134px", lineHeight: "190px", marginTop: "-22px"},
    ]
  }

  render() {
    
    return (  
      <div>
          {this.state.fonts.map((font) => 
            <FontForm 
              key={font.id} 
              name={font.name}
              link={font.link}
              specimenLink={font.specimenLink}
              word={font.word}
              language={font.language}
              gumroadLink={font.gumroadLink}
              fontSize={font.fontSize}
              price={font.price}
              lineHeight={font.lineHeight}
              marginTop={font.marginTop}
              selected={true}/>
          )} 
      </div>
    )
  }
}
