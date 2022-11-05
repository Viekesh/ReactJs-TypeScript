import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";



const BlogLandingPage = () => {

  const [active, setActive] = useState("Home");

  return (
    <div>
      <Header active = {active} setActive = {setActive} />
      <Home />
    </div>
  );
};

export default BlogLandingPage;
