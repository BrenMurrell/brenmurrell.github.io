import React from 'react'
// import content from 'content.json';
import ReactDOM from 'react-dom/client'
import './index.css'

import AppRoutes from "./routes.tsx";

import { createHashRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createHashRouter(
  createRoutesFromElements(AppRoutes)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
