import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards'
import Graphs from '../Graphs/Graphs'
import './main.css'

export default function Main(props) {

  const gelenUserInfoPropu = props.userInfoProp
  const gelenUserActivityPropu = props.activityDataProp
  const gelenUserSessionsPropu = props.userSessionsProp

  const [userScore, setUserScore] = useState(false)
  const [userMessage, setUserMessage] = useState(false)

  useEffect(() =>{
    setUserScore(gelenUserInfoPropu.score)
    if(userScore < 0.5){
      setUserMessage("Malheureusement 😕, vous n'avez pas atteint vos objectifs, mais vous pouvez rattraper votre retard à la prochaine séance")
    }else if (userScore >= 0.5){
      setUserMessage("Félicitation ! Vous avez explosé vos objectifs hier 👏 ")
    }
  })

  return (
    <div className='main-parent'>
        <header className='main-header'> Bonjour <span className='user-name'>
          { gelenUserInfoPropu ? gelenUserInfoPropu.userInfos.firstName:null
          
          }          
          </span></header>
        <div className='objectif-result'>
          {
            userMessage ? userMessage:null
          }          
        </div>   
        <div className='graphs-cards-row'>
          <Graphs activity={gelenUserActivityPropu} sessions={gelenUserSessionsPropu} />
          <Cards />
          
        </div>  
    </div>
  )
}
