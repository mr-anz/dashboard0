
import React, { useEffect } from 'react'
import { income } from '../utils/data'
import { useStateContext } from '../context';
import { FcAddDatabase } from 'react-icons/fc';
import { collection, getDocs, doc, deleteDoc,  onSnapshot} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from 'react';

const IncomeTable = () => {
    const { setInsertIncome, setIncomeData, incomeData } = useStateContext()
    

    const handleDelete = (id) => async(e) => {
        e.preventDefault()
        try {
          await deleteDoc(doc(db, "Income", id));
          setIncomeData(incomeData.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      };  
    
    useEffect(()=>{
        // LISTEN (REALTIME)
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
        );
        console.log(incomeData)
        return () => {
            unsub();
          };
      
    },[])

  return (
    <div>
      
        <div className="overflow-hidden table-container max-w-screen-lg overflow-x-auto rounded-lg border border-gray-300 shadow-md">
    
        <table  className="w-full table border-collapse dark:bg-black bg-white text-left text-sm text-gray-400">
        
            
            <thead className="bg-gray-50 dark:bg-zinc-700">
                           
            <tr>
                <th scope="col" className="px-6 py-4  font-medium dark:text-gray-200 text-gray-900">Mode</th>
                <th scope="col" className="px-6 py-4  font-medium dark:text-gray-200 text-gray-900">Description</th>
                <th scope="col" className="px-6 py-4  font-medium dark:text-gray-200 text-gray-900">Amount</th>
                <th scope="col" className="px-6 py-4  font-medium dark:text-gray-200 text-gray-900">Date</th>
                <th scope="col" className="px-6 py-4 flex justify-center font-medium dark:text-gray-200 text-gray-900">
                    <button className="items-center text-bold text-xl" onClick={()=>(setInsertIncome('scale-100'))}>
                        <FcAddDatabase />
                    </button>
                </th>
                
            </tr>
            </thead>
            

            <tbody   className="divide-y divide-gray-100 border-t border-gray-300">
            
            {incomeData.map((item)=>(                 
            <tr  key={item.id} className="hover:bg-gray-50 dark:hover:bg-stone-700">
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-gray-50"> {item.mode}</th>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    {new Date(item.date).toLocaleDateString()}
                </span>
                </td>
                <td className="flex justify-center gap-4 px-6 py-4 font-medium" >
                    
                        
                    <button className='outline:none' onClick={handleDelete(item.id)} >
                        Delete
                    </button>
                    
                </td>
            </tr>

            
    ))}            </tbody>

            
        </table>
        </div>


    </div>
  )
}

export default IncomeTable
