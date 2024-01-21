import { Route, Routes } from "react-router-dom";
import UIComponents from "../Components/UIComponents/UIComponents";
import LandingPage from "../Components/PageComponents/LandingPage/LandingPage";



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