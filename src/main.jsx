import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router';
import Routers from './rotues/Routes';
import AuthProvider from './Provider/AUthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Routers} ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
