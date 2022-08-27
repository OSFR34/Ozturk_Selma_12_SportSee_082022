import React from 'react'
import './lineGraph.css'
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts'

export default function LineGraph(props) {
  
  const gelenUserSessionsPropu = props.sessions

  const reformatSessionData = (sessiondata) => {
      sessiondata.map(item => {
        switch(item.day){
          case 1:
            item.day = "L"
            break;
          case 2:
            item.day = "M"
            break;
          case 3:
            item.day = "M"
            break;
          case 4:
            item.day = "J"
            break;
          case 5:
            item.day = "V"
            break;
          case 6:
            item.day = "S"
            break;
          case 7:
            item.day = "D"
            break;
        }
      })
  }
  // props.sessions ? reformatSessionData(gelenUserSessionsPropu):null;

  if(props.sessions){
  reformatSessionData(gelenUserSessionsPropu)
  }

  return (
    <div style={{marginTop:"30px"}} className="Line-parent">
      <p className="line-chart-tiltle">Durée moyenne des sessions</p>
      <LineChart  width={500}  height={263} data={gelenUserSessionsPropu} >
        /* axisLine:line du bas; stroke: border; fill:background-color; tick: petit tiret du bas juste audessus des jours de la semaine */
            <XAxis dataKey="day"  axisLine = {{stroke:"white"}}  stroke="white" />
            <Tooltip labelStyle={{display:'none' }} />
            <Line style={{ stroke:"white"}} type="monotone" dataKey="sessionLength" strokeWidth={2} stroke="white"  activeDot={{stroke:"white", strokeWidth:"2" , r:5, fill:"White" }} />
      </LineChart>       
    </div>
  )
}

