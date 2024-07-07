import { Route } from "react-router-dom"
import App from "./App"
import Page from "./components/Pages/Page"
import Home from "./components/Home/Home"

// TODO - move this to a proper route generator
const AppRoutes = (
    <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page key={"about"} />} />
        <Route path="/work" element={<Page key={"work"} />} />
        <Route path="/projects" element={<Page key={"projects"} />} />
    </Route>
)

export default AppRoutes
