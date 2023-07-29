
import {Link} from 'react-router-dom';
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import Button from './Button';
import { useStateContext } from '../context';
import { link } from '../utils/data';

const Navbar = () => {
  const {toggle ,setToggle} = useStateContext()
  

  return (
    <div className='flex mt-3 lg:flex-row flex-col-reverse justify-between mb-[15px] gap-6'>
      <div className="flex flex-1">
      
      </div>  

        <div className="md:flex hidden flex-row items-center justify-end gap-4">
          <Button
            btnType='button'
            styles={'font-bold text-[14px]  text-white  py-2 px-4 rounded-full bg-green-500'}  
            title={'Sign in'}
            onClick={()=>{}}
          />
          <Link to='/profile'>
            <div className="w-[52px] h-[52px] rounded-full bg-gray-600 flex justify-center items-center cursor-pointer">
              <image src='asd'  className='w-[50px] h-[5px] object-contain'/>
            </div>
          </Link>
        </div>

        {/* small screen Navigation */ }
        <div className="md:hidden flex justify-between items-center relative">
          <Link to='/profile' className='m-4 flex items-center'>
            <BiBriefcaseAlt2/> Dashboard
          </Link>

          <div className="cursor-pointer z-20 m-4"
            
            onClick={() => {
              
              setToggle((prev) => !prev)}}
          >
            <AiOutlineMenu />
          </div>

        <div className={`absolute rounded-b-lg top-[0px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary  ${!toggle ? '-translate-y-[100vh]' : 'translate-y-[-5]'} transition-all duration-700`}>
          <ul className="mb-4">
            {link.map((link) => (
              <li
                key={link.name}
                className='flex p-4  '
                onClick={() => setToggle(false)}
              >
                <div className="flex items-center justify-normal  text-[#1dc071]">
                  {link.icon}
                  <p className='ml-[20px] font-epilogue font-semibold text-[14px] capitalize '> 
                    {link.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          </div>
        </div> 
    
    </div>
  )
}

export default Navbar
