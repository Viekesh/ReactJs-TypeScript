import TopNav from "../../FeaturedComponents/Navigation/TopNav"
import SocialLinks from "../../FeaturedComponents/SocialLinks/SocialLinks";
import Footer from "./Footer";



const About = () => {
    return (
        <>
            <TopNav />
            <SocialLinks />
            <div className="about comic-neue-bold">
                <p className="comic-neue-bold
                ">
                    to know more about me just connect me on linkedIn, chat with me on whats app and call me regarding with any discussion I'm happy to help you.
                </p>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    )
}



export default About;