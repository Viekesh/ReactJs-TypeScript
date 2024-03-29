import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../Heading/Heading";
import { NavLink } from "react-router-dom";
import "./ReactJsPro.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slider1Content, Slider2Content } from "../../ServiceDB/ServiceDB";



const ReactJsPro = () => {
    return (
        <>
            <Heading head="Mini Projects :" />
            <div className="project_carausel_1">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    autoplay={{
                        delay: 9000,
                        disableOnInteraction: false,
                    }}

                >
                    {
                        Slider2Content.map((proData) => {
                            return (
                                <SwiperSlide className="inner_slide">
                                    <div className="circleOne"></div>
                                    <div className="circleTwo"></div>
                                    <div className="circleThree"></div>
                                    <div className="squareOne"></div>
                                    <div className="squareTwo"></div>
                                    <NavLink to={proData.nextPage} key={proData.id}>
                                        <div className={`sld ${proData.className}`}>
                                            <h3>{proData.projectTitle}</h3>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            <Heading head="ReactJs Practices :" />
            <div className="project_carausel_1">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    autoplay={{
                        delay: 9000,
                        disableOnInteraction: false,
                    }}

                >
                    {
                        Slider1Content.map((proData) => {
                            return (
                                <SwiperSlide className="inner_slide">
                                    <NavLink to={proData.navLink} key={proData.id}>
                                        <div className="sld">
                                            <h3 className="comic-neue-bold">{proData.projectTitle}</h3>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}



export default ReactJsPro;
