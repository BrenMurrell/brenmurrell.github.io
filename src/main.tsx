import React from 'react'
// import content from 'content.json';
import ReactDOM from 'react-dom/client'
import './index.css'

import AppRoutes from "./routes.tsx";

import { createHashRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createHashRouter(
  createRoutesFromElements(AppRoutes)
)

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser.ts')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}
 
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>  
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
})

