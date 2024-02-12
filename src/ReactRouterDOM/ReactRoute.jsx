import { Route, Routes } from "react-router-dom";
import UIComponents from "../Components/UIComponents/UIComponents";
import LandingPage from "../Components/PageComponents/LandingPage/LandingPage";
import TicTacToe from "../Components/Projects/ReactJs/TicTacToe/TicTacToe";
import Calculator from "../Components/Projects/ReactJs/Calculator/Calculator";
import Projects from "../Components/Projects/Projects";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/UIComponent" element={<UIComponents />}></Route>
                <Route path="/TicTacToe" element={<TicTacToe />}></Route>
                <Route path="/Calculator" element={<Calculator />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
            </Routes>
        </>
    )
};



export default ReactRoute;