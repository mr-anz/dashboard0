import React from 'react'
import { useCallback, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useStateContext } from '../../context';

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ffa500']; // Custom colors for each segment


const Pie2 = () => {
 
  return (
    <div>
      <ResponsiveContainer width="95%" height={350}>
        <PieChart width={400} height={400}>
 
          <Pie dataKey="value" nameKey="name" data={data02} innerRadius={60} outerRadius={100} fill="#82ca9d  label={(entry) => entry.name}">
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Pie2