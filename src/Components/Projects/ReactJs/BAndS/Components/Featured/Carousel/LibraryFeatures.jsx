import "./LibraryFeatures.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import { EffectCards } from 'swiper/modules';
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
// import 'swiper/css/effect-cards';
import { FeaturesOfBAndS } from "../../../ServiceDB/FeaturesOfBAndS";



const LibraryFeatures = () => {

    // const [name, setName] = useState("John Doe");
    // const [animatedName, setAnimatedName] = useState(name);

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    //     setAnimatedName(event.target.value);
    // };

    return (
        <>
            <div className="library_features">

                {/* <input type="text" value={name} onChange={handleNameChange} /> */}
                <Swiper
                    // slidesPerView={1}
                    // spaceBetween={20}
                    // slidesPerGroup={1}
                    loop={true}

                    // effect={'cards'}
                    // effect={'flip'}
                    // grabCursor={true}
                    pagination={false}
                    navigation={true}
                    modules={[Pagination, Navigation]}

                    className="mySwiper"
                // loopFillGroupWithBlank={true}
                >
                    {
                        FeaturesOfBAndS.map((linkData) => {
                            return (
                                <SwiperSlide key={linkData.id} className="e_com_swiper">
                                    <img src={linkData.img} alt="" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </>
    )
}



export default LibraryFeatures;
