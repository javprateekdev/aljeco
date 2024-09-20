"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { MdOutlineStar, MdOutlineStarHalf  } from "react-icons/md";
import { FaArrowRightLong, FaArrowLeftLong  } from "react-icons/fa6";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const MobileSlideMenus = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <>
      <div className="d-block d-lg-none container">
      <Swiper 
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={4}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                modules={[Navigation, Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <div className="text-center">
                        <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_BestSeller.png" alt="" />
                        <span>Latest</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_BestSeller.png" alt="" />
                        <span>Best Sellers</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_Rings.png" alt="" />
                        <span>Rings</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/08-August/Merch-Work/09/Silver_App_Menu_Square_03.png" alt="" />
                        <span>Silver</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/TopMenu/03/mobile_Earring.png" alt="" />
                        <span>Ear Rings</span>
                    </div>
                </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default MobileSlideMenus
