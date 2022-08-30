import React,{useEffect} from 'react'
import './horizontalNav.css'
import logoImage from '../../images/logo.svg'

export default function HorizontalNav() {

  return (
    <div className='horizontal-nav-parent'>
        <div className='logo-area'>
          <img className='logo-image' src={logoImage}  />
        </div>
        <div className='accueil-link'>Accueil</div>
        <div className='profil-link'>Profil</div>
        <div className='reglage-link'>Reglagé</div>
        <div className='communaute-link'>Communauté</div>
    </div>
  )
}
