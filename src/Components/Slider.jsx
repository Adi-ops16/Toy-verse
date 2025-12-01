import React, { use, useState } from 'react';
import { ToysContext } from '../provider/ToysProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { toys } = use(ToysContext);
    const sliderToys = toys.filter(t => t.featured === true);

    return (
        <div className="my-10">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                loop={sliderToys.length > 1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                speed={1000}
                effect='coverflow'
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 200,
                    modifier: 2,
                    slideShadows: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        coverflowEffect: { stretch: 0, depth: 120 },
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                        coverflowEffect: { stretch: -20, depth: 180 },
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 50,
                        coverflowEffect: { stretch: -50, depth: 200 },
                    },
                }}
            >
                {sliderToys.map((sliderToy, index) => (
                    <SwiperSlide key={sliderToy.toyId}>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-500">
                            <img
                                className="h-112 w-full object-cover brightness-[0.75] group-hover:brightness-100 transition-all duration-500"
                                src={sliderToy.pictureURL}
                                alt={sliderToy.toyName}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-5">
                                <h2
                                    className={`${activeIndex === index ? 'fadeInSlide' : 'opacity-0'
                                        } text-3xl md:text-4xl font-extrabold text-[#FFD700] drop-shadow-lg`}
                                >
                                    {sliderToy.toyName}
                                </h2>
                                <p
                                    className={`${activeIndex === index ? 'fadeRightSlide' : 'opacity-0'
                                        } text-white text-lg md:text-xl mt-3 max-w-2xl line-clamp-2`}
                                >
                                    {sliderToy.description}
                                </p>
                                <Link
                                    to={`toy-details/${sliderToy.toyId}`}
                                    className="mt-6 inline-flex items-center gap-2 bg-[#6f4e37] hover:bg-[#5b3f2d] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105"
                                >
                                    See details
                                    <ChevronRight />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
