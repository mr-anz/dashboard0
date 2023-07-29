import React from 'react'

const ChartHeader = ({ category, title }) => {
  return (
    <div className='w-full '>
        <div className=" pb-10  ">            
                <p className="text-[32px] text-black dark:text-white text-bold ">
                    {category}
                </p>
                <p className="text-md text-black dark:text-white text-semibold pt-3">
                    {title}
                </p>
        </div>

    </div>
  )
}

export default ChartHeader