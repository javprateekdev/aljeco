import { FaArrowRightLong } from "react-icons/fa6";
import Banner from "./Banner";
import ProductList from "./productlist/ProductList";
import Featured from "./featured/featured";
import Trending from "./trendingarrivals/trending";
import Testimonials from "../testimonials/Testimonials";
import Link from "next/link";
import MobileSlideMenus from "../common/header/MobileSlideMenus";
import { FaSearch } from "react-icons/fa";

export default function HomePage() {
    return (
        <>

            <div className='d-block d-lg-none container pt-80 pb-10'>
                <div className="tp-search-input mb-10">
                <input type="text" placeholder="Search product..." />
                <span className='searchicon'><FaSearch/> </span>
                </div>
            </div>
            <MobileSlideMenus/>
            
            <Banner/>
            <section className="productcat py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <Link href="/shopcat">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/08-August/Responsive/09/Responsive-05.jpg"/>
                            </Link>
                        </div>
                        <div className="col-6">
                           <div>
                                <Link href="/shopcat">
                                    <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/RTS/2x.webp"/>
                                </Link>
                           </div>
                           <div className="pt-2 pt-md-4">
                                <Link href="/shopcat">
                                    <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/LatestDesigns/01/1X.webp"/>
                                </Link>
                           </div>
                        </div>
                    </div>
                    <div className="row py-4 py-md-5">
                        <div className="col-6 col-md-4 pb-2 pb-md-4">
                            <Link href="/shopcat">
                                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/Desktop_1.png"/>
                                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/mobile_1.png"/>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 pb-2 pb-md-4">
                            <Link href="/shopcat">
                                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/Desktop_4.png"/>
                                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/mobile_4.png"/>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 pb-2 pb-md-4">
                            <Link href="/shopcat">
                                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/Desktop_3.png"/>
                                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/mobile_3.png"/>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 pb-2 pb-md-4">
                            <Link href="/shopcat">
                                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/Desktop_4.png"/>
                                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/mobile_5.png"/>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 pb-2 pb-md-4">
                            <Link href="/shopcat">
                                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/Desktop_5.png"/>
                                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/mobile_2.png"/>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 pb-2 pb-md-4">
                            <Link href="/shopcat">
                                <img className="img-fluid d-none d-lg-block" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/Desktop_6.png"/>
                                <img className="img-fluid d-block d-lg-none" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/tile/02/mobile_6.png"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="tp-banner-area mt-20">
                <div className="container-fluid tp-gx-40">
                <div className="row tp-gx-20">
                    <div className="col-xxl-3 col-lg-6 col-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-1.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Top wear <br/> women</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-2.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Top wear <br/> men</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-3.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Winter <br/> wear</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-3.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Summer wear <br/> wear</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section> */}

            <section className="">
                <div className="d-flex">
                  <Link href="/shopcat">
                    <img className="img-fluid" src="assets/videoframe_1216.png"/>
                  </Link>
                </div>            
            </section>
            <section className="py-4 py-md-5">
                <div className="container-fluid py-md-4">
                    <div className="row align-items-center">
                        <div className="col-md-4 order-lg-1 mb-3 mb-lg-0">
                            <Link href="/shopcat">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/CollectionBlock/Disney/Collection_disney_11.jpg"/>
                            </Link>
                        </div>
                        <div className="col-md-4 order-lg-3 mb-3 mb-lg-0">
                            <Link href="/shopcat">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/03_MAR/HPbanner/Collection/Collection_Harry_potter.jpg"/>
                            </Link>
                        </div>
                        <div className="col-md-4 text-center order-lg-2 mb-3 mb-lg-0">
                            <Link href="/shopcat">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/05_May/Banner/Collection/Utsav.jpg"/>
                            </Link>
                            <Link href={`/shopcat`} className="btn btn-primary py-2 px-4 mt-4">View All Collections</Link>
                        </div>
                    </div>

                </div>            
            </section>

            <section className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-md-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/ReferAndEarn/2x.webp"/>
                            </a>
                        </div>
                        <div className="col-6 col-md-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/POP_banner/2x_1.jpg"/>
                            </a>
                        </div>
                        <div className="col-6 col-md-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/RTS/2x.webp"/>
                            </a>
                        </div>
                        <div className="col-6 col-md-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/Kids/2x.webp"/>
                            </a>
                        </div>
                        <div className="col-6 col-md-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/EarPiercing/2x.webp"/>
                            </a>
                        </div>
                        <div className="col-6 col-md-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/Liquidation/02/2X.webp"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid" src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png"/>
                        </div>
                        <div className="col-md-6">
                            <h2>A Stylish Upgrade</h2>
                             <p className="py-3">- Enjoy 0% Deduction on your gold exchange value. Please note: The old gold doesn’t have to be from only CaratLane, it can be any gold jewellery you have. </p>
                             <button className="btn btn-primary btn-lg mt-3 px-4">Know More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-2 py-md-5 theme-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 text-center pb-40">
                            <img className="img-fluid" src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png"/>
                            <p className="text-white">The highest quality of craftsmanship and innovation,
                            that brings you modern, everyday designs.</p>
                            <button className="btn btn-primary px-3">Know more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Popular/> */}

            {/* <ProductList/> */}
            {/* <Featured/> */}

            <Trending/>

            <Testimonials/>

            <section className="py-5">
                <div className="container py-0 py-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center">
                                        <img src="https://assets.cltstatic.com/images/responsive/purple-gift-icon.png" alt="" />
                                        <div className="text-white">
                                            <h2>Join CaratLane Insider</h2>
                                            <p>To discover enticing deals, latest arrivals, & more</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Enter email" />
                                    <button className="btn btn-primary btn-block w-100 mt-3">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          


        </>
    )
}