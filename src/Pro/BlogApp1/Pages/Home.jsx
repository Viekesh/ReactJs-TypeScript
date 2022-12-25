import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { database } from '../../../firebaseCon';
import BlogSection from '../Components/BlogSection';
import "./Stylesheets/Home.scss";



const Home = ({setActive}) => {

  const [loading, setLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);

  useEffect (() => {

    const unsubscribe = onSnapshot(
      collection(database, "BlogApp1Data"), (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({id : doc.id, ...doc.data() })
        });
        setBlogs(list.id);
      }, (error) => {
        console.log(error);
      }
    );

    return unsubscribe();

  }, [setActive]);

  console.log("BlogApp1Data", blogs);

  // const [tags, setTags] = useState([]);

  // const [trendBlogs, setTrendBlogs] = useState([]);

  return (
    <div className='blog_home_page'>

      <div className="trending_blog">
        <h2>Trending Blog</h2>
        <div className="trending">
          <BlogSection blogs={blogs} />
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