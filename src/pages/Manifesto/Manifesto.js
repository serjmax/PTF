import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Manifesto.scss';
import '../../smart-grid.css'

import Grid from '../../Grid';

import {ReactComponent as Logo} from '../../Images/kiosk_logo_color.svg';
import {ReactComponent as LogoSign} from '../../Images/DW_KIOSK_graphic_51.svg';
import Image1 from './images/1.jpg';
import FooterImage from './images/footer.jpg';
import {ReactComponent as Image52} from './images/DW_KIOSK_graphic_52.svg';
import ImageBreakDance from './images/x_9b9a488d.jpeg';
import {ReactComponent as Image8} from './images/Group8.svg';

import Footer from '../../Components/Footer/Footer';

export default class Manifesto extends Component {
  render() {
    return (
      <div className="manifesto-page">
        <Grid/>
        <div className="manifesto-page__main">
          <Logo style={{fill: '#000000'}} className="two"/>
          <div 
            style={{ 
              gridColumn: "1 / 3",
              gridRow: "2 / 2"
            }}>
              <Link className="manifesto-page__nav-link" to="/">FONTS</Link>
              <Link className="manifesto-page__nav-link" to="/manifesto/">MANIFESTO</Link>
              <a href="https://kiosk.works/playtype/" className="manifesto-page__nav-link">PLAYTYPE</a>
          </div>
          <div className="manifesto-page__image" style={{gridArea: '1 / 5 / 5 / 9'}}>
            <img src={Image1} style={{width: '324px'}} alt=""/>
          </div>
          <LogoSign 
            style={{
              width: "156",
              height: '156',
              fill: '#000000',
              gridColumn: "11 / 13",
              gridRow: "1 / 3"
            }}
          />
        </div>

        <div className="manifesto-page__text-container">

          <div className="manifesto-page__text">
            <p>MODERN TYPOGRAPHY IS ABOUT THE ZEITGEIST AND NERVE OF TIME.SPEED IS THE ACUITY OF THE IMAGE.</p>
            <p style={{marginTop: '24px'}}>СОВРЕМЕННАЯ ТИПОГРАФИКА — ЭТО ПРО ДУХ И НЕРВ ВРЕМЕНИ.СКОРОСТЬ — ЭТО ОСТРОТА ОБРАЗА.</p>
          </div>

          <div className="manifesto-page__image" style={{marginTop: '50px'}}>
            <img src={Image1} style={{width: '324px'}} alt=""/>
          </div>

          <div className="manifesto-page__text" style={{gridRow: "8", marginTop: '24px'}}>
            <p>WE INITIATE THE GENERATION AND RESEARCH OF NEW GRAPHIC FORMS IN THE FONT.</p>
            <p style={{marginTop: '24px'}}>МЫ ИНИЦИИРУЕМ ФОРМИРОВАНИЕ И ИССЛЕДОВАНИЕ НОВЫХ ГРАФИЧЕСКИХ ФОРМ В ШРИФТЕ.</p>
            <p style={{marginTop: '24px'}}>OUR TYPEFOUNDRY IS A GREEDY SEARCH FOR EXPERIMENTS IN THE FIELD OF FONT AND A NEW LOOK AT TYPOGRAPHY IN GENERAL.</p>
            <p style={{marginTop: '24px'}}>PLAY FACE TYPEFOUNDRY — ЭТО ЖАДНЫЙ ПОИСК ЭКСПЕРИМЕНТОВ В ОБЛАСТИ ШРИФТА И НОВЫЙ ВЗГЛЯД НА ТИПОГРАФИКУ В ЦЕЛОМ.</p>
          </div>

          <div className="manifesto-page__image" style={{ marginTop: '50px'}}>
            <img src={Image1} style={{width: '324px'}} alt=""/>
          </div>

          <div className="manifesto-page__text" style={{ marginTop: '24px'}}>
            <p style={{marginTop: '24px'}}>OUR TYPEFOUNDRY IS A CRUSADE TO THE FONT MADE BY THE GRAPHIC DESIGNER. FONT IS AN INFINITE SOURCE OF NEW FORMS AND TECHNIQUES FOR GRAPHIC DESIGN.</p>
            <p style={{marginTop: '24px'}}>НАША СЛОВОЛИТНЯ — КРЕСТОВЫЙ ПОХОД ГРАФИЧЕСКОГО ДИЗАЙНЕРА НА ШРИФТ. ШРИФТ — БЕСКОНЕЧНЫЙ ИСТОЧНИК НОВЫХ ФОРМ И ПРИЁМОВ ДЛЯ ГРАФИЧЕСКОГО ДИЗАЙНА.</p>
          </div>

          <div className="manifesto-page__image" style={{}}>
            <img src={Image1} style={{width: '324px'}} alt=""/>
          </div>

          <div className="manifesto-page__text twelve">
            <p>WE ARE FOR LIVELY AND BUOYANT THINGS, NOT DEAD ACADEMIC RULES.</p>
            <p>МЫ ЗА ЖИВЫЕ И БОДРЫЕ ВЕЩИ, А НЕ МЁРТВЫЕ АКАДЕМИЧЕСКИЕ ПРАВИЛА.</p>
          </div>
          
          <div className="manifesto-page__image" style={{}}>
            <img src={Image1} style={{width: '324px'}} alt=""/>
          </div>

          <div className="manifesto-page__text twelve">
            <p>OUR MISSION IS TO SHAKE UP THE DOMESTIC MARKET. WE CALL ON GRAPHIC DESIGNERS TO CREATE AND MATCH UP FONTS FOR STAND-ALONE PROJECTS, JOIN THE GLOBAL CONTEXT, DEVELOP OUR NICHE AREA AND FONT AS A SYSTEM.</p>
            <p>НАША ЗАДАЧА — ВСТРЯХНУТЬ ОТЕЧЕСТВЕННЫЙ РЫНОК. МЫ ПРИЗЫВАЕМ ГРАФИЧЕСКИХ ДИЗАЙНЕРОВ СОЗДАВАТЬ И ПОДБИРАТЬ ШРИФТЫ ПОД ОТДЕЛЬНЫЕ ПРОЕКТЫ, ВКЛЮЧИТЬСЯ В МИРОВОЙ КОНТЕКСТ, РАЗВИВАТЬ НИШУ И ШРИФТ КАК СИСТЕМУ.</p>
          </div>

          <div className="manifesto-page__image" style={{}}>
            <Image8 style={{width: '324px'}}/>
          </div>

          <div className="manifesto-page__text twelve">
            <p>FONTS ARE A WORKING MODEL, NOT EMPTY EXPERIMENTS. PRACTICAL APPLICATION OF EXPERIMENTAL FONTS IS THE MOST IMPORTANT GOAL OF OUR LETTER FOUNDRY.</p>
            <p>ШРИФТЫ — ЭТО РАБОЧАЯ МОДЕЛЬ, А НЕ ЭКСПЕРИМЕНТЫ В СТОЛ. ПРАКТИЧЕСКОЕ ПРИМЕНЕНИЕ ЭКСПЕРИМЕНТАЛЬНЫХ ШРИФТОВ — ВАЖНЕЙШАЯ ЦЕЛЬ НАШЕЙ СЛОВОЛИТНИ.</p>
          </div>

          <div className="manifesto-page__image" style={{}}>
            <img src={Image1} style={{width: '324px'}} alt=""/>
          </div>

          <div className="manifesto-page__text twelve">
            <p>PLAY FACE TYPEFOUNDRYIS THE MANIFESTATION AND SYNTHESIS OF FONT COURSE PLAYTYPE. DAUNTLESS COURAGE, SPEED, CHARACTER STUDY AND WORKING WITH FORM ARE THE BASICS OF THE PLAYTYPE COURSE.</p>
            <p>PLAY FACE TYPEFOUNDRY— МАТЕРИАЛИЗАЦИЯ И ОБОБЩЕНИЕ ШРИФТОВОГО КУРСА PLAYTYPE. БЕССТРАШИЕ, СКОРОСТЬ, ПОИСК ОБРАЗА И РАБОТА С ФОРМОЙ — ОСНОВЫ КУРСА PLAYTYPE.</p>
          </div>

          <div className="manifesto-page__image" style={{}}>
            <img src={ImageBreakDance} style={{width: '324px'}} alt=""/>
          </div>

          <div className="manifesto-page__text twelve">
            <p>THE FONTS OF THE LETTER FOUNDRY WERE SELECTED AND FURTHER REFINED BY THE SUPERVISORS OF THE PROJECT.</p>
            <p>ШРИФТЫ СЛОВОЛИТНИ ОТОБРАНЫ И ДОРАБОТАНЫ КУРАТОРОМ ПРОЕКТА — ВЛАДИМИРОМ КОЛОМЕЙЦЕВЫМ.</p>
          </div>

          <div className="manifesto-page__image" style={{}}>
            <Image52 style={{width: '324px'}}/>
          </div>

          <div className="manifesto-page__text twelve">
            <p>ALL TRP TYPEFOUNDRY FONTS INCLUDE CYRILLIC SET.ALL TRP TYPEFOUNDRY.</p>
            <p>ВСЕ ШРИФТЫ ИМЕЮТ КИРИЛЛИЧЕСКОЕ НАЧЕРТАНИЕ.</p>
          </div>

          <div className="manifesto-page__image" style={{}}>
            <img src={FooterImage} style={{width: '100%'}} alt=""/>
          </div>

        </div>

        {/* <Footer/> */}
       
    </div>
    )
  }
}