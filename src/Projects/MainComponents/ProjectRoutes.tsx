import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogLandingPage from "../BlogApp1/BlogLandingPage";
import About from "../BlogApp1/Pages/About";
import AddEditBlog from "../BlogApp1/Pages/AddEditBlog";
import Details from "../BlogApp1/Pages/Details";
import NotFound from "../BlogApp1/Pages/NotFound";
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

                        <Route path="/BlogLandingPage" element={<BlogLandingPage  />}></Route>
                        <Route path="/Details/:id" element={<Details />}></Route>
                        <Route path="/Create" element={<AddEditBlog />}></Route>
                        <Route path="/Update/:id" element={<AddEditBlog />}></Route>
                        <Route path="/About" element={<About />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    )
}

export default ProjectRoutes;