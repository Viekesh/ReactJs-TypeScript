import { Route, Routes } from "react-router-dom";
import UIComponents from "../Components/UIComponents/UIComponents";
import LandingPage from "../Components/PageComponents/LandingPage/LandingPage";
import TicTacToe from "../Components/Projects/ReactJs/TicTacToe/TicTacToe";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/UIComponent" element={<UIComponents />}></Route>
                <Route path="/TicTacToe" element={<TicTacToe />}></Route>
            </Routes>
        </>
    )
};



export default ReactRoute;