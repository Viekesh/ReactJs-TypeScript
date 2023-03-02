import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./MGSlider.scss";

// // import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const MGSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mg_slider">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        grabCursor={true}
        className="mySwiper2"
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((imgs) => {
          return (
            <div className="music_gallery_images">
              <SwiperSlide key={imgs.id}>
                <div className="images_slider_thumbs_wrapper">
                  <img src={imgs.img} alt="img" />
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      
    </div>
  );
};

export default MGSlider;
