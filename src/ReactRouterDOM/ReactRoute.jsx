import { Route, Routes } from "react-router-dom";
import UIComponents from "../Components/UIComponents/UIComponents";
import LandingPage from "../Components/PageComponents/LandingPage/LandingPage";
import TicTacToe from "../Components/Projects/ReactJs/TicTacToe/TicTacToe";
import Calculator from "../Components/Projects/ReactJs/Calculator/Calculator";
import Projects from "../Components/Projects/Projects";
import About from "../Components/PageComponents/LandingPage/About";
import JokesAPISetup from "../Components/Projects/ReactJs/RandomJokeAPI/JokesAPISetup";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/UIComponent" element={<UIComponents />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
                <Route path="/About" element={<About />}></Route>

                {/* ReactJs Practices */}
                <Route path="/TicTacToe" element={<TicTacToe />}></Route>
                <Route path="/Calculator" element={<Calculator />}></Route>
                <Route path="/JokesAPISetup" element={<JokesAPISetup />}></Route>
            </Routes>
        </>
    )
};



export default ReactRoute;