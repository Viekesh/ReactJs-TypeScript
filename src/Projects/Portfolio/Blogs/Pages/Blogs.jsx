import PageHeading from '../../LandingPage/PageHeading';
import BottomNav from '../../Navigation/BottomNav';
import TopNav from '../../Navigation/TopNav';
import BlogHeader from '../Components/BlogHeader';

const Blogs = () => {

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