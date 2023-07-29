import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
// import avatar from './avatar.jpg';
// import avatar2 from './avatar2.jpg';
// import avatar3 from './avatar3.png';
// import avatar4 from './avatar4.jpg';
// import product1 from './product1.jpg';
// import product2 from './product2.jpg';
// import product3 from './product3.jpg';
// import product4 from './product4.jpg';
// import product5 from './product5.jpg';
// import product6 from './product6.jpg';
// import product7 from './product7.jpg';
// import product8 from './product8.jpg';

export const links = [

  {
    title: 'Dashboard',
    links: [


  {
    name: 'table',
    icon: <BsKanban />,
  },
  

  {
    name: 'linechart',
    icon: <AiOutlineStock />,
  },
  {
    name: 'barchart',
    icon: <BsBarChart />,
  },

  {
    name: 'profile',
    icon: <AiOutlineBarChart />,
  },

]
}
];

export const  link = [
 

  {
    name: 'table',
    icon: <BsKanban />,
  },
  

  {
    name: 'linechart',
    icon: <AiOutlineStock />,
  },
  {
    name: 'barchart',
    icon: <BsBarChart />,
  },

  {
    name: 'profile',
    icon: <AiOutlineBarChart />,
  },
]

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];


export const expense = [{
  title: 'expense',
  list: [
    {
      Mode: 'Credit Card',
      Description: 'Groceries',
      Amount: '150.25',
      Date: '2023-07-20'
    },
    {
      Mode: 'Cash',
      Description: 'Dining Out',
      Amount: '45.50',
      Date: '2023-07-19'
    },
    {
      Mode: 'Debit Card',
      Description: 'Transportation',
      Amount: '35.80',
      Date: '2023-07-18'
    },
    {
      Mode: 'Online Transfer',
      Description: 'Shopping',
      Amount: '250.00',
      Date: '2023-07-17'
    },
    {
      Mode: 'Credit Card',
      Description: 'Medical',
      Amount: '200.75',
      Date: '2023-07-16'
    },
  ]
}]

export const income = [{
  title:'income',
  list: [
    {
      Mode: 'Salary',
      Description: 'Monthly income',
      Amount: '3000.00',
      Date: '2023-07-20'
    },
    {
      Mode: 'Freelance',
      Description: 'Project payment',
      Amount: '500.00',
      Date: '2023-07-19'
    },
    {
      Mode: 'Investments',
      Description: 'Dividends',
      Amount: '200.00',
      Date: '2023-07-18'
    },
    {
      Mode: 'Rental',
      Description: 'Property income',
      Amount: '800.00',
      Date: '2023-07-17'
    },
    {
      Mode: 'Gift',
      Description: 'Birthday gift',
      Amount: '50.00',
      Date: '2023-07-16'
    },
  ]
}]