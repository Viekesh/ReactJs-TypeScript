import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Portfolio/LandingPage/LandingPage";

const ProjectRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ProjectRoutes;


