import './App.css';
import { createBrowserRouter as Router, RouterProvider  } from 'react-router-dom';
import Home from './pages/Home';
import LineChart from './pages/LineChart';
import BarChart from './pages/BarChart';
import Profile from './pages/Profile';
import Table from './pages/Table';
import Login from './components/Login';


function App() {


  const router = Router([

        {
          path:'/',
          element: <Home />
        },
        {
          path:'/linechart',
          element: <LineChart />
        },
        {
          path:'/barchart',
          element: <BarChart />
        },
        {
          path:'/profile',
          element: <Profile />
        },
        {
          path:'/table',
          element: <Table />
        },
        {
          path:'/login',
          element: <Login />
        },
  
  ])

  return <RouterProvider router={router} />
}

export default App;
