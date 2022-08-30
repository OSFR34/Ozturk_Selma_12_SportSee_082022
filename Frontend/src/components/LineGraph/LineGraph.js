import React, { useEffect, useState } from 'react'
import './lineGraph.css'
import {LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line} from 'recharts'


export default function LineGraph(props) {

  const gelenUserSessionsPropu = props.sessions;

  
  const reFormatSessionData = (sessionData) => {
    sessionData.map(item => {
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
  

// props.sessions ? reFormatSessionData(gelenUserSessionsPropu):null;
 if(props.sessions){
  reFormatSessionData(gelenUserSessionsPropu)
 }

  return (
    <div style= {{ marginTop:"30px" }} className="line-parent">
      <p className='line-chart-title'>Durée moyenne des sessions</p>
        <LineChart width={258} height={263} data={gelenUserSessionsPropu} >
              <XAxis dataKey="day" axisLine = {{ stroke:"white" }} stroke="white" style={{ opacity:'0.5',fontWeight:'bold' }} />
              <Tooltip labelStyle={{ display:'none' }} />
              <Line style={{ stroke:"white" }} type="monotone" dataKey="sessionLength" strokeWidth={2}  activeDot={{ stroke:"white", strokeWidth:'2' , r:5, fill:"white" }}  />
        </LineChart>
    </div>
  )
}
