import React from 'react'
import { AppContext } from "./AppContext"
import content from 'content.json';
import ReactDOM from 'react-dom/client'
import './index.css'

import AppRoutes from "./routes.tsx";

import { createHashRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createHashRouter(
  createRoutesFromElements(AppRoutes)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
      <AppContext.Provider value={content}>
        <RouterProvider router={router} />
      </AppContext.Provider>
  </React.StrictMode>,
)
