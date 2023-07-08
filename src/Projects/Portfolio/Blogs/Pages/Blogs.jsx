import TopNav from '../../Navigation/TopNav';
import BottomNav from '../../Navigation/BottomNav';
import PageHeading from '../../../Components/PageHeading/PageHeading';
import BlogHeader from '../Components/BlogHeader';
import { useEffect, useState } from 'react';
import { auth } from '../../../../FirebaseConfig';

const Blogs = () => {

    // We have to persist loggedIn user in our application and we need some user information as well
    // like display name, So here we can define useState (const [user, setUser] = useState(null);)
    // Initially it will be null
    const[user, setUser] = useState(null);

    useEffect(() => {

        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        });

    }, []);

    return (
        <div>
            <TopNav />
            <BottomNav />
            <PageHeading heading="Blogs" />
            <BlogHeader />

            <div className="blog_container"></div>
        </div>
    )
}

export default Blogs;


