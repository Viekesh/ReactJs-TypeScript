import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Authentication/Auth";
import ForgotPassword from "./Authentication/ForgotPassword";
import NotFound from "./Authentication/NotFound";
import Profile from "./Authentication/Profile";
import Register from "./Authentication/Register";
import About from "./Portfolio/About/About";
import AddUpdateBlog from "./Portfolio/Blogs/Pages/AddUpdateBlog";
import Blogs from "./Portfolio/Blogs/Pages/Blogs";
import Details from "./Portfolio/Blogs/Pages/Details";
import LandingPage from "./Portfolio/LandingPage/LandingPage";



const ProjectRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Portfolio */}
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/About" element={<About />}></Route>

          {/* Authentication */}
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Auth" element={<Auth />}></Route>
          <Route exact path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route exact path="/Profile" element={<Profile />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>

          {/* Blogs Page */}
          <Route exact path="/Blogs" element={<Blogs />}></Route>
          <Route exact path="/Create" element={<AddUpdateBlog />}></Route>
          <Route exact path="/Update/:id" element={<AddUpdateBlog />}></Route>
          <Route exact path="/Details/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ProjectRoutes;


