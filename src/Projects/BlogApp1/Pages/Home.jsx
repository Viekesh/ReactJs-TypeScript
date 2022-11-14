import React from 'react';
import "./Stylesheets/Home.scss";



const Home = () => {
  return (
    <div className='blog_home_page'>

      <div className="trending_blog">
        <h2>Trending Blog</h2>
        <div className="trending">
          <h2>Blog Section</h2>
        </div>
      </div>

      <div className="most_popular home_component">
        <h2>Tags</h2>
        <h2>Most Popular</h2>
      </div>

    </div>
  )
}

export default Home;