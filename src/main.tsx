import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createHashRouter, RouterProvider } from "react-router-dom"
// import Projects from "./components/Projects/Projects.tsx"
import Home from "./components/Home/Home.tsx"
// import About from "./components/About/About.tsx"
import Page from "./components/Pages/Page.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />},
      {
        path: "/projects",
        element: <Page searchString="Projects" key={"Projects"} />,
      },
      {
        path: "/about",
        element: <Page searchString="About" key={"About"} />,
      }
      ,
      {
        path: "/work-history",
        element: <Page searchString="Work history" key={"work-history"} />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
