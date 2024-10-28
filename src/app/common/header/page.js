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
import { apiUrl, getToken } from "@/app/api";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
export default function Header() {
  const { cartItems, fetchCart } = useContext(CartContext);
  const [activeMenu, setActiveMenu] = useState("");
  const { wishListItems, fetchWishlist } = useContext(WishListContext);
  const router = useRouter(); // Use router for navigation
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  useEffect(() => {
    const token = getToken();
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

  const token = getToken();
  const userMe = async () => {
    try {
      const req = await axios.get(`${apiUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("req", req);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearchInputChange = async (event) => {
    const value = event.target.value;
    console.log("event", event);
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
                            <button className="d-none d-sm-block" type="submit">
                              <FiSearch />
                            </button>
                          </div>
                          {filteredProducts.length > 0 && (
                            <div className="search-suggestions">
                              <ul>
                                {filteredProducts.map((product) => (
                                  <li key={product.id}>
                                    <Link
                                      href={`/men/${product.productId}`}
                                      prefetch={true}
                                      onClick={() => setSearchEmpty("")}
                                    >
                                      <p className="text-black">
                                        {product.productName}
                                      </p>
                                      <img
                                        src={
                                          product.productItems[0].images.url ||
                                          ""
                                        }
                                        className="suggestion-image"
                                        alt={product.productName} // Provide alt text for accessibility
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </form>
                      </div>

                      <div className="tp-header-action d-flex align-items-center gap-xl-3 ms-xl-5">
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link
                            href={
                              isLoggedIn ? "/wishlist" : "/authentication/login"
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
                            href={isLoggedIn ? "/cart" : "/authentication/login"}
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
                        {!isLoggedIn ? (
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
