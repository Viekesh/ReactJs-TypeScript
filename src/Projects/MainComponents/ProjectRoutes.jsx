import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";



const ProjectRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRoutes;