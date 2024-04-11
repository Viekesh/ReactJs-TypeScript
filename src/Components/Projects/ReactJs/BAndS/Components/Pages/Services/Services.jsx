import servicesdata, { ServicesContent } from "../../../ServiceDB/ServicesData";
import CPaths from "../../Featured/ComponentPaths/CPaths";
import MainHeading from "../../Featured/Headings/MainHeading/MainHeading";
import SubHead from "../../Featured/Headings/SubHeadings/SubHeading";
import TopNav from "../../Featured/Navigation/TopNav";
import SocialLinks from "../../Featured/SocialLinks/SocialLinks";
import Footer from "../Footer/Footer";
import QnA from "../Qna/QnA";
import "./Services.scss";



const BAndSServices = () => {
    return (
        <>
            <TopNav />
            <SocialLinks />
            <section className="services">
                <MainHeading headingTitle="Services" />
                <CPaths p1="home" dest="services" />

                <div className="services_content">
                    <div className="content_head">
                        {
                            ServicesContent.map((content) => {
                                return (
                                    <>
                                        <h1>{content.contentOne}</h1>
                                    </>
                                )
                            })
                        }
                    </div>


                    {
                        servicesdata.map((data) => {
                            return (
                                <>
                                    <div className="service_categories x_y_axis_center" key={data.id}>
                                        <div className="category_box">
                                            <img src={data.img} alt="" />
                                            <p>{data.para}</p>

                                            {
                                                data.subCat.map((data) => {
                                                    return (
                                                        <>
                                                            <ul>
                                                                <li>{data.s1}</li>
                                                            </ul>
                                                        </>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                    <SubHead headTitle="Any Questions:" />
                    <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                    <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                    <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                    <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                    <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                    <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                </div>
            </section>

            <Footer />
        </>
    )
}



export default BAndSServices;
