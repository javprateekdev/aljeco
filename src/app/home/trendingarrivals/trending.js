"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MdOutlineArrowBack, MdOutlineArrowForward, MdOutlineStar, MdOutlineStarHalf  } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import {CartIcon, EyeIcon, WishListIcon} from '../../SvgIcons'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Trending = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    const prevRef1 = useRef(null);
    const nextRef1 = useRef(null);
    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);

    const productData = [
        {
          image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/T/UT00685-1Y0000_11_listfront.jpg",
          store: "Whitetails Store",
          title: "Stellar Luminous Adjustable Gold Bracelet",
          newPrice: "$340.00",
          oldPrice: "$475.00",
          rating: 4.5
        },
        {
          image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04315-1YP900_11_listfront.jpg",
          store: "Whitetails Store",
          title: "Estrena Dazzling Diamond Necklace",
          newPrice: "$320.00",
          oldPrice: "$450.00",
          rating: 4.0
        },
        {
          image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE04059-YGP900_11_listfront.jpg",
          store: "Whitetails Store",
          title: "Classic Leaves Diamond Stud Earrings",
          newPrice: "$330.00",
          oldPrice: "$460.00",
          rating: 4.2
        },
        {
          image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE05164-1YP900_11_listfront.jpg",
          store: "Whitetails Store",
          title: "Ornate Floral Diamond Stud Earrings",
          newPrice: "$350.00",
          oldPrice: "$480.00",
          rating: 4.8
        },
        {
            image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/N/JN00048-YGP900_11_listfront.jpg",
            store: "Whitetails Store",
            title: "Eloria Gleaming Diamond Necklace",
            newPrice: "$330.00",
            oldPrice: "$460.00",
            rating: 4.2
          },
      ];

  return (
    <>
        <section className="tp-trending-area pt-60 pb-60">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-12 col-lg-12">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="men">
                        <div className="tp-trending-wrapper">
                            <div className="tp-section-title-wrapper-2 mb-50">
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <span className="tp-section-title-pre-2">
                                            More to Discover
                                            <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M81 14.5798C0.890564 -8.05914 -5.81154 0.0503902 5.00322 21" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round"/>
                                            </svg>
                                        </span>
                                        <h3 className="tp-section-title-2">Trending Arrivals</h3>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <Nav className="justify-content-end gap-2" variant="pills">
                                            <Nav.Item>
                                            <Nav.Link eventKey="men">Men</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="women">Women</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-trending-slider">
                                <div className="tp-trending-slider-active swiper-container">
                                <Tab.Content>
                                    <Tab.Pane eventKey="men">
                                        <div className="swiper-wrapper">
                                            <Swiper 
                                                className="mySwiper"
                                                spaceBetween={30}
                                                slidesPerView={4}
                                                pagination={{ clickable: true }}
                                                autoplay={{ delay: 3000 }}
                                                loop
                                                navigation={{
                                                    prevEl: prevRef1.current,
                                                    nextEl: nextRef1.current,
                                                }}
                                                onBeforeInit={(swiper) => {
                                                    swiper.params.navigation.prevEl = prevRef1.current;
                                                    swiper.params.navigation.nextEl = nextRef1.current;
                                                }}
                                                modules={[Navigation, Pagination, Autoplay]}
                                                breakpoints={{
                                                    320: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 10,
                                                    },
                                                    400: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 20,
                                                    },
                                                    768: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 30,
                                                    },
                                                    1024: {
                                                        slidesPerView: 4,
                                                        spaceBetween: 40,
                                                    },
                                                }}
                                            >
                                                {productData.map((product, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="tp-trending-item swiper-slide">
                                                    <div className="tp-product-item-2">
                                                        <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                                                        <a href="#">
                                                            <img src={product.image} alt={product.title} />
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
                                                            <a href="#">{product.store}</a>
                                                        </div>
                                                        <h3 className="tp-product-title-2">
                                                            <a href="#">{product.title}</a>
                                                        </h3>
                                                        <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                                            {[...Array(5)].map((_, i) => (
                                                            <span key={i}>
                                                                {i + 0.5 === product.rating ? <MdOutlineStarHalf /> : <MdOutlineStar />}
                                                            </span>
                                                            ))}
                                                        </div>
                                                        <div className="tp-product-price-wrapper-2">
                                                            <span className="tp-product-price-2 new-price">{product.newPrice}</span>
                                                            <span className="tp-product-price-2 old-price">{product.oldPrice}</span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div ref={prevRef1} className="swiper-button-prev custom-arrow">
                                                <MdOutlineArrowBack />
                                            </div>
                                            <div ref={nextRef1} className="swiper-button-next custom-arrow">
                                                <MdOutlineArrowForward />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="women">
                                        <div className="swiper-wrapper">
                                            <Swiper 
                                                className="mySwiper"
                                                spaceBetween={30}
                                                slidesPerView={4}
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
                                                breakpoints={{
                                                    320: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 10,
                                                    },
                                                    400: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 20,
                                                    },
                                                    768: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 30,
                                                    },
                                                    1024: {
                                                        slidesPerView: 4,
                                                        spaceBetween: 40,
                                                    },
                                                }}
                                            >
                                                {productData.map((product, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="tp-trending-item swiper-slide">
                                                    <div className="tp-product-item-2">
                                                        <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                                                        <a href="#">
                                                            <img src={product.image} alt={product.title} />
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
                                                            <a href="#">{product.store}</a>
                                                        </div>
                                                        <h3 className="tp-product-title-2">
                                                            <a href="#">{product.title}</a>
                                                        </h3>
                                                        <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                                            {[...Array(5)].map((_, i) => (
                                                            <span key={i}>
                                                                {i + 0.5 === product.rating ? <MdOutlineStarHalf /> : <MdOutlineStar />}
                                                            </span>
                                                            ))}
                                                        </div>
                                                        <div className="tp-product-price-wrapper-2">
                                                            <span className="tp-product-price-2 new-price">{product.newPrice}</span>
                                                            <span className="tp-product-price-2 old-price">{product.oldPrice}</span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div ref={prevRef} className="swiper-button-prev custom-arrow">
                                                <MdOutlineArrowBack />
                                            </div>
                                            <div ref={nextRef} className="swiper-button-next custom-arrow">
                                                <MdOutlineArrowForward />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>

                                </div>
                            </div>
                        </div>
                     </Tab.Container>
                  </div>
               </div>
            </div>
         </section>
    </>
  )
}

export default Trending
