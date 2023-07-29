import React from 'react'
import Navbar from '../components/Navbar'
import Settings from '../components/Settings'
import Sidebar from '../components/Sidebar'
import ChartHeader from '../components/ChartHeader'
import Bar1 from '../components/charts/Bar1'
import Pie1 from '../components/charts/Pie1';
import ThemeSettings from '../components/ThemeSettings';
import { useStateContext } from '../context';



const BarChart = () => {
  const {themeSettings} = useStateContext()
  return (
    <div className="relative h-min-screen flex dark:bg-black bg-white bg-opacity-70 backdrop-filter backdrop-blur-8 backdrop-brightness-125 backdrop-contrast-75">
        
      <div className="md:flex w-[60] h-[95vh] ml-4 hidden mx-2 top-3 relative">
        <Sidebar/>
      </div>
      <div className="flex-1 max-sm:w-full  mx-auto sm:p-5">
        <Navbar />
          
        <div className='gap-2 px-5'>
      <ChartHeader category='Charts' title='AreaChart' />
      <div className="flex flex-wrap gap-2 pt-5">
        <div className="w-full mt-0 lg:w-7/12 lg:flex-none  rounded-2xl bg-zinc-500 ">
          <div className="sm:pl-5 sm:p-3 justify-center">
            <Bar1 />
          </div>
        </div>
        <div className="w-full rounded-2xl items-center bg-white max-w-full lg:pt-5 px-4 lg:w-5/12 lg:flex-none">
            <Pie1 />
        </div>
      </div>
      {themeSettings && (<ThemeSettings />)}
    </div>
          
        </div>
        
      <Settings />
    </div>
  )
}

export default BarChart