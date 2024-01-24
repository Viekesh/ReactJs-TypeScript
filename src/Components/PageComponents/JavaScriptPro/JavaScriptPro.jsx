import React from "react";
import Heading from "../Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { JSContent } from "./JavaScriptContent";
import { NavLink } from "react-router-dom";



const JavaScriptPro = () => {
    return (
        <>
            <Heading head="JavaScript Projects :" />
            <div className="project_carausel">
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
                        JSContent.map((proData) => {
                            return (
                                <SwiperSlide className="inner_slide">
                                    <NavLink to={proData.navLink} key={proData.id}>
                                        <div className="sld">
                                            <h3>{proData.projectTitle}</h3>
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



export default JavaScriptPro;