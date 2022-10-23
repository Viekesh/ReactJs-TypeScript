import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../FoodDeliveryApp1/Pages/HomePage";
import GLandingPage from "../Gym/GLandingPage";
import LandingPage from "./LandingPage/Components/LandingPage";



const ProjectRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/FoodDeliverApp1" element={<HomePage />}></Route>
                <Route path="/GLandingPage" element={<GLandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRoutes;