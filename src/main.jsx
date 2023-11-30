import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <div className='md:max-w-screen-2xl overflow-x-hidden md:mx-auto  dark:bg-black'>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </AuthProvider>
)
