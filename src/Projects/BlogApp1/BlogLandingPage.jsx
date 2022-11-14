import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";



const BlogLandingPage = ({active, setActive, user, setUser}) => {

  return (
    <div>
      <Header active={active} setActive={setActive} user={user} setUser={setUser} />
      <Home active={active} setActive={setActive} user={user} setUser={setUser} />
    </div>
  );
};

export default BlogLandingPage;
