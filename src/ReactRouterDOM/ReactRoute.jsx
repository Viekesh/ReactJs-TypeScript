import { Route, Routes } from "react-router-dom";
import UseEffectHook from "../Components/Tutorials/HooksAPI/UseEffectHook/UseEffectHook";
// import LandingPage from "../Components/Pages/LP/LandingPage";
// import UseStateHook from "../Components/Tutorials/HooksAPI/UseStateHook/UseStateHook";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                {/* <Route exact path="/" element={<UseStateHook />}></Route> */}
                {/* <Route exact path="/" element={<LandingPage />}></Route> */}
                <Route exact path="/" element={<UseEffectHook />}></Route>
            </Routes>
        </>
    )
};



export default ReactRoute;