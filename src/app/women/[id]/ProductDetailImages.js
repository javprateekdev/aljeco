"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Images array
const images = [
  { src: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00709-1Y0000_1_lar.jpg", alt: "Image 1" },
  { src: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00709-1Y0000_3_lar.jpg", alt: "Image 2" },
  { src: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00709-1Y0000_4_lar.jpg", alt: "Image 3" },
  { src: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00709-1Y0000_6_lar.jpg", alt: "Image 4" },
  { src: "https://cdn.caratlane.com/media/catalog/product/J/T/JT00935-1YP900_6_lar.jpg", alt: "Image 5" },
  { src: "https://cdn.caratlane.com/media/catalog/product/J/T/JT00935-1YP900_6_lar.jpg", alt: "Image 6" },
];

const ProductDetailImages = () => {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="row row-gap-3">
          {images.map((image, index) => (
            <div key={index} className="col-6 col-md-6">
              <img className="img-fluid border" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="d-block d-md-none">
        <Swiper 
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{ delay: 3000 }}
            loop
            // modules={[Navigation, Pagination, Autoplay]}
            modules={[Navigation, Pagination]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className="img-fluid border" src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductDetailImages;
