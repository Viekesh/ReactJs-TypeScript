import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Authentication/Auth";
import ForgotPassword from "./Authentication/ForgotPassword";
import NotFound from "./Authentication/NotFound";
import PrivateRoutes from "./Authentication/PrivateRoutes";
import Profile from "./Authentication/Profile";
import Register from "./Authentication/Register";
import Calculator from "./Calculator/Components/Calculator";
import ChatGPTMain from "./ChatGPT/ChatGPTMain";
import CreateListing from "./ECommerce/Components/CreateListing/CreateListing";
import EComHeader from "./ECommerce/EComHeader";
import MusicLandingPage from "./Music/MusicLandingPage";
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
          <Route
            exact
            path="/ForgotPassword"
            element={<ForgotPassword />}
          ></Route>

          {/* Private Route */}
          <Route exact path="/Profile" element={<PrivateRoutes />}>
            <Route exact path="/Profile" element={<Profile />}></Route>
          </Route>
          <Route exact path="*" element={<NotFound />}></Route>

          {/* ECommerce */}
          <Route path="/EComHeader" element={<EComHeader />}></Route>
          <Route path="/CreateListing" element={<CreateListing />}></Route>

          {/* Blogs Page */}
          <Route exact path="/Blogs" element={<Blogs />}></Route>
          <Route exact path="/Create" element={<AddUpdateBlog />}></Route>
          <Route exact path="/Update/:id" element={<AddUpdateBlog />}></Route>
          <Route exact path="/Details/:id" element={<Details />}></Route>

          {/* Chat GPT */}
          <Route exact path="/ChatGPTMain" element={<ChatGPTMain />}></Route>

          {/* Calculator */}
          <Route exact path="/Calculator" element={<Calculator />}></Route>

          {/* Music */}
          <Route exact path="/MusicLandingPage" element={<MusicLandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ProjectRoutes;
