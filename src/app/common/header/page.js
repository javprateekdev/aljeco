"use client"
import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaRegUser, FaSearch   } from "react-icons/fa";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { MdLogin, MdOutlineHome } from "react-icons/md";

import "swiper/css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../spacing.css'
import '../../../main.css'
import '../../../custom.css'
import Link from 'next/link';
import MobileMenus from './mobilemenus';
import MobileSearch from './mobilesearch';
import MobileSlideMenus from './MobileSlideMenus';
export default function Header() {
    return (
        <>
            <div id="tp-bottom-menu-sticky" className="tp-mobile-menu d-lg-none">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <div className="tp-mobile-item text-center">
                           <Link href="/" className="tp-mobile-item-btn">
                              <MdOutlineHome/>
                              <span>Home</span>
                           </Link>
                        </div>
                     </div>
                     <div className="col">
                        <div className="tp-mobile-item text-center">
                           <Link href={`/wishlist`} className="tp-mobile-item-btn tp-search-open-btn">
                              <FaRegHeart />
                              <span>Wishlist</span>
                           </Link>
                        </div>
                     </div>
                     <div className="col">
                        <MobileSearch/>
                     </div>
                     <div className="col">
                        <div className="tp-mobile-item text-center">
                           <Link href="/profile" className="tp-mobile-item-btn">
                              <FaRegUser/>
                              <span>Account</span>
                           </Link>
                        </div>
                     </div>
                     <div className="col">
                         <MobileMenus/>
                     </div>
                  </div>
               </div>
            </div>

            <header>
               <div className="tp-header-area tp-header-style-darkRed tp-header-height">
                  <div id="header-sticky" className="tp-header-bottom-2 tp-header-sticky">
                     <div className="container">
                        <div className="tp-mega-menu-wrapper p-relative">
                           <div className="row align-items-center">
                              <div className="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
                                 <div className="logo">
                                    <Link className='d-flex align-items-center gap-2' href="/">
                                       <Image 
                                             src="/assets/img/logo/logo.png" 
                                             alt="logo"
                                             width={45}
                                             height={45}
                                       /> 
                                       <span><strong>Aljeco</strong> </span>
                                    </Link>
                                 </div>
                              </div>
                              <div className="col-xl-4 d-none d-xl-block">
                                 <div className="main-menu menu-style-2">
                                    <nav className="tp-main-menu-content">
                                       <ul>
                                          <li><Link href="/shopcat">Mens</Link></li>
                                          <li><Link href="/shopcat">Womens</Link></li>
                                       </ul>
                                    </nav>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-7 col-md-7 col-sm-8 col-6">
                                 <div className="tp-header-bottom-right d-flex align-items-center justify-content-end gap-2 pl-20 pe-2">
                                    <div className="tp-header-search-2 d-none d-md-block">
                                       <form action="#">
                                          <input type="text" placeholder="Search Products..." />
                                          <button className='d-none d-sm-block' type="submit">
                                             <FiSearch/>                                     
                                          </button>
                                       </form>
                                    </div>
                                    <div className="tp-header-action d-flex align-items-center gap-xl-3 ms-xl-5">
                                       <div className="tp-header-action-item d-none d-lg-block">
                                          <Link href={`/wishlist`} className="tp-header-action-btn">
                                          <FaRegHeart/>
                                             <span className="tp-header-action-badge">4</span>                          
                                          </Link>
                                       </div>
                                       <div className="tp-header-action-item">
                                          <Link href={`/cart`} className="tp-header-action-btn cartmini-open-btn" >
                                             <BsHandbag/>   
                                             <span className="tp-header-action-badge">13</span>                                                                          
                                          </Link>
                                       </div>
                                       <div className="tp-header-action-item">
                                          <Link href={`/authentication/login`} className="d-flex align-items-center btn btn-primary" >
                                            <MdLogin style={{fontSize:'18px'}}/> <span className='ps-1 d-none d-md-block'>Login</span>                                                                      
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
        </>
    )
}