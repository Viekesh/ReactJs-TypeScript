import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./Portfolio/Blogs/Pages/Blogs";
import LandingPage from "./Portfolio/LandingPage/LandingPage";

const ProjectRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>

          {/* Blogs Page */}
          <Route exact path="/Blogs" element={<Blogs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ProjectRoutes;


