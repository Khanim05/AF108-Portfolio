import React from 'react';
import {useRoutes } from 'react-router-dom';
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';

const App=()=>{
  const routes=useRoutes([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/',element:<HomePage/>}
      ]
    },
      {path:'login', element:<LoginPage/>},
      {path:'register',element:<RegisterPage/>}
    
      
  ])
  return routes
}

export default App;
