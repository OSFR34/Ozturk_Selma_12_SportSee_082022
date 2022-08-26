import React, {useState, useEffect} from 'react'
import{BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import axios from 'axios'

export default function Graphs(props) {

const gelenAktivityPropu = props.activity
const gelenUserSessionsPropu = props.sessions
  return (
    <div>
        <div className='aktivitéQuotidienne'>
          <BarChart width={'100%'} height={320} data={gelenAktivityPropu}>
            <CartesianGrid strokeDasharray={"1 1"} />
            <XAxis keyName="day" />
          </BarChart>
          
        </div>    
    </div>
  )
}
