
import { useStateContext } from "../context"
import { useEffect, useState } from "react"
import { FaTimes } from 'react-icons/fa' 
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 

export default function InsertIncome() {
    const [mode, setMode] = useState();
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState(null);

    const { insertIncome, setInsertIncome } = useStateContext()

    const dateStr = (date) =>{
        const dateObj = Date.parse(date)
        return dateObj
    }    

    const handleSubmit = async(e)=> {
        e.preventDefault()
        try {
            await addDoc(collection(db, "Income"), {
                mode: mode,
                description: description,
                amount: amount,
                date: dateStr(date)
              });
              closeModal()
        } catch (error) {
            console.log(error)
        }
    }

    const closeModal = ()=> {
        setInsertIncome('scale-0')
        resetForm()
        console.log(insertIncome)
    } 
    
    const resetForm = ()=> {
        setMode('')
        setDescription('')
        setAmount('')
        setDate(null)
    }

    return (
        <div className={`fixed h-screen w-screen top-0 left-0 flex items-center justify-center
            bg-black bg-opacity-50 transform transition-transform duration-400  ${insertIncome}`}
        >
            <div className="bg-white shadow-xl shadow-black rounded-xl w-10/12 md:w-2/5 h-7/12 p-6">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                
                    <div className="flex justify-between pb-8 items-center">
                        <p className="font-bold">Insert Income Details</p>
                        <button
                            type="button"
                            onClick={closeModal} 
                            className="border-0 bg-transparent cursor-pointer hover:text-md focus:outline-none"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-800 mt-5">
                        <input 
                            type="text" 
                            className="block w-full p-1 text-md text-slate-500 bg-transparent border-0 focus:outline-none focuse:ring-0"
                            name="mode"
                            placeholder="Mode"rounded
                            onChange={(e)=>setMode(e.target.value)}
                            value={mode}
                            required
                        />
                    </div>

                    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-800 mt-5">
                        <textarea 
                            type="text" 
                            className="block w-full p-1 text-md text-slate-500 bg-transparent border-0 focus:outline-none focuse:ring-0"
                            name="description"
                            placeholder="Description"
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}
                            required
                        />
                    </div>

                    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-800 mt-5">
                        <input 
                            type="number" 
                            className="block w-full p-1 text-md text-slate-500 bg-transparent border-0 focus:outline-none focuse:ring-0"
                            name="amount"
                            placeholder="Amount"
                            onChange={(e)=>setAmount(e.target.value)}
                            value={amount}
                            required
                        />
                    </div>

                    <div className="flex flex-row items-center justify-center rounded-lg bg-gray-800 mt-5">
                        <input 
                            type="date" 
                            className="block w-full p-1 text-md text-slate-500 bg-transparent border-0 focus:outline-none focuse:ring-0"
                            name="date"
                            placeholder="date"
                            onChange={(e)=>setDate(e.target.value)}
                            value={date}
                            required
                        />
                    </div>
                    <button 
                        className=" px-3 py-2.5 my-3 bg-green-500 font-md text-md leading-tight rounded-full shadow-md hover:bg-green-700"
                        type="submit"
                    >
                        Submit 
                    </button>
                </form>
            </div>            
        </div>
    )
}