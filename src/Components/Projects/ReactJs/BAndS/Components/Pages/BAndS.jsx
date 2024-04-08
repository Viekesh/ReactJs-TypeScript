import "./BAndS.scss";
import LibraryFeatures from "../Featured/Carousel/LibraryFeatures";
import TopNav from "../Featured/Navigation/TopNav";
import SocialLinks from "../Featured/SocialLinks/SocialLinks";
import SubHead from "../Featured/Headings/SubHeadings/SubHeading";
import Hero from "../Featured/Main/Hero";
import Virtual from "../Featured/Virtual/Virtual";
import Product from "./Products/Product";



const BAndS = () => {
    return (
        <>
            <header className="bands_header">
                <TopNav />
                <SocialLinks />
                <Hero />
            </header>

            <section className="beauty_styles">
                <SubHead headTitle="Styles You Love" />
                <LibraryFeatures />
                <Virtual />
            </section>

            <section className="prod">
                <Product />
            </section>
        </>
    )
}



export default BAndS;