import './App.css'
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Footer from './Footer'

function App() {
  return (
    <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
