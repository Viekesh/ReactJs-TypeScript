import React from "react";
import "./TechStack.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { IconsAndName } from "../Data/TechStackData";
import TopNavigation from "../Navigation/TopNavigation";
import BottomNavigation from "../Navigation/BottomNavigation";
import PortfolioLinks from "../PorfolioLinks/PortfolioLinks";

const TechStack = () => {
  return (
    <>
    <TopNavigation />
    <PortfolioLinks />
    <BottomNavigation />
      <div className="techstack">

        <div className="page_heading">
          <h3>TechStack</h3>
        </div>

        <div className="page_info">
          <h3>
            here you can see TechStack used in projects. the programming
            language used according to project need or client requirement.
            scroll left and right to see more.
          </h3>
        </div>

        <div className="sm_slider">
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
            {IconsAndName.map((slide, i) => (
              <SwiperSlide>
                <div className="slider_elements x_y_axis_center">
                  <img src={slide.img} alt="techstack icons" className="icon" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TechStack;
