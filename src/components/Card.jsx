import { earningData } from '../utils/data'
import React from 'react'


const Card = () => {
  return (
    <div className="mt-18">
    <div class="w-full px-6 py-6 mx-auto">
    
    <div class="flex flex-wrap -mx-3">
          {/* */}
        {earningData.map((item) => (
          <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-950 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div class="flex-auto p-4">
              <div class="flex flex-row -mx-3">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">{item.title}</p>
                    <h5 class="mb-2 font-bold dark:text-white">{item.amount}</h5>
                    <p class="mb-0 dark:text-white dark:opacity-60">
                      <span class={`text-sm font-bold leading-normal text-${item.pcColor}`}>{item.percentage}</span>
                      
                    </p>
                    <span class={`text-sm font-semibold capitalize  leading-normal text-gray-300`}>since yesterday</span>                   
                  </div>
                </div>
                <div class="px-3 text-right basis-1/3">
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}

        </div>
        </div>
    </div>
  )
}

export default Card
