
import React, { createContext , useState, useContext } from 'react'

const StateContext = createContext()

const initialState = {
    toggleDrawer : false,
    userProfile : false,
    notification : false,
    chart : false
}

export const ContextProvider = ({children}) => {
    const [toggle, setToggle] = useState(false)
    const [currentColor, setCurrentColor] = useState('teal')
    const [currentMode, setCurrentMode] = useState('Light')
    const [isClicked,setIsClicked] = useState(initialState)
    const [themeSettings, setThemeSettings] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [insertIncome, setInsertIncome] = useState('scale-0')
    const [insertExpense, setInsertExpense] = useState('scale-0')
    const [expenseData, setExpenseData] = useState([]);
    const [incomeData, setIncomeData] = useState([]);
    const [incomeChart, setIncomeChart] = useState([])
    const [expenseChart, setExpenseChart] = useState([])

    

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };
    
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };
    
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (    
        <StateContext.Provider 
            value={{ setColor, setMode, handleClick, setThemeSettings, themeSettings, 
                    setToggle, toggle, currentColor, currentMode, isClicked,
                    initialState, setIsClicked, setCurrentColor, setCurrentMode,
                    setIsLoggedIn, isLoggedIn, insertExpense, setInsertExpense,
                    insertIncome, setInsertIncome, expenseData, setExpenseData, 
                    incomeData, setIncomeData, incomeChart, setIncomeChart, 
                    expenseChart, setExpenseChart
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
    