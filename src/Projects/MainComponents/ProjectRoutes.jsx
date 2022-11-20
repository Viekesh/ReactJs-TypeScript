// import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import BlogLandingPage from "../BlogApp1/BlogLandingPage";
import About from "../BlogApp1/Pages/About";
import AddEditBlog from "../BlogApp1/Pages/AddEditBlog";
import Auth from "../BlogApp1/Pages/Auth";
import Details from "../BlogApp1/Pages/Details";
import NotFound from "../BlogApp1/Pages/NotFound";
import { AuthContextProvider } from "../Context/AuthContext";
import EC1LandingPage from "../ECommerce/EC1/EC1LandingPage";
import HomePage from "../FoodDeliveryApp1/Pages/HomePage";
// import LogIn from "../Profile/LogIn";
// import Profile from "../Profile/Profile";
// import ProtectedRoute from "../Profile/ProtectedRoutes";
// import SignUp from "../Profile/SignUp";
import LandingPage from "./LandingPage/Components/LandingPage";
import "./LandingPage/Styles/Profile.css";



const ProjectRoutes = () => {

    const [active, setActive] = useState("/BlogLandingPage");

    // We have to persist loggedIn user in our application and we need some user information as well
    // like display name, So here we can define useState (const [user, setUser] = useState(null);)
    // Initially it will be null
    const [user, setUser] = useState(null);

    useEffect(() => {

        // "auth" coming from firebaseConfig.js
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        })
    }, []);

    // const nvgt = useNavigate();

    // const handleLogout = () => {
    //     signOut(auth).then(() => {
    //         setUser(null);
    //         setActive("login");
    //         nvgt("/Auth");
    //     })
    // }

    return (
        <>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />}></Route>

                        {/* <Route path="/SignUp" element={<SignUp />}></Route>
                    <Route path="/LogIn" element={<LogIn />}></Route>
                    <Route path="/Profile" element={
                        <ProtectedRoute><Profile /></ProtectedRoute>
                    }></Route> */}

                        <Route path="/FoodDeliverApp1" element={<HomePage />}></Route>

                        <Route
                            path="/BlogLandingPage"
                            element={<BlogLandingPage
                                user={user}
                                setUser={setUser}
                                active={active}
                                setActive={setActive}
                            />}></Route>
                        <Route
                            path="/Auth"
                            element={<Auth
                                active={active}
                                setActive={setActive}
                                user={user}
                                setUser={setUser}
                            />}></Route>
                        <Route path="/Details/:id" element={<Details />}></Route>
                        <Route path="/Create" element={user?.uid ? <AddEditBlog
                            user={user}
                            setUser={setUser}
                            active={active}
                            setActive={setActive}
                        /> : <Navigate to="/BlogLandingPage" /> }></Route>
                        <Route path="/Update/:id" 
                        element={user?.uid ? <AddEditBlog
                            user={user}
                            setUser={setUser}
                            active={active}
                            setActive={setActive}
                        /> : <Navigate to="/BlogLandingPage" />}></Route>
                        <Route path="/About" element={<About />}></Route>
                        <Route path="*" element={<NotFound />}></Route>

                        {/* ECommerce */}
                        {/* EC1 */}
                        <Route path="/EC1LandingPage" element={<EC1LandingPage />}></Route>

                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </>
    )
}

export default ProjectRoutes;


