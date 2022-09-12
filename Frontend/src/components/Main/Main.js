import React,{useState,useEffect} from 'react'
import Cards from '../Cards/Cards';
import Graphs from '../Graphs/Graphs';
import './main.css'
import PropTypes from 'prop-types'

export default function Main(props) {

  const gelenUserInfoPropu = props.userInfoProp
  const gelenUserActivityPropu = props.activityDataProp
  const gelenUserSessionsPropu = props.sessionsProp
  const gelenUserPerformancePropu = props.performanceProp
  const gelenUserScorePropu = props.todayScoreProp
  const gelenUserCardsPropu = props.cardsProp

  const [userScore,setUserScore] = useState(false)
  const [userMessage,setUserMessage] = useState(false)
  

  useEffect(() => {
    setUserScore(gelenUserInfoPropu.score)
    if(userScore < 0.5){
      setUserMessage("Malheureusement 😞, vous n'avez pas atteint vos objectifs, vous pouvez rattraper votre retard à la prochaine séance ")
    }else if(userScore >= 0.5){
      setUserMessage("Félicitation ! Vous avez explosé vos objectifs hier 👏")
    }
  })

  return (
    <div className='main-parent'>
      <header className='main-header'>Bonjour <span className='user-name'>
        {
          gelenUserInfoPropu ? gelenUserInfoPropu.userInfos.firstName:null
        }
        </span></header>
      <div className='objective-result'>
        {
          userMessage ? userMessage:null
        }
      </div>

      <div className='graphs-cards-row'>
          <Graphs activity={gelenUserActivityPropu} sessions = {gelenUserSessionsPropu} performance = {gelenUserPerformancePropu} score={gelenUserScorePropu} />
          <Cards cards = {gelenUserCardsPropu} />
      </div>

    </div>
  )
}

Main.propTypes = {
  activity:PropTypes.object,
  sessions:PropTypes.object,
  performance:PropTypes.object,
  score:PropTypes.object,
  cards:PropTypes.object
}
