import { Route } from "react-router-dom"
import App from "./App"
import Page from "./components/Pages/Page"
import Home from "./components/Home/Home"

// TODO - move this to a proper route generator
const AppRoutes = (
    <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page searchString="About" key={"about"} />} />
        <Route path="/work" element={<Page searchString="Work" key={"work"} />} />
        <Route path="/projects" element={<Page searchString="Projects" key={"projects"} />} />
    </Route>
)

export default AppRoutes
