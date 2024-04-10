import "./BAndS.scss";
import LibraryFeatures from "../Featured/Carousel/LibraryFeatures";
import TopNav from "../Featured/Navigation/TopNav";
import SocialLinks from "../Featured/SocialLinks/SocialLinks";
import SubHead from "../Featured/Headings/SubHeadings/SubHeading";
import Hero from "../Featured/Main/Hero";
import Virtual from "../Featured/Virtual/Virtual";
import Product from "./Products/Product";
import InformationContent from "./InformationContent";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";
import QnA from "./Qna/QnA";



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
                <InformationContent />
                <Testimonial />

                <SubHead headTitle="Any Question:" />
                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />
            </section>

            <Footer />
        </>
    )
}



export default BAndS;