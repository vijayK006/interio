"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <div className='banner'>

                <div className='content'>
                    <h6>Welcome to Interio</h6>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        effect={'fade'}
                        className="mySwiper"
                        loop={true}
                        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[EffectFade, Autoplay]}
                    >
                        <SwiperSlide className='cards-bgwhite'>
                            <h4>Furniture Collection</h4>
                            <p> Discover a curated selection of furniture that transcends trends,
                                offering both functionality and sophistication. Transform your home into
                                a haven of elegance with our thoughtfully curated Furniture Collection.</p>
                        </SwiperSlide>

                        <SwiperSlide className='cards-bgwhite'>
                            <h4>Sofas Collection</h4>
                            <p>Explore the epitome of comfort and elegance – redefine your living
                                experience with our stunning Sofa Collection.</p>

                        </SwiperSlide>

                        <SwiperSlide className='cards-bgwhite'>
                            <h4>Home Interior Collection</h4>
                            <p> Transform your home into a sanctuary of beauty and serenity.
                                Explore the art of living well with our thoughtfully curated Home
                                Interior Collection</p>

                        </SwiperSlide>


                    </Swiper>
                </div>

            </div>
        </>
    )
}

export default Banner
