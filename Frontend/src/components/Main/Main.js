import React from 'react'
import './main.css'

export default function Main() {
  return (
    <div className='main-parent'>
        <header className='main-header'> Bonjour <span className='user-name'>Thomas</span></header>
        <div className='objective-result'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>     
    </div>
  )
}
