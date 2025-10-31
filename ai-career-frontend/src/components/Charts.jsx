import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#6366F1','#06B6D4','#F97316']

export default function Charts({data}){
  const chartData = data.map((d, i)=> ({name: d.career, value: Math.round(d.confidence*100)}))
  return (
    <div style={{width:'100%', height:240}} className="glass p-3 rounded-md">
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={chartData} innerRadius={50} outerRadius={80} label>
            {chartData.map((entry, idx)=>(<Cell key={idx} fill={COLORS[idx%COLORS.length]} />))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
