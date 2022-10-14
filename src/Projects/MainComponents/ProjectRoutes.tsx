import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../FoodDeliveryApp1/Pages/HomePage";
import LandingPage from "./LandingPage/Components/LandingPage";



const ProjectRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/FoodDeliverApp1" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRoutes;