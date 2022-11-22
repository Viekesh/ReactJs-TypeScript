import React from "react";
import TestStyleSheet from "./Test.module.css";
import testImg from "../../Images/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../Data/Testimonial";
import { Navigation, Pagination } from "swiper";

const Testimonial = () => {
    return (
        <div className={TestStyleSheet.test}>
            <div className={TestStyleSheet.testimonial}>

                <div className={TestStyleSheet.test_wrapper}>
                    <div className={TestStyleSheet.container}>
                        <span>Top Rated</span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio?
                        </span>
                    </div>


                    <img src={testImg} alt="" />

                    <div className={TestStyleSheet.container}>
                        <span>100k</span>
                        <span>Happy Customer With Us</span>
                    </div>
                </div>

                <div className={TestStyleSheet.reviews}>Reviews</div>

                <div className={TestStyleSheet.test_carousel}>
                    <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    >
                        {TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide>
                                <div className={TestStyleSheet.carousel_info}>
                                    <img src={testimonial.img} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;
