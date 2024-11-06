import { StrictMode,react } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './create-trip/Index.jsx'
import Header from './components/custom/Header.jsx'
import Hero from './components/custom/Hero.jsx'
import { Toaster } from './components/ui/sonner.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

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
    <GoogleOAuthProvider clientId="866492517952-bapu6l6irlr39q114ght4kooi0v0jr5e.apps.googleusercontent.com">;
    <Header/>
    <Toaster/>
    <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
