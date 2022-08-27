import React, {useState, useEffect} from 'react'
import{BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import axios from 'axios'
import BarGraph from '../BarGraph/BarGraph'
import LineGraph from '../LineGraph/LineGraph'
import RadialGraph from '../RadialBarGraph/RadialGraph'
import RadarGraph from '../RadarGraph/RadarGraph'
import './graphs.css'


export default function Graphs(props) {

const gelenAktivityPropu = props.activity
const gelenUserSessionsPropu = props.sessions
const gelenUserPerformancePropu = props.performance
  return (
    <div>
        <div className='activity-graph'>       
           <BarGraph activity={gelenAktivityPropu} />
        </div>
        <div className= 'three-graphs'>
          <LineGraph sessions = {gelenUserSessionsPropu}/>
          {/* j'ai rajouté un s à la fin de performance pour ne pas confondre avec de la ligne 15, il est tout de même possible de choisir le même nom. cette différence permet de ne plus se poserla question d'où vient le mot performance*/}
          <RadarGraph performances = {gelenUserPerformancePropu} />
          < RadialBarGraph/>
        </div>          
    </div>
  )
}
