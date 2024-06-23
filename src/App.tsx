import './App.css'
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import { AppContext } from "./AppContext"
import content from './content.json';


function App() {
  return (
      <AppContext.Provider value={content}>
        <Navigation />
        <Outlet />
      </AppContext.Provider>
  )
}

export default App
