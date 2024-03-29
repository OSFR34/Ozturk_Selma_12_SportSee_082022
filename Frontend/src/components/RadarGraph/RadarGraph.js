import React from 'react'
import './radarGraph.css'
import {RadarChart,PolarGrid,PolarAngleAxis,Radar, PolarRadiusAxis} from 'recharts'

export default function RadarGraph(props) {

  const incomingUserPerformancePropu = props.performances

  const convertPerformanceKind = (performanceData) => {
    performanceData.data.map(value => {
      switch(value.kind){
        case 1:
          value.kind = performanceData.kind[1]
          break;
        case 2:
          value.kind = performanceData.kind[2]
          break;
        case 3:
          value.kind = performanceData.kind[3]
          break;
        case 4:
          value.kind = performanceData.kind[4]
          break;
        case 5:
          value.kind = performanceData.kind[5]
          break;
        case 6:
          value.kind = performanceData.kind[6]
          break;
      }
    })
  }

  if(props.performances){
    convertPerformanceKind(incomingUserPerformancePropu)
  }

  

  return (
    <div className='radar-chart-parent'>
      {/* outerRadius=diamètre extérieur */}
        <RadarChart outerRadius={90} width={258} height={318} data={incomingUserPerformancePropu.data}>
          {/* PolarGrid=Grille polaire */}
            <PolarGrid />
            {/* PolarAngleAxis=Axe d'angle polaire */}
            <PolarAngleAxis dataKey="kind" />
            {/* PolarRadiusAxis= Axe du rayon polaire*/}
            <PolarRadiusAxis angle={30} domain={[0, 240]} />
            {/* radar représente la partie en rouge  */}
            <Radar name={incomingUserPerformancePropu.kind} dataKey='value' stroke="#ff0101" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
    </div>
  )
}
