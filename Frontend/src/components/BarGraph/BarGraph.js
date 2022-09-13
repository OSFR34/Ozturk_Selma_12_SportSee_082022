import React from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts'
import './barGraph.css'

export default function BarGraph(props) {
    const incomingUserActivityPropu = props.aktiviteProp;
  return (
    <div style={{ position:'relative' }} className="bar-graph-parent">
      <p className='activity-title'>Activité quotidienne</p>
            <BarChart width={835} height={320}  data={incomingUserActivityPropu}>
                 {/*CartesianGrid =Grille cartésienne  */}
                <CartesianGrid vertical={false} strokeDasharray="3 3"/> 
                   {/*XAxis= axe des abscisses  */}
                <XAxis dataKey="id" />
                {/* YAxis= axe des ordonnées */}
                <YAxis orientation='right' />
                {/* Tooltip=info-bulle */}
                <Tooltip />
                <Legend verticalAlign="top" align='right'  height={25} iconType="circle" />
                {/* fill=background ; barSize=épaisseur de la barre*/}
                <Bar name="Poids (kg)" dataKey="kilogram" fill="#282d30" barSize={20}  />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#e60000" barSize={20}  />
            </BarChart>
    </div>
  )
}
