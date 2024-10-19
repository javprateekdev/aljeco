"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MdOutlineStar, MdOutlineStarHalf  } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import {CartIcon, EyeIcon, WishListIcon} from '../../SvgIcons'

const Trending = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <>
        <section className="tp-trending-area pt-60 pb-60">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-6">
                     <div className="tp-trending-wrapper">
                        <div className="tp-section-title-wrapper-2 mb-50">
                           <span className="tp-section-title-pre-2">
                              More to Discover
                              <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M81 14.5798C0.890564 -8.05914 -5.81154 0.0503902 5.00322 21" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round"/>
                              </svg>
                           </span>
                           <h3 className="tp-section-title-2">Trending Arrivals</h3>
                        </div>
                        <div className="tp-trending-slider">
                           <div className="tp-trending-slider-active swiper-container">
                              <div className="swiper-wrapper">
                              <Swiper 
                                    className="mySwiper"
                                    spaceBetween={10}
                                    slidesPerView={2}
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
                                        <div className="tp-trending-item swiper-slide">
                                            <div className="tp-product-item-2">
                                            <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                                                <a href="#">
                                                    <img src="assets/img/product/trending/trending-1.jpg" alt="" />
                                                </a>
                                                <div className="tp-product-action-2 tp-product-action-blackStyle">
                                                    <div className="tp-product-action-item-2 d-flex flex-column">
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                                                        <CartIcon />                                          
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                                                        </button>
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                                        <EyeIcon />                                                                      
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                                                        </button>
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                                                        <WishListIcon />                                                                               
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tp-product-content-2 pt-15">
                                                <div className="tp-product-tag-2">
                                                    <a href="#">Whitetails Store</a>
                                                </div>
                                                <h3 className="tp-product-title-2">
                                                    <a href="#">Brown Gown for Women</a>
                                                </h3>
                                                <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                                    <span><MdOutlineStar/></span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStarHalf /> </span>
                                                </div>
                                                <div className="tp-product-price-wrapper-2">
                                                    <span className="tp-product-price-2 new-price">$340.00</span>
                                                    <span className="tp-product-price-2 old-price">$475.00</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tp-trending-item swiper-slide">
                                            <div className="tp-product-item-2">
                                            <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                                                <a href="#">
                                                    <img src="assets/img/product/trending/trending-1.jpg" alt="" />
                                                </a>
                                                <div className="tp-product-action-2 tp-product-action-blackStyle">
                                                    <div className="tp-product-action-item-2 d-flex flex-column">
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                                                        <CartIcon />                                          
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                                                        </button>
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                                        <EyeIcon />                                                                      
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                                                        </button>
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                                                        <WishListIcon />                                                                               
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tp-product-content-2 pt-15">
                                                <div className="tp-product-tag-2">
                                                    <a href="#">Whitetails Store</a>
                                                </div>
                                                <h3 className="tp-product-title-2">
                                                    <a href="#">Brown Gown for Women</a>
                                                </h3>
                                                <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                                    <span><MdOutlineStar/></span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStarHalf /> </span>
                                                </div>
                                                <div className="tp-product-price-wrapper-2">
                                                    <span className="tp-product-price-2 new-price">$340.00</span>
                                                    <span className="tp-product-price-2 old-price">$475.00</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tp-trending-item swiper-slide">
                                            <div className="tp-product-item-2">
                                            <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                                                <a href="#">
                                                    <img src="assets/img/product/trending/trending-1.jpg" alt="" />
                                                </a>
                                                <div className="tp-product-action-2 tp-product-action-blackStyle">
                                                    <div className="tp-product-action-item-2 d-flex flex-column">
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                                                        <CartIcon />                                          
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                                                        </button>
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                                        <EyeIcon />                                                                      
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                                                        </button>
                                                        <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                                                        <WishListIcon />                                                                               
                                                        <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tp-product-content-2 pt-15">
                                                <div className="tp-product-tag-2">
                                                    <a href="#">Whitetails Store</a>
                                                </div>
                                                <h3 className="tp-product-title-2">
                                                    <a href="#">Brown Gown for Women</a>
                                                </h3>
                                                <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                                    <span><MdOutlineStar/></span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStar/>  </span>
                                                    <span><MdOutlineStarHalf /> </span>
                                                </div>
                                                <div className="tp-product-price-wrapper-2">
                                                    <span className="tp-product-price-2 new-price">$340.00</span>
                                                    <span className="tp-product-price-2 old-price">$475.00</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                              </div>
                           </div>
                           <div className="tp-trending-slider-dot tp-swiper-dot text-center mt-45"></div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-8 col-sm-10">
                     <div className="tp-trending-banner p-relative ml-35">
                        <div className="tp-trending-banner-thumb w-img include-bg" style={{background:'url(assets/img/product/trending/banner/trending-banner.jpg)'}}></div>
                        <div className="tp-trending-banner-content">
                           <h3 className="tp-trending-banner-title">
                              <a href="#">Short Sleeve Tunic <br/> Tops Casual Swing</a>
                           </h3>
                           <div className="tp-trending-banner-btn">
                              <a href="#" className="tp-btn tp-btn-border tp-btn-border-white tp-btn-border-white-sm">
                                 Explore More
                                 <FaArrowRightLong/>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </>
  )
}

export default Trending
