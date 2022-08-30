import React,{useState,useEffect} from 'react'

import axios from 'axios'
import './graphs.css'
import BarGraph from '../BarGraph/BarGraph'
import LineGraph from '../LineGraph/LineGraph'
import RadarGraph from '../RadarGraph/RadarGraph'
import RadialBarGraph from '../RadialBarGraph/RadialBarGraph'

export default function Graphs(props) {

    const gelenAktivitePropu = props.activity   
    const gelenUserSessionsPropu = props.sessions
    const gelenUserPerformancePropu = props.performance
    const gelenUserScorePropu = props.score


  return (
    <div>
        <div className='aktivite-grafigi'>
            <BarGraph aktiviteProp = {gelenAktivitePropu} />
        </div>
        <div className='three-graphs'>
            <LineGraph  sessions = {gelenUserSessionsPropu}  />
            <RadarGraph performances = {gelenUserPerformancePropu} />
            <RadialBarGraph score  = {gelenUserScorePropu} />
        </div>
    </div>
  )
}
