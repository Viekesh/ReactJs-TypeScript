import TestStyleSheet from "./Test.module.css";
import testImg from "../../../Img/testimonialHero.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import { EffectCards } from 'swiper/modules';
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TestimonialsData } from "../../../ServiceDB/Testimonial";

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

                <div className={TestStyleSheet.for_mobile}>
                    <div className={TestStyleSheet.test_carousel}>

                        <Swiper
                            slidesPerView={1}
                            slidesPerGroup={1}
                            spaceBetween={10}
                            loop={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            loopFillGroupWithBlank={true}
                            navigation={true}
                        >
                            {TestimonialsData.map((testimonial, i) => (
                                <SwiperSlide>
                                    <div className={TestStyleSheet.carousel_info}>
                                        <img src={testimonial.image} alt="" />
                                        <span>{testimonial.comment}</span>
                                        <span>{testimonial.name}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>

                <div className={TestStyleSheet.for_desktop}>
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
                                        <img src={testimonial.image} alt="" />
                                        <span>{testimonial.comment}</span>
                                        <span>{testimonial.name}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Testimonial;
