import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';
import { SliderProducts } from '../../Data/Products';
import "./Slider.css";


// Styles for slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Slider = () => {
    return (
        <div className='carousel'>
            <h3>Products</h3>
            <div className="desk_slider">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                >

                    {SliderProducts.map((slide, i) => (
                        <SwiperSlide>
                            <div className="left_s">
                                <img src={slide.img} alt="Product" className='img_p' />
                                <div className="name">
                                    <span>{slide.name}</span>
                                    <span>{slide.detail}</span>
                                    <div>Shop Now</div>
                                    <span>{slide.price}$</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Slider;


