import React from 'react'
import './radarGraph.css'
import{RadarChart, PolaGrid, PolarGrid, PolarAngleAxis, Radar, LegendType, PolarRadiusAxis} from 'recharts'

export default function RadarGraph() {

const gelenUserPerformancePropu = props.performances

  return (
    <div className='radar-chart-parent'>
       <RadarChart outerRadius={90} width={500} height={258} data={gelenUserPerformancePropu}>
          <PolarGrid />
          <PolarAngleAxis dataKey= 'kind' />
          <PolarRadiusAxis angle={30} domain={[0,150]} />
          {
            gelenUserPerformancePropu.data.map(userPerformanceInfo =>{
              return(
                <Radar name={gelenUserperformancePropu.kind[]}
              )
            })
          }
       </RadarChart>
      
    </div>
  )
}
