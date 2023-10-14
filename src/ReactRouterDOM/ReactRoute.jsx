import { Route } from "react-router-dom";
import LandingPage from "../Components/Pages/LandingPage/LandingPage";



const ReactRoute = () => {
    return (
        <>
            <Route exact path="/" element={<LandingPage />} />
        </>
    )
};

export default ReactRoute;