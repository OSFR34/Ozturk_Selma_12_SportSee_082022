import logoImage from '../../images/logo.svg'
import React from 'react'
import './horizontalNav.css'

export default function HorizontalNav() {
  return (
    <div className='horizontal-nav-parent'>
      <div className="logo-area">
        <img className="logo-image" src={logoImage} />
      </div> 
      <div className="accueil-link">Accueil</div>
      <div className="profil-link">Profil</div>
      <div className="reglage-link">Réglage</div>
      <div className="communaute-link">Communauté</div>   
    </div>
  )
}

