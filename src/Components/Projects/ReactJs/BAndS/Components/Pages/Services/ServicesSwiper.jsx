import React from "react";
import "./Services.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import servicesdata from "../../../ServiceDB/ServicesData";



const ServicesSwiper = () => {
    return (
        <>
            <div className="services_swiper">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                >
                    {
                        servicesdata.map((linkData) => {
                            return (
                                <SwiperSlide key={linkData.id} className="services_slide">
                                    <div className="inner_box">
                                        <div className="feature_image">
                                            <h3>{linkData.headTitle}</h3>
                                            <img src={linkData.img} alt={linkData.imgAlt} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </>
    )
}



export default ServicesSwiper;