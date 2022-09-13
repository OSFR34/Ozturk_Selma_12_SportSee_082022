import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './graphs.css'
import BarGraph from '../BarGraph/BarGraph'
import LineGraph from '../LineGraph/LineGraph'
import RadarGraph from '../RadarGraph/RadarGraph'
import RadialBarGraph from '../RadialBarGraph/RadialBarGraph'
import PropTypes from 'prop-types'

 function Graphs(props) {

    const incomingAktivitePropu = props.activity   
    const incomingUserSessionsPropu = props.sessions
    const incomingUserPerformancePropu = props.performance
    const incomingUserScorePropu = props.score


  return (
    <div>
        <div className='aktivite-grafigi'>
            <BarGraph aktiviteProp = {incomingAktivitePropu} />
        </div>
        <div className='three-graphs'>
            <LineGraph  sessions = {incomingUserSessionsPropu}  />
            <RadarGraph performances = {incomingUserPerformancePropu} />
            <RadialBarGraph score  = {incomingUserScorePropu} />
        </div>
    </div>
  )
}
export default Graphs;
Graphs.propTypes = {
  aktiviteProp: PropTypes.object,
  sessions: PropTypes.object,
  performances:PropTypes.object,
  score:PropTypes.object
}
