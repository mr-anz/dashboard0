
import React from "react"


import Pie1 from "./charts/Pie1"
import TinyChart from "./charts/TinyChart"
import TinyArea from "./charts/TinyArea"
import Pie2 from "./charts/Pie2"




const Dashboard = () => {
  return (
  <div class="flex flex-wrap mt-3 p-2  -mx-3 ">
    <div class="w-full max-w-full p-3 mt-0 lg:w-7/12 lg:flex-none">
     <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid dark:bg-black bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
            <h6 className="capitalize dark:text-white">Expance overview</h6>
            <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
              <i className="fa fa-arrow-up text-emerald-500"></i>
              <span className="font-semibold">4% more</span> than last month
            </p>
          </div>
          <div className="flex-auto p-4">
            <div>
              <TinyArea />
            </div>
          </div>
      </div>
    </div>
    <div class="w-full max-w-full p-3 lg:w-5/12 lg:flex-none">
        <div  className="relative w-full h-full dark:bg-black bg-white rounded-2xl dark:shadow-dark-xl shadow-xl">
          <Pie2 />
        </div>
    </div>

    <div className='p-3  w-full max-w-full dark:bg-black bg-white rounded-2xl lg:w-6/12 shadow-xl'>
      <div className=" p-3 my-3  lg:flex-none">
        <div className="space-y-8">
        <div className="flex items-center">
          
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
              olivia.martin@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
      
      </div>
      </div>
      </div>
   
  </div>
    


  )
}

export default Dashboard
