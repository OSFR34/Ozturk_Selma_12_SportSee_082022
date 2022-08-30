import React from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts'
import './barGraph.css'

export default function BarGraph(props) {
    const gelenUserActivityPropu = props.aktiviteProp;
  return (
    <div style={{ position:'relative' }} className="bar-graph-parent">
      <p className='activity-title'>Activité quotidienne</p>
            <BarChart width={835} height={320}  data={gelenUserActivityPropu}>   
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>    
                <XAxis dataKey="id" />
                <YAxis orientation='right' />
                <Tooltip />
                <Legend verticalAlign="top" align='right'  height={25} iconType="circle" />
                <Bar name="Poids (kg)" dataKey="kilogram" fill="#282d30" barSize={20}  />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#e60000" barSize={20}  />
            </BarChart>
    </div>
  )
}
