import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../Context/AuthContext";
import HomePage from "../FoodDeliveryApp1/Pages/HomePage";
import LogIn from "../Profile/LogIn";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../Profile/ProtectedRoutes";
import SignUp from "../Profile/SignUp";
import LandingPage from "./LandingPage/Components/LandingPage";



const ProjectRoutes = () => {
    return (
        <>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />}></Route>
                        <Route path="/SignUp" element={<SignUp />}></Route>
                        <Route path="/LogIn" element={<LogIn />}></Route>
                        <Route path="/Profile" element={
                            <ProtectedRoute><Profile /></ProtectedRoute>
                        }></Route>
                        <Route path="/FoodDeliverApp1" element={<HomePage />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    )
}

export default ProjectRoutes;