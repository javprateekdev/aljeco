import React from 'react'
import Link from 'next/link';

const BannerItem = () => {
  return (
    <>
        <div className="tp-slider-item-2 tp-slider-height-2 p-relative swiper-slide grey-bg-5 d-flex align-items-end">
            <div className="tp-slider-2-shape">
                <img className="tp-slider-2-shape-1" src="/assets/img/slider/2/shape/shape-1.png" alt="" />
            </div>
            <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-slider-content-2">
                        <span>New Arrivals 2024</span>
                        <h3 className="tp-slider-title-2">The Clothing Collection</h3>
                        <div className="tp-slider-btn-2">
                        <Link href="/shopcat" className="tp-btn tp-btn-border">Shop Collection</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-slider-thumb-2-wrapper p-relative">
                        <div className="tp-slider-thumb-2-shape">
                        <img className="tp-slider-thumb-2-shape-1" src="/assets/img/slider/2/shape/shape-2.png" alt="" />
                        <img className="tp-slider-thumb-2-shape-2" src="/assets/img/slider/2/shape/shape-3.png" alt="" />
                        </div>
                        <div className="tp-slider-thumb-2 text-end">
                        <span className="tp-slider-thumb-2-gradient"></span>
                        <img src="/assets/img/slider/2/slider-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default BannerItem
