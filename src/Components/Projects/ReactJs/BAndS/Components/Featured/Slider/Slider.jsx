import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import { EffectCards } from 'swiper/modules';
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderProducts } from '../../../ServiceDB/Products';
import "./Slider.css";


// Styles for slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Slider = () => {
    return (
        <div className='carousel'>
            <div className="smartphone_slider">
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
                    {SliderProducts.map((slide, i) => (
                        <SwiperSlide key={i.id}>
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

            <div className="desk_slider">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
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


