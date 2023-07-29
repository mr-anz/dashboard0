"use client";


import React from 'react'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { MdOutlineCancel } from 'react-icons/md'

import {links} from '../utils/data'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="  m-2 rounded-xl bg-stone-700 bg-opacity-70 backdrop-filter backdrop-blur-md backdrop-brightness-125 backdrop-contrast-75 items-center md:hover:overflow-auto  ">
        <div className="flex justify-center items-center border-b-[2px] border-black p-4">
            <Link to='/' className='items-center gap-3 m-3 mt-4 flex text-xl font-extrabold first-letter 
            tracking-tight dark:text-white text-slate-900'>
                <BiBriefcaseAlt2/>Dashboard 
            </Link>
        </div>
        <div className="mt-4">
            {links.map((item)=>(
                <div key={item.title}>
                    
                    {item.links.map((link)=>(
                        <Link
                            className='flex justify-start items-center gap-5 pl-6 pt-3 pb-2.5 rounded-lg hover:bg-gray-200 text-gray-700  text-md font-semi-bold m-2'
                            to={`/${link.name}`}
                        >
                            {link.icon}
                            <span className="capitalize">{link.name}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Sidebar
