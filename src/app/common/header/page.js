"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { MdLogin, MdOutlineHome } from "react-icons/md";
import { useRouter } from "next/navigation"; // Import useRouter
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../spacing.css";
import "../../../main.css";
import "../../../custom.css";
import MobileMenus from "./mobilemenus";
import MobileSearch from "./mobilesearch";
import MobileSlideMenus from "./MobileSlideMenus";
import axios from "axios";
import { apiUrl } from "@/app/api";
import { CartContext } from "@/context/cartContext";
import { WishListContext } from "@/context/WishListContext";
import { BiUser } from "react-icons/bi";

export default function Header() {
  const { cartItems, fetchCart } = useContext(CartContext);
  const { wishListItems, fetchWishlist } = useContext(WishListContext);
  const router = useRouter(); // Use router for navigation

  useEffect(() => {
    fetchCart();
    fetchWishlist();
  }, []);

  const loggedIn = localStorage.getItem("token");

  return (
    <>
      <div id="tp-bottom-menu-sticky" className="tp-mobile-menu d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button onClick={() => router.push("/")} className="tp-mobile-item-btn">
                  <MdOutlineHome />
                  <span>Home</span>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button
                  onClick={() => router.push(loggedIn ? "/wishlist" : "/authentication/login")}
                  className="tp-mobile-item-btn tp-search-open-btn"
                >
                  <FaRegHeart />
                  <span>Wishlist</span>
                </button>
              </div>
            </div>
            <div className="col">
              <MobileSearch />
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button onClick={() => router.push("/profile")} className="tp-mobile-item-btn">
                  <FaRegUser />
                  <span>Account</span>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button
                  onClick={() => router.push(loggedIn ? "/cart" : "/authentication/login")}
                  className="tp-mobile-item-btn text-center"
                >
                  <BsHandbag />
                  <span className="tp-header-action-badge mobilecart">
                    {cartItems.length ? cartItems.length : 0}
                  </span>
                  <span>Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="tp-header-area tp-header-style-darkRed tp-header-height">
          <div id="header-sticky" className="tp-header-bottom-2 tp-header-sticky">
            <div className="container-fluid">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
                    <div className="logo">
                      <button onClick={() => router.push("/")} className="d-flex align-items-center gap-2">
                        <img src="/assets/img/logo/logo.png" alt="logo" />
                        <span>
                          <strong>Aljeco</strong>{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-4 d-none d-xl-block">
                    <div className="main-menu menu-style-2">
                      <nav className="tp-main-menu-content">
                        <ul>
                          <li>
                            <button onClick={() => router.push("/men")}>Mens</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7 col-md-7 col-sm-8 col-6">
                    <div className="tp-header-bottom-right d-flex align-items-center justify-content-end gap-2 pl-20 pe-2">
                      <div className="tp-header-search-2 d-none d-md-block">
                        <form action="#">
                          <input type="text" placeholder="Search Products..." />
                          <button className="d-none d-sm-block" type="submit">
                            <FiSearch />
                          </button>
                        </form>
                      </div>
                      <div className="tp-header-action d-flex align-items-center gap-xl-3 ms-xl-5">
                        <div className="tp-header-action-item d-none d-lg-block">
                          <button onClick={() => router.push("/wishlist")} className="tp-header-action-btn">
                            <FaRegHeart />
                            <span className="tp-header-action-badge">
                              {wishListItems.length ? wishListItems.length : 0}
                            </span>
                          </button>
                        </div>
                        <div className="tp-header-action-item d-block d-xl-none">
                          <MobileMenus />
                        </div>
                        <div className="tp-header-action-item d-none d-xl-block">
                          <button onClick={() => router.push("/cart")} className="tp-header-action-btn cartmini-open-btn">
                            <BsHandbag />
                            <span className="tp-header-action-badge">
                              {cartItems.length ? cartItems.length : 0}
                            </span>
                          </button>
                        </div>
                        {loggedIn ? (
                          <></>
                        ) : (
                          <div className="tp-header-action-item">
                            <button
                              onClick={() => router.push("/authentication/login")}
                              className="d-flex align-items-center btn btn-primary"
                            >
                              <MdLogin style={{ fontSize: "18px" }} />{" "}
                              <span className="ps-1 d-none d-md-block">Login</span>
                            </button>
                          </div>
                        )}

                        <div className="tp-header-action-item d-none d-md-block">
                          <button
                            onClick={() => router.push("/profile")}
                            className="d-flex align-items-center btn btn-primary"
                          >
                            <BiUser style={{ fontSize: "18px" }} />{" "}
                            <span className="ps-1">Profile</span>
                          </button>
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
  );
}
