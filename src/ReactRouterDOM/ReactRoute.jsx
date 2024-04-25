import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";
import BAndS from "../Components/Projects/ReactJs/BAndS/Components/Pages/BAndS";
import BAndSServices from "../Components/Projects/ReactJs/BAndS/Components/Pages/Services/Services";
import BAndSAbout from "../Components/Projects/ReactJs/BAndS/Components/Pages/About/About";
import CoinGecko from "../Components/Projects/APIPro/CoinGecko/CoinGecko";



const ReactRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                {/* <Route exact path="/" element={<LandingPage />}></Route>
                <Route exact path="/UIComponent" element={<UIComponents />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
                <Route path="/About" element={<About />}></Route> */}

                {/* API Pro */}
                <Route path="/CoinGecko" element={<CoinGecko />}></Route>

                {/* ReactJs Practices */}
                {/* <Route path="/TicTacToe" element={<TicTacToe />}></Route>
                <Route path="/Calculator" element={<Calculator />}></Route>
                <Route path="/JokesAPISetup" element={<JokesAPISetup />}></Route> */}
                <Route exact path="/BAndS" element={<BAndS />}></Route>

                {/* BAndS */}
                <Route path="/BAndSServices" element={<BAndSServices />}></Route>
                <Route path="/BAndSAbout" element={<BAndSAbout />}></Route>
            </Routes>
        </>
    )
};



export default ReactRoute;