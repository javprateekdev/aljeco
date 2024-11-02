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
import { BsHandbag, BsHandbagFill } from "react-icons/bs";
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
import { apiUrl, getToken } from "@/app/api";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { cartItems, fetchCart } = useContext(CartContext);
  const { wishListItems, fetchWishlist } = useContext(WishListContext);
  const router = useRouter(); // Use router for navigation
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isLoggedIn } = useAuth();
  const [cartBounce, setCartBounce] = useState(false);
  const [wishlistBounce, setWishlistBounce] = useState(false);
  const token = getToken();

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      fetchCart();
      fetchWishlist();
      userMe();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 500); // Adjust duration to match animation
    }
  }, [cartItems.length]);

  useEffect(() => {
    if (wishListItems.length > 0) {
      setWishlistBounce(true);
      setTimeout(() => setWishlistBounce(false), 500); // Adjust duration to match animation
    }
  }, [wishListItems.length]);

  const handleSearchInputChange = async (event) => {
    const value = event.target.value;
    setSearchInput(value);
    if (value) {
      try {
        const response = await axios.get(`${apiUrl}/product?search=${value}`);
        setFilteredProducts(response.data.data); // Assuming the response is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      setFilteredProducts([]); // Clear suggestions if input is empty
    }
  };

  const userMe = async () => {
    try {
      const req = await axios.get(`${apiUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log('req',req)
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div
        id="tp-bottom-menu-sticky"
        className="tp-mobile-menu d-lg-none"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // Safari support
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tp-mobile-item text-center">
                <Link href="/" prefetch={true}>
                  <button
                    className={`tp-mobile-item-btn`}
                  >
                    <MdHome />
                    <span>Home</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <Link
                  href={loggedIn ? "/wishlist" : "/authentication/login"}
                  prefetch={true}
                >
                  <button className={`tp-mobile-item-btn`}>
                    <FaRegHeart />
                    <span>Wishlist</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col">
              <MobileSearch />
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <Link
                  href={loggedIn ? "/profile" : "/authentication/login"}
                  prefetch={true}
                >
                  <button className={`tp-mobile-item-btn`}>
                    <FaUser />
                    <span>Account</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="tp-mobile-item text-center">
                <Link
                  href={loggedIn ? "/cart" : "/authentication/login"}
                  prefetch={true}
                >
                  <button className={`tp-mobile-item-btn`}>
                    <BsHandbag />
                    <span className={`tp-header-action-badge mobilecart ${cartBounce ? "bounce" : ""}`}>
                      {isLoggedIn ? cartItems.length : 0}
                    </span>
                    <span>Cart</span>
                  </button>
                </Link>
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
                        <form
                          onSubmit={(e) => e.preventDefault()}
                          className="search-form"
                        >
                          <div className="search-input-container">
                            <input
                              type="text"
                              placeholder="Search Products..."
                              value={searchInput}
                              onChange={handleSearchInputChange}
                              className="search-input"
                            />
                            <button type="submit" className="search-button">
                              <FaSearch />
                            </button>
                          </div>
                        </form>
                      </div>

                      <div className="tp-header-action d-flex align-items-center gap-xl-3 ms-xl-5">
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link
                            href={
                              isLoggedIn ? "/wishlist" : "/authentication/login"
                            }
                          >
                            <button className="tp-header-action-btn">
                              <FaRegHeart />
                              <span
                                className={`tp-header-action-badge ${wishlistBounce ? "bounce" : ""}`}
                              >
                                {wishListItems.length}
                              </span>
                            </button>
                          </Link>
                        </div>
                        <div className="tp-header-action-item d-none d-xl-block">
                          <Link
                            href={
                              isLoggedIn ? "/cart" : "/authentication/login"
                            }
                          >
                            <button className="tp-header-action-btn cartmini-open-btn">
                              <BsHandbag />
                              <span
                                className={`tp-header-action-badge ${cartBounce ? "bounce" : ""}`}
                              >
                                {cartItems.length}
                              </span>
                            </button>
                          </Link>
                        </div>
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link
                            href={isLoggedIn ? "/profile" : "/authentication/login"}
                          >
                            <button className="tp-header-action-btn">
                              <FaUser />
                            </button>
                          </Link>
                        </div>
                        <div className="tp-header-action-item d-lg-none">
                          <button className="tp-header-action-btn">
                            <RiMenu3Line />
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
