import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./ApplicationLinks.scss";
import { appLinks } from '../../Data/ECommerceData/EComData';
import { Navigation, Pagination } from 'swiper';

const ApplicationLinks = () => {
    return (
        <>
            <div className='app_links'>
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
                        appLinks.map((linkData) => {
                            return (
                                <SwiperSlide key={linkData.id} className="e_com_swiper">
                                    <a href={linkData.link}>
                                        <div className="link_images">{linkData.id}</div>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

export default ApplicationLinks;


