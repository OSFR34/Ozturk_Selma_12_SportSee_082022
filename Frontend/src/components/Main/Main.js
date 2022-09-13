import React,{useState,useEffect} from 'react'
import Cards from '../Cards/Cards';
import Graphs from '../Graphs/Graphs';
import './main.css'
import PropTypes from 'prop-types'

export default function Main(props) {

  const incomingUserInfoPropu = props.userInfoProp
  const incomingUserActivityPropu = props.activityDataProp
  const incomingUserSessionsPropu = props.sessionsProp
  const incomingUserPerformancePropu = props.performanceProp
  const incomingUserScorePropu = props.todayScoreProp
  const incomingUserCardsPropu = props.cardsProp

  const [userScore,setUserScore] = useState(false)
  const [userMessage,setUserMessage] = useState(false)
  

  useEffect(() => {
    setUserScore(incomingUserInfoPropu.score)
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
          incomingUserInfoPropu ? incomingUserInfoPropu.userInfos.firstName:null
        }
        </span></header>
      <div className='objective-result'>
        {
          userMessage ? userMessage:null
        }
      </div>

      <div className='graphs-cards-row'>
          <Graphs activity={incomingUserActivityPropu} sessions = {incomingUserSessionsPropu} performance = {incomingUserPerformancePropu} score={incomingUserScorePropu} />
          <Cards cards = {incomingUserCardsPropu} />
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
