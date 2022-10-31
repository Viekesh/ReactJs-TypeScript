import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../FoodDeliveryApp1/Pages/HomePage";
import LogIn from "../Profile/LogIn";
import SignUp from "../Profile/SignUp";
import LandingPage from "./LandingPage/Components/LandingPage";



const ProjectRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/SignUp" element={<SignUp />}></Route>
                <Route path="/LogIn" element={<LogIn />}></Route>
                <Route path="/FoodDeliverApp1" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRoutes;