import React from 'react'
import Navbar from '../components/Navbar'
import Settings from '../components/Settings'
import Sidebar from '../components/Sidebar'
import ChartHeader from '../components/ChartHeader'
import BigArea from '../components/charts/BigArea'
import Pie1 from '../components/charts/Pie1';
import ThemeSettings from '../components/ThemeSettings';
import { useStateContext } from '../context';
import IncomeTable from'../components/IncomeTable'
import ExpenseTable from '../components/ExpenseTable';
import InsertIncome from '../components/InsertIncome';
import InsertExpense from '../components/InsertExpense';


const Table = () => {
  const {themeSettings} = useStateContext()
  return (
    <div className="relative h-min-screen flex dark:bg-black bg-white bg-opacity-70 backdrop-filter backdrop-blur-8 backdrop-brightness-125 backdrop-contrast-75">
        
      <div className="md:flex w-[60] h-[95vh] ml-4 hidden mx-2 top-3 relative">
        <Sidebar/>
      </div>
      <div className="flex-1 max-sm:w-full  mx-auto sm:p-5">
        <Navbar />
          
        <div className='gap-2 px-5'>
      <ChartHeader category='Tables' />
      <div className="max-w-[850px] pt-5 pb-3 items-center">
        <ChartHeader title='IncomeTables' />
        
        <IncomeTable />
        
      </div>
      <div className="max-w-[850px] pt-1 pb-3 items-center">
        <ChartHeader title='ExpenseTables' />
        
        <ExpenseTable />
        
      </div>
      {themeSettings && (<ThemeSettings />)}
    </div>
          
        </div>
        <InsertExpense />
        <InsertIncome />
      <Settings />
    </div>
  )
}

export default Table