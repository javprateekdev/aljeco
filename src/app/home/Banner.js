"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy(); 
      swiperInstance.navigation.init();   
      swiperInstance.navigation.update();  
    }
  }, []);

  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
        <div className="tp-slider-active tp-slider-variation swiper-container">
          <Swiper 
            className="mySwiper"
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            // modules={[Navigation, Pagination, Autoplay]}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <Link href="/shopcat">
                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/SolitaireBlog/Desktop.webp"/>
                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/WorkWear/Mobile768x890.webp"/>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shopcat">
                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/WorkWear/Desktop1920x694.webp"/>
                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/DigiGold/01/Mobile_768x890.jpg"/>

              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/shopcat">
                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/05_May/Banner/Extra/01/Desktop_1920x694.jpg"/> 
                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/SolitaireBlog/Mobile.webp"/> 
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="tp-slider-arrow tp-swiper-arrow d-none d-lg-block">
          <button type="button" className="tp-slider-button-prev" ref={prevRef}>
            <FaAngleLeft/>                       
          </button>
          <button type="button" className="tp-slider-button-next" ref={nextRef}>
            <FaAngleRight/>                     
          </button>
        </div>  
      </section>
    </>
  )
}

export default Banner;
