import { Route, Routes } from "react-router-dom";
// import UseEffectHook from "../Components/Tutorials/HooksAPI/UseEffectHook/UseEffectHook";
// import ContextHook from "../Components/Tutorials/HooksAPI/UseContextApi/ContextHook";
import LandingPage from "../Components/Pages/LP/LandingPage";
// import UseStateHook from "../Components/Tutorials/HooksAPI/UseStateHook/UseStateHook";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                {/* <Route exact path="/" element={<UseStateHook />}></Route> */}
                {/* <Route exact path="/" element={<UseEffectHook />}></Route> */}
                {/* <Route exact path="/" element={<ContextHook />} ></Route> */}
            </Routes>
        </>
    )
};



export default ReactRoute;