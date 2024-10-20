"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { CartIcon, EyeIcon, WishListIcon } from '../../SvgIcons';
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";

const RelatedProducts = () => {
    const prevRef1 = useRef(null);
    const nextRef1 = useRef(null);

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
        <section className="tp-related-product pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="tp-section-title-wrapper-6 text-center mb-40">
                        <h3 className="tp-section-title-6">Related Products</h3>
                    </div>
                </div>
                <div className="row">
                    <Swiper 
                        className="mySwiper"
                        spaceBetween={30}
                        slidesPerView={4}
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
                        modules={[Navigation, Autoplay, Scrollbar]}
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
                </div>
            </div>
        </section>
    );
}

export default RelatedProducts;
