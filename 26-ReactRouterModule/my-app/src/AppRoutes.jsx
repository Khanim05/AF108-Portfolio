import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './component/layout/Layout'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import Home from './pages/home/Home'
const AppRoutes = () => {
    const routes=useRoutes([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {path:'/',element:<Home/>},
                {path:'about',element:<About/>},
                {path:'contact',element:<Contact/>},
                {path:'service',element:<Services/>}
            ]
        }
    ])
  return routes
    
  
}

export default AppRoutes
