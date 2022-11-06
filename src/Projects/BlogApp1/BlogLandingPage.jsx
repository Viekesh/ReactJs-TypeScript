import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";



const BlogLandingPage = ({active, setActive, user}) => {

  return (
    <div>
      <Header active={active} setActive={setActive} user={user} />
      <Home />
    </div>
  );
};

export default BlogLandingPage;
