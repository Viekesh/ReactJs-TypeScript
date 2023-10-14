import { BrowserRouter, Routes } from "react-router-dom";
import ReactRoute from "./ReactRoute";



const ReactRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <ReactRoute />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ReactRouter;