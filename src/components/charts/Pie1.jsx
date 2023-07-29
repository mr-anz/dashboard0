'use client';
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const Pie1 = () => {


  return (
    <div className='flex items-center'>
        <div className="w-8/12 ">
         <ResponsiveContainer width="95%" height={350}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        </div>
        <div className="flex flex-col  gap-3 w-4/12 text-[14]">
          {data.map((item) => (
            <div className="flex gap-3" key={item.name}>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 rounded-xl" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Pie1
