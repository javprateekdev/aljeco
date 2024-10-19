"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Featured = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="tp-featured-slider-area grey-bg-6 fix pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper-2 mb-50">
              <span className="tp-section-title-pre-2">Shop by Category</span>
              <h3 className="tp-section-title-2">This Week Featured</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
          <div className="tp-featured-slider">
          <Swiper 
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              // modules={[Navigation, Pagination, Autoplay]}
              modules={[Navigation, Pagination]}
          >
              <SwiperSlide>
                  <div className="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div className="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-1.jpg)'}}></div>
                      <div className="tp-featured-content">
                        <h3 className="tp-featured-title">
                            <a href="#">Clothing <br/> Collection 2023</a>
                        </h3>
                        <div className="tp-featured-price-wrapper">
                            <span className="tp-featured-price new-price">$102.00</span>
                            <span className="tp-featured-price old-price">$226.00</span>
                        </div>
                        <div className="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="tp-featured-btn">
                            <Link href="/" className="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                            <FaArrowRightLong/>
                            </Link>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div className="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-1.jpg)'}}></div>
                      <div className="tp-featured-content">
                        <h3 className="tp-featured-title">
                            <a href="#">Clothing <br/> Collection 2023</a>
                        </h3>
                        <div className="tp-featured-price-wrapper">
                            <span className="tp-featured-price new-price">$102.00</span>
                            <span className="tp-featured-price old-price">$226.00</span>
                        </div>
                        <div className="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="tp-featured-btn">
                            <Link href="/" className="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                            <FaArrowRightLong/>
                            </Link>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div className="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-1.jpg)'}}></div>
                      <div className="tp-featured-content">
                        <h3 className="tp-featured-title">
                            <a href="#">Clothing <br/> Collection 2023</a>
                        </h3>
                        <div className="tp-featured-price-wrapper">
                            <span className="tp-featured-price new-price">$102.00</span>
                            <span className="tp-featured-price old-price">$226.00</span>
                        </div>
                        <div className="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="tp-featured-btn">
                            <Link href="/shopcat" className="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                            <FaArrowRightLong/>
                            </Link>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div className="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-1.jpg)'}}></div>
                      <div className="tp-featured-content">
                        <h3 className="tp-featured-title">
                            <a href="#">Clothing <br/> Collection 2023</a>
                        </h3>
                        <div className="tp-featured-price-wrapper">
                            <span className="tp-featured-price new-price">$102.00</span>
                            <span className="tp-featured-price old-price">$226.00</span>
                        </div>
                        <div className="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="tp-featured-btn">
                            <Link href="/shopcat" className="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                            <FaArrowRightLong/>
                            </Link>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
            </Swiper>


            <div className="tp-featured-slider-arrow mt-45">
              <button className="tp-featured-slider-button-prev" ref={prevRef}>
                <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.97974 7.97534L31.9797 7.97534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.02954 0.999999L0.999912 7.99942L8.02954 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="tp-featured-slider-button-next" ref={nextRef}>
                <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.9795 7.97534L0.979492 7.97534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24.9297 0.999999L31.9593 7.99942L24.9297 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
