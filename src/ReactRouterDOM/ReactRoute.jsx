import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/Pages/LP/LandingPage";
import UIComponents from "../Components/UIComponents/UIComponents";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/UIComponent" element={<UIComponents />}></Route>
            </Routes>
        </>
    )
};



export default ReactRoute;