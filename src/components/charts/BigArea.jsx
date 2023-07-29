'use client';
import React from 'react'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useStateContext } from '../../context';

const data1 = [
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

const BigArea = () => {
  const { incomeData } = useStateContext()
  
  const formatedData = incomeData.map((item)=> ({
    mode : item.mode,
    description : item.description,
    amount : item.amount,
    date : new Date(item.date).toLocaleDateString()
  }))

  const highestAmount = Math.max(...incomeData.map(d => d.amount));
  const interval = highestAmount / 10;
  
  console.log(formatedData)
  return (
    <div>
        <ResponsiveContainer width="95%" height={500}>
          <AreaChart
            data={formatedData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
          <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
          </defs>
            <XAxis dataKey="mode" />
            <YAxis    
                      interval={interval}
                      tickFormatter={value => `${value} (${highestAmount})`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="amount"
              stackId="1"
              stroke="#2451B7"
              fill="url(#color)"
            />
   
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default BigArea
