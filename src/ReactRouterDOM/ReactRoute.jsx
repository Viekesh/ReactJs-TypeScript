import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                {/* <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/UIComponent" element={<UIComponents />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
                <Route path="/About" element={<About />}></Route> */}

                {/* ReactJs Practices */}
                {/* <Route path="/TicTacToe" element={<TicTacToe />}></Route>
                <Route path="/Calculator" element={<Calculator />}></Route>
                <Route path="/JokesAPISetup" element={<JokesAPISetup />}></Route> */}
            </Routes>
        </>
    )
};



export default ReactRoute;