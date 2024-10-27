"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import {
  FaHeart,
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { BsHandbag, BsHandbagFill, BsSearch } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { MdHome, MdLogin, MdOutlineHome } from "react-icons/md";
import { useRouter } from "next/navigation"; // Import useRouter
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../spacing.css";
import "../../../main.css";
import "../../../custom.css";
import MobileMenus from "./mobilemenus";
import MobileSearch from "./mobilesearch";
import { CartContext } from "../../../context/CartContext";
import { WishListContext } from "../../../context/WishListContext";
import { BiUser } from "react-icons/bi";
import Link from "next/link";

export default function Header() {
  const { cartItems, fetchCart } = useContext(CartContext);
  const [activeMenu, setActiveMenu] = useState("");
  const { wishListItems, fetchWishlist } = useContext(WishListContext);
  const router = useRouter(); // Use router for navigation
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      fetchCart();
      fetchWishlist();
    }
  }, []);

  useEffect(() => {
    const currentPath = router.pathname;
    if (currentPath === "/") setActiveMenu("home");
    else if (currentPath === "/wishlist") setActiveMenu("wishlist");
    else if (currentPath === "/profile") setActiveMenu("profile");
    else if (currentPath === "/cart") setActiveMenu("cart");
  }, [router.pathname]);
  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu);
    router.push(path);
  };

  return (
    <>
      <div id="tp-bottom-menu-sticky" className="tp-mobile-menu d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button
                  onClick={() => handleMenuClick("home", "/")}
                  className={`tp-mobile-item-btn ${
                    activeMenu === "home" ? "active" : ""
                  }`}
                >
                  {activeMenu === "home" ? <MdHome /> : <MdOutlineHome />}
                  <span>Home</span>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button
                  onClick={() =>
                    handleMenuClick(
                      "wishlist",
                      loggedIn ? "/wishlist" : "/authentication/login"
                    )
                  }
                  className={`tp-mobile-item-btn ${
                    activeMenu === "wishlist" ? "active" : ""
                  }`}
                >
                  {activeMenu === "wishlist" ? <FaHeart /> : <FaRegHeart />}
                  <span>Wishlist</span>
                </button>
              </div>
            </div>
            <div className="col">
              <MobileSearch />
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button
                  onClick={() => handleMenuClick("profile", "/profile")}
                  className={`tp-mobile-item-btn ${
                    activeMenu === "profile" ? "active" : ""
                  }`}
                >
                  {activeMenu === "profile" ? <FaUser /> : <FaRegUser />}
                  <span>Account</span>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <button
                  onClick={() =>
                    handleMenuClick(
                      "cart",
                      loggedIn ? "/cart" : "/authentication/login"
                    )
                  }
                  className={`tp-mobile-item-btn ${
                    activeMenu === "cart" ? "active" : ""
                  }`}
                >
                  {activeMenu === "cart" ? <BsHandbagFill /> : <BsHandbag />}
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
          <div
            id="header-sticky"
            className="tp-header-bottom-2 tp-header-sticky"
          >
            <div className="container-fluid">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
                    <div className="logo">
                      <Link href="/" prefetch={true}>
                        <button className="d-flex align-items-center gap-2">
                          <img src="/assets/img/logo/logo.png" alt="logo" />
                          <span>
                            <strong>Aljeco</strong>{" "}
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 d-none d-xl-block">
                    <div className="main-menu menu-style-2">
                      <nav className="tp-main-menu-content">
                        <ul>
                          <li>
                            <Link href="/men" prefetch={true}>
                              <button>Mens</button>
                            </Link>
                          </li>
                          <li>
                            <Link href="/wholesale-order" prefetch={true}>
                              <button>Wholesale Order</button>
                            </Link>
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
                          <Link
                            href={
                              loggedIn ? "/wishlist" : "/authentication/login"
                            }
                            prefetch={true}
                          >
                            <button className="tp-header-action-btn">
                              <FaRegHeart />
                              <span className="tp-header-action-badge">
                                {wishListItems.length
                                  ? wishListItems.length
                                  : 0}
                              </span>
                            </button>
                          </Link>
                        </div>
                        <div className="tp-header-action-item d-block d-xl-none">
                          <MobileMenus />
                        </div>
                        <div className="tp-header-action-item d-none d-xl-block">
                          <Link
                            href={loggedIn ? "/cart" : "/authentication/login"}
                            prefetch={true}
                          >
                            <button className="tp-header-action-btn cartmini-open-btn">
                              <BsHandbag />
                              <span className="tp-header-action-badge">
                                {cartItems.length ? cartItems.length : 0}
                              </span>
                            </button>
                          </Link>
                        </div>
                        {loggedIn ? (
                          <></>
                        ) : (
                          <div className="tp-header-action-item">
                            <Link href="/authentication/login" prefetch={true}>
                              <button className="d-flex align-items-center btn btn-primary">
                                <MdLogin style={{ fontSize: "18px" }} />{" "}
                                <span className="ps-1 d-none d-md-block">
                                  Login
                                </span>
                              </button>
                            </Link>
                          </div>
                        )}
                        {!loggedIn ? (
                          <></>
                        ) : (
                          <div className="tp-header-action-item d-none d-md-block">
                            <Link href="/profile" prefetch={true}>
                              <button className="d-flex align-items-center btn btn-primary">
                                <BiUser style={{ fontSize: "18px" }} />{" "}
                                <span className="ps-1">Profile</span>
                              </button>
                            </Link>
                          </div>
                        )}
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
