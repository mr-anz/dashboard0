import React, { useEffect } from 'react'
import { useStateContext } from '../context'
import Card from '../components/Card'
import Dashboard from '../components/Dashboard'
import ThemeSettings from '../components/ThemeSettings'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Settings from '../components/Settings'
import { collection, getDocs, doc, deleteDoc,  onSnapshot} from "firebase/firestore";
import { db } from "../firebase";



const Home = () => {
  const {themeSettings,setIncomeData,setExpenseData,InsertIncome} = useStateContext()

  useEffect(()=>{

    const unsub = onSnapshot(
      collection(db, "Income"),
      (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
      });
      setIncomeData(list);
      },
      (error) => {
      console.log(error);
      }
    )
      const sub = onSnapshot(
        collection(db, "Expense"),
        (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
        });
        setExpenseData(list);
        },
        (error) => {
        console.log(error);
        }
    );
    return () => {
        unsub();
        sub()
      };
  

  },[])

  return (
    <div className="relative h-min-screen flex dark:bg-black bg-white bg-opacity-70 backdrop-filter backdrop-blur-8 backdrop-brightness-125 backdrop-contrast-75">
        
      <div className="md:flex w-[60] h-[95vh] ml-4 hidden mx-2 top-3 relative">
        <Sidebar/>
      </div>
      <div className="flex-1 max-sm:w-full  mx-auto sm:p-5">
        <Navbar />
          
          <div className="">
            <Card />
            <Dashboard />
          </div>
         
        {themeSettings && (<ThemeSettings />)}
        
          
        </div>
        
      <Settings />
    </div>
  )
}

export default Home