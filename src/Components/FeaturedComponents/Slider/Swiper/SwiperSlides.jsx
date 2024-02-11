import { NavLink } from "react-router-dom";
import "./SwiperSlides.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";



const SwiperSlides = ({ id, projectTitle, navLink }) => {
    return (
        <>
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
                    <SwiperSlide className="inner_slide">
                        <NavLink to="" key="">
                            <div className="sld">
                                <h3>projectTitle</h3>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                }
            </Swiper>
        </>
    )
}



export default SwiperSlides;