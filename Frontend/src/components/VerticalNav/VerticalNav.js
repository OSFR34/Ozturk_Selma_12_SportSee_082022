import React from 'react'
import './verticalNav.css'
import icon1 from '../../images/icon-1.svg'
import icon2 from '../../images/icon-2.svg'
import icon3 from '../../images/icon-3.svg'
import icon4 from '../../images/icon-4.svg'

export default function VerticalNav() {
  return (
    <div className='vertical-nav-parent'>
        <div className='icon-group'>
            <div> <img src={icon1}/></div>
            <div> <img src={icon2}/></div>
            <div> <img src={icon3}/></div>
            <div> <img src={icon4}/></div>       
        </div>
        <div className='copyright-text'>Copiryght, SportSee { new Date(Date.now()).getFullYear() } </div>
    </div>
  )
}
