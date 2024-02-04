import { Route, Routes } from "react-router-dom";
import UIComponents from "../Components/UIComponents/UIComponents";
import LandingPage from "../Components/PageComponents/LandingPage/LandingPage";
import TicTacToe from "../Components/Projects/ReactJs/TicTacToe/TicTacToe";
import Calculator from "../Components/Projects/ReactJs/Calculator/Calculator";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/UIComponent" element={<UIComponents />}></Route>
                <Route path="/TicTacToe" element={<TicTacToe />}></Route>
                <Route path="/Calculator" element={<Calculator />}></Route>
            </Routes>
        </>
    )
};



export default ReactRoute;