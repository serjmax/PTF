import React, { Component } from 'react'
import './Footer.scss'

import {ReactComponent as Menu} from '../../Images/menu.svg'
import {ReactComponent as DWIcon} from '../../Images/dw_icon.svg'
import {ReactComponent as Designworkout} from '../../Images/designworkout.svg'

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__lead" style={{ gridColumn: "2 / 12", gridRow: "1 / 4", marginTop: '48px'}}>
                        designworkout — новая система обучения и развития профессиональных навыков для дизайнеров, которая включает в себя проекты era, online, campus, ревю, offline, campus creative day, trainbrain    
                    </div> 
                    <div className="footer__menu" style={{ gridColumn: "1 / 6", gridRow: "4 / 4"}}>
                        <a href="http://menu.dimabarbanel.com"><Menu style={{ width: '60px', marginLeft: '12px' }}/></a>
                        <a href="http://designworkout.ru"><DWIcon style={{ width: '60px', marginLeft: '12px' }}/><Designworkout style={{width: '230px', marginLeft: '24px', position: 'relative', top: '-12px'}}/></a>
                    </div>
                    <div className="footer__contacts" style={{ gridColumn: "10 / 13", gridRow: "4 / 4"}}>
                        <a className="footer__contacts-button" href="http://contacts.dimabarbanel.com">контакты</a>
                    </div> 
                </div>
            </div>
        )
    }
}
