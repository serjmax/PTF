import React, { Component } from 'react'
import './CrossSelling.scss'

import {ReactComponent as Manifesto5} from '../../Images/manifesto_5.svg'

export default class FontExample extends Component {

  render() {
      return (      
        <div className="cross-selling">
              <div className="cross-selling__container">
                <div className="cross-selling__header" style={{ gridColumn: "1 / 13", gridRow: "1 / 1"}}>
                  PLAY FACES TYPEFOUNDRY
                </div>
                <div className="cross-selling__image" style={{ gridColumn: "1 / 7", gridRow: "2 / 8"}}>
                <Manifesto5 style={{width: '274px'}}/>
                </div>
                <div className="cross-selling__content" style={{ gridColumn: "7 / 12", gridRow: "2 / 7"}} >
                  <p>мы принимаем в библиотеку шрифты, созданные с помощью модульных линеек designworkout® + playtype и другие экспериментальные шрифты.</p>
                  <a className="cross-selling__content-link" style={{marginTop: '12px', display: 'inline-block'}} href="mailto:vladimir.kolomeytcev@gmail.com?subject=Вова, хочу продавать свой шрифт">пиши вове коломейцеву</a>
                  <p style={{marginTop: '49px', display: 'inline-block'}}>если хочешь научиться создавать шрифты, приходи в сampus на недельные интенсивы</p>
                  <a className="cross-selling__content-link" style={{marginTop: '12px', display: 'inline-block'}} href="https://campus.designworkout.ru/playtype/">designworkout playtype</a>
                  <span className="cross-selling__content-dates">14—19 октября</span>
                </div>
                <p style={{ gridColumn: "2 / 7", gridRow: "7 / 7", alignSelf: 'end', fontSize: '18px'}}>оперативная связь</p>
                <p style={{ gridColumn: "7 / 12", gridRow: "7 / 7", marginBottom: '36px', alignSelf: 'end', fontSize: '18px'}}>группа <a className="cross-selling__content-link" href="https://t.me/playfaces">play faces</a> в telegram</p>
                <p style={{ gridColumn: "7 / 12", gridRow: "7 / 7", alignSelf: 'end', fontSize: '18px'}}>группа <a className="cross-selling__content-link" href="https://t.me/designworkout_org">designworkout org</a> в telegram</p>
            </div>
        </div>
      )
  }
}