import { useEffect, useState } from 'react';
import { auth } from '../../../../FirebaseConfig';
import PageHeading from '../../LandingPage/PageHeading';
import BottomNav from '../../Navigation/BottomNav';
import TopNav from '../../Navigation/TopNav';
import BlogHeader from '../Components/BlogHeader';

const Blogs = () => {

  // We have to persist loggedIn user in our application and we need some user information as well
  // like display name, So here we can define useState (const [user, setUser] = useState(null);)
  // Initially it will be null
  const [user, setUser] = useState(null);

  const [active, setActive] = useState();

  useEffect(() => {

        // "auth" coming from firebaseConfig.js
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        })
    }, []);

  return (
    <div>
      <TopNav />
      <BottomNav />
      <PageHeading heading = "Blogs" />
      <BlogHeader />
    </div>
  )
}

export default Blogs;