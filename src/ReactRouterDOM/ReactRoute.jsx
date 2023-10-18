import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/Pages/LandingPage/LandingPage";
import HomePage from "../Components/Projects/FoodDeliveryApp1/Pages/HomePage";
import LogIn from "../Components/FeaturedComponents/Authentication/LogIn/LogIn";
import About from "../Components/Pages/About/About";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/LogIn" element={<LogIn />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/HomePage" element={<HomePage />} />
            </Routes>
        </>
    )
};

export default ReactRoute;