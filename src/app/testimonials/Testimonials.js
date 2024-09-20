"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { MdOutlineStar, MdOutlineStarHalf  } from "react-icons/md";
import { FaArrowRightLong, FaArrowLeftLong  } from "react-icons/fa6";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <>


<section className="tp-testimonial-area grey-bg-7 pt-100 pb-60">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-12">
                     <div className="tp-testimonial-slider p-relative z-index-1">
                        <div className="tp-testimonial-shape">
                           <span className="tp-testimonial-shape-gradient"></span>
                        </div>
                        <h3 className="tp-testimonial-section-title text-center">The Review Are In</h3>
                        <div className="row justify-content-center">
                           <div className="col-xl-8 col-lg-8 col-md-10">
                              <div className="tp-testimonial-slider-active swiper-container">
                                 <div className="swiper-wrapper">
                                    <Swiper 
                                            className="mySwiper"
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            autoplay={{ delay: 3000 }}
                                            loop
                                            navigation={{
                                                prevEl: prevRef.current,
                                                nextEl: nextRef.current,
                                            }}
                                            onBeforeInit={(swiper) => {
                                                swiper.params.navigation.prevEl = prevRef.current;
                                                swiper.params.navigation.nextEl = nextRef.current;
                                            }}
                                            modules={[Navigation, Pagination, Autoplay]}
                                        >
                                            <SwiperSlide>
                                                <div className="tp-testimonial-item text-center mb-20 swiper-slide">
                                                    <div className="tp-testimonial-rating">
                                                        <span><MdOutlineStar/></span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStarHalf /> </span>
                                                    </div>
                                                    <div className="tp-testimonial-content">
                                                        <p>“ How you use the city or town name is up to you. All results may be freely used in any work.”</p>
                                                    </div>
                                                    <div className="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                                        <div className="tp-testimonial-user d-flex align-items-center">
                                                            <div className="tp-testimonial-avater mr-10">
                                                                <img src="assets/img/users/user-2.jpg" alt="" />
                                                            </div>
                                                            <div className="tp-testimonial-user-info tp-testimonial-user-translate">
                                                                <h3 className="tp-testimonial-user-title">Theodore Handle</h3>
                                                                <span className="tp-testimonial-designation">CO Founder</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tp-testimonial-item text-center mb-20 swiper-slide">
                                                    <div className="tp-testimonial-rating">
                                                        <span><MdOutlineStar/></span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStarHalf /> </span>
                                                    </div>
                                                    <div className="tp-testimonial-content">
                                                        <p>“Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!”</p>
                                                    </div>
                                                    <div className="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                                        <div className="tp-testimonial-user d-flex align-items-center">
                                                            <div className="tp-testimonial-avater mr-10">
                                                                <img src="assets/img/users/user-3.jpg" alt="" />
                                                            </div>
                                                            <div className="tp-testimonial-user-info tp-testimonial-user-translate">
                                                                <h3 className="tp-testimonial-user-title">Shahnewaz Sakil</h3>
                                                                <span className="tp-testimonial-designation">UI/UX Designer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tp-testimonial-item text-center mb-20 swiper-slide">
                                                    <div className="tp-testimonial-rating">
                                                        <span><MdOutlineStar/></span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStarHalf /> </span>
                                                    </div>
                                                    <div className="tp-testimonial-content">
                                                        <p>“Thanks for all your efforts and teamwork over the last several months!  Thank you so much”</p>
                                                    </div>
                                                    <div className="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                                        <div className="tp-testimonial-user d-flex align-items-center">
                                                            <div className="tp-testimonial-avater mr-10">
                                                                <img src="assets/img/users/user-4.jpg" alt="" />
                                                            </div>
                                                            <div className="tp-testimonial-user-info tp-testimonial-user-translate">
                                                                <h3 className="tp-testimonial-user-title">James Dopli</h3>
                                                                <span className="tp-testimonial-designation">Developer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="tp-testimonial-arrow d-none d-md-block">
                           <button className="tp-testimonial-slider-button-prev">
                              <FaArrowLeftLong/>
                           </button>
                           <button className="tp-testimonial-slider-button-next">
                              <FaArrowRightLong/>
                           </button>
                        </div>
                        <div className="tp-testimonial-slider-dot tp-swiper-dot text-center mt-30 tp-swiper-dot-style-darkRed d-md-none"></div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </>
  )
}

export default Testimonials
