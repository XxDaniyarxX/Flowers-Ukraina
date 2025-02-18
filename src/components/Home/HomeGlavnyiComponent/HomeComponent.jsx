import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import HomeBannerImg from "../HomeBannerImg.jsx";
import arr_left from '/img_6.png';
import arr_right from '/img_7.png';
import HomeCarts from "../HomeCarts.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFlowers } from "../../../Redux/FlowersApi/FlowersSlice.js";
import novos from '/img_12.png';
import './HomeComponent.scss';
import HomeFlowersAbsolute from "../HomeFlowersAbsolute.jsx";
import SkeletonCards from '../../Skeletons/SkeletCards.jsx';
import Skelet3Image from '../../Skeletons/Skelet3Image.jsx';

function HomeComponent() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.flowers);

    useEffect(() => {
        dispatch(fetchFlowers());
    }, [dispatch]);

    return (
        <div className="home-component">
            <HomeFlowersAbsolute />
            <main style={{ width: "1420px", margin: "0 auto" }}>
                <div className="content-wrapper">
                    <HomeBannerImg />
                </div>

                {["Акции", "Сезонные", "Подарки"].map((title, i) => (
                    <div className="section" key={i}>
                        <div className="section-header">
                            <h4>{title}</h4>
                            <div className="navigation">
                            
                                <button className={`swiper-button-prev-${i}`}>
                                    <img src={arr_left} alt="prev" />
                                </button>
                                <button className={`swiper-button-next-${i}`}>
                                    <img src={arr_right} alt="next" />
                                </button>
                            </div>
                        </div>

                       
                       <div style={{width: "1420px", gap: "20px", display: "flex", flexWrap: "wrap"}}>
                       <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={4} 
                            slidesPerGroup={1} 
                            navigation={{
                                nextEl: `.swiper-button-next-${i}`,
                                prevEl: `.swiper-button-prev-${i}`
                            }}
                            loop={true}
                        >
                            {
                                loading === 'true' || !data.length ? (
                                    [...Array(8)].map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <SkeletonCards />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    data.slice(i * 8, (i + 1) * 8).map((flower, idx) => (
                                        <SwiperSlide key={idx}>
                                            <HomeCarts key={idx} flower={flower} />
                                        </SwiperSlide>
                                    ))
                                )
                            }
                        </Swiper>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={4} 
                            slidesPerGroup={1} 
                            navigation={{
                                nextEl: `.swiper-button-next-${i}`,
                                prevEl: `.swiper-button-prev-${i}`
                            }}
                            loop={true}
                        >
                            {
                                loading === 'true' || !data.length ? (
                                    [...Array(8)].map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <SkeletonCards />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    data.slice(i * 8, (i + 1) * 8).map((flower, idx) => (
                                        <SwiperSlide key={idx}>
                                            <HomeCarts key={idx} flower={flower} />
                                        </SwiperSlide>
                                    ))
                                )
                            }
                        </Swiper>

                       </div>

                    </div>
                ))}

                <div className="forum-section">
                    <div className="forum-header">
                        <h4>Форум</h4>
                        <img src={novos} alt="Новость" />
                    </div>
                    <div className="forum-items">
                        {
                            loading === 'true' || !data.length ? (
                                [...Array(3)].map((_, index) => <Skelet3Image key={index} />)
                            ) : (
                                data.slice(24, 27).map((item) => (
                                    <div className="forum-item" key={item.id}>
                                        <img src={item.imageUrl} alt="" />
                                        <div className="forum-description">
                                            <h4>Какие цветы под запретом: что нельзя дарить</h4>
                                            <p>
                                                Осведомленности в сфере новых трендов цветочного дизайна и знакомства с
                                                работами...
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomeComponent;
