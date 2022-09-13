import React, { useEffect, useState } from 'react'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'
import './radialBar.css'

export default function RadialBarGraph(props) {

  const incomingUserScorePropu = props.score
  const data = [
    {
      "name": "",
      "uv": incomingUserScorePropu.todayScore * 100,
      "pv": 2400,
      "fill": "#ff0000",
    },
    {
      "name": "25-29",
      "uv": 100,
      "pv": 4567,
      "fill": "#fbfbfb"
    },
    {
      "name": "30-34",
      "uv": 100,
      "pv": 1398,
      "fill": "#fbfbfb"
    },
    {
      "name": "35-39",
      "uv": 100,
      "pv": 9800,
      "fill": "#fbfbfb"
    },
    {
      "name": "40-49",
      "uv": 100,
      "pv": 3908,
      "fill": "#fbfbfb"
    },
    {
      "name": "50+",
      "uv": 100,
      "pv": 4800,
      "fill": "#fbfbfb"
    },
    {
      "name": "unknow",
      "uv": 100,
      "pv": 4800,
      "fill": "#fbfbfb"
    }
  ]



  return (
    <div className='radial-chart-parent'>
      <p className='radial-title'>Score</p>
      <p className='radial-description'>
        <div>
          {
            incomingUserScorePropu.todayScore * 100 + ' %'
          }
        </div>
        <span className='description-text'>
          de votre objectif
        </span>
        
      </p>
      {/* innerRadius=rayon intérieur; startAngle=Angle de départ; insideStart=commencez à l'intérieur */}
      <RadialBarChart
        width={258}
        height={328}
        innerRadius="100%" 
        outerRadius="0%"
        data={data}
        startAngle={0}
        endAngle={360} >
        <RadialBar  minAngle={0} label={{ fill: '#fff', position: 'insideStart' }} background={true}  clockWise={false} dataKey='uv' />
        <Tooltip />
      </RadialBarChart>
    </div>
  )
}
