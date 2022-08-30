import React from 'react'
import './card.css'
import caloryIcon from '../../images/calories-icon.svg'
import proteinIcon from '../../images/protein-icon.svg'
import glucideIcon from '../../images/carbs-icon.svg'
import lipidIcon from '../../images/fat-icon.svg'

export default function Cards(props) {
  const gelenUserCardsInfo = props.cards
  
  return (
    <div>
        <div className='calory-card'>
          <div className='calory-card-body'>
            <div><img src={caloryIcon} /></div>
            <div>
              <p style={{ fontSize:"20px",fontWeight:'700',marginLeft:'24px' }}>
                {
                  gelenUserCardsInfo ? gelenUserCardsInfo.calorieCount + 'kCal' :'-'
                }
              </p>
              <p style={{ fontSize:'14px',marginLeft:'24px',color:'#74798C',marginTop:'10px' }}>Calories</p>
            </div>
          </div>
        </div>
        <div className='protein-card'>
          <div className='protein-card-body'>
            <div><img src={proteinIcon} /></div>
            <div>
              <p style={{ fontSize:"20px",fontWeight:'700',marginLeft:'24px' }}>
                {
                  gelenUserCardsInfo ? gelenUserCardsInfo.proteinCount + 'g' :'-'
                }
              </p>
              <p style={{ fontSize:'14px',marginLeft:'24px',color:'#74798C',marginTop:'10px' }}>Proteines</p>
            </div>
          </div>
        </div>
        <div className='glucide-card'>
          <div className='glucide-card-body'>
            <div><img src={glucideIcon} /></div>
            <div>
              <p style={{ fontSize:"20px",fontWeight:'700',marginLeft:'24px' }}>
                {
                  gelenUserCardsInfo ? gelenUserCardsInfo.carbohydrateCount + 'g' :'-'
                }
              </p>
              <p style={{ fontSize:'14px',marginLeft:'24px',color:'#74798C',marginTop:'10px' }}>Glucides</p>
            </div>
          </div>
        </div>
        <div className='lipid-card'>
          <div className='lipid-card-body'>
            <div><img src={lipidIcon} /></div>
            <div>
              <p style={{ fontSize:"20px",fontWeight:'700',marginLeft:'24px' }}>
                {
                  gelenUserCardsInfo ? gelenUserCardsInfo.lipidCount + 'g' :'-'
                }
              </p>
              <p style={{ fontSize:'14px',marginLeft:'24px',color:'#74798C',marginTop:'10px' }}>Lipides</p>
            </div>
          </div>
        </div>

    </div>
  )
}
