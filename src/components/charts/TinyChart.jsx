'use client';
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from 'recharts';
import { useStateContext } from '../../context';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TinyChart = () => {
  const { incomeData } = useStateContext()


  const highestAmount = Math.max(...incomeData.map(d => d.amount));
  const interval = highestAmount / 30;

  return (
    <div className="">
      <ResponsiveContainer width="90%" height={350}>
        <LineChart  data={incomeData}>
          <YAxis    
                      interval={interval}
               
            />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}



export default TinyChart
