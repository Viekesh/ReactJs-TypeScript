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
            <PageHeading heading="Articles" />
            <BlogHeader />

            <div className="blog_container">
                <div className="sub_container">
                    <div className="row_container">
                        <h2>trending</h2>
                        <section className="blog_section"></section>
                        <section className="tag_section">
                            <h2>tags</h2>
                            <h2>most popular</h2>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogs;


