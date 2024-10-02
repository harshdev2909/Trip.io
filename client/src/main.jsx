import { StrictMode,react } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './create-trip/Index.jsx'
import Header from './components/custom/Header.jsx'
import Hero from './components/custom/Hero.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },{
    path:'/create-trip',
    element:<Index/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  
    <RouterProvider router={router}/>
  </StrictMode>,
)
