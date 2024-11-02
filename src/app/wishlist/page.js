"use client";
import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../context/WishListContext";
import { CartContext } from "../../context/CartContext"; // Add CartContext to add items to the cart
import { BiPlus, BiMinus } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { toast, Bounce } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Loader from "../utils/loader";
import { apiUrl } from "../api";
import { getToken } from "../api";
const Wishlist = () => {
  const { wishListItems, fetchWishlist, deleteWishListItem } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext); // Add addToCart for adding items to cart
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState({}); // Track item quantities


 const token = getToken()
  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    deleteWishListItem(item.wishlistId)
    if (!token) {
      router.push("/authentication/login");
    } else {
      const cartItem = {
        productItemId: item.productItem.itemId,
        quantity: quantities[item.wishlistId] || 1, // Use the current quantity
        priceAtTime: item.productItem.salePrice,
      };
      addToCart(cartItem); // Add to cart using context
    }
  };

  // Handle increasing quantity
  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  // Handle decreasing quantity
  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };

  useEffect(() => {
    const token = getToken();
if(token){
  fetchWishlist();
}
   
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <section className="breadcrumb__area include-bg bg-light pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">Wishlist</h3>
                <div className="breadcrumb__list">
                  <span>
                  <Link href="/cart" prefetch={true} >Home</Link>{" "}
                    {/* Use router.push */}
                  </span>
                  <span>Wishlist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-cart-area pt-60 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="tp-cart-list mb-25 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="2" className="tp-cart-header-product">
                        Product
                      </th>
                      <th className="tp-cart-header-price">Price</th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th className="tp-cart-header-quantity">Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishListItems.map((item) => (
                      <tr key={item.wishlistId}>
                        <td className="tp-cart-img">
                          <button
                            onClick={() =>
                              router.push(
                                `/product/${item.productItem.productId}`
                              )
                            }
                          >
                            {" "}
                            {/* Use router.push */}
                            <img
                              src={item?.productItem?.images[0]?.url}
                              alt={item.productItem.product.productName}
                            />
                          </button>
                        </td>
                        <td className="tp-cart-title">
                          <button
                            onClick={() =>
                              router.push(
                                `/product/${item.productItem.productId}`
                              )
                            }
                          >
                            {" "}
                            {/* Use router.push */}
                            {item.productItem.product.productName}
                          </button>
                        </td>
                        <td className="tp-cart-price">
                          <span>₹{item.productItem.salePrice}</span>
                        </td>
                        <td className="tp-cart-quantity">
                          <div className="tp-product-quantity mt-10 mb-10">
                            <span
                              className="tp-cart-minus"
                              onClick={() => handleDecrease(item.wishlistId)}
                            >
                              <BiMinus />
                            </span>
                            <input
                              className="tp-cart-input"
                              type="text"
                              value={quantities[item.wishlistId] || 1}
                              readOnly
                            />
                            <span
                              className="tp-cart-plus"
                              onClick={() => handleIncrease(item.wishlistId)}
                            >
                              <BiPlus />
                            </span>
                          </div>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleAddToCart(item)}
                          >
                            Add To Cart
                          </button>
                        </td>
                        <td className="tp-cart-action">
                          <button
                            className="tp-cart-action-btn"
                            onClick={() => deleteWishListItem(item.id)}
                          >
                            <span>Remove</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="tp-cart-bottom">
                <div className="row align-items-end">
                  <div className="col-xl-6 col-md-8">
                    <div className="tp-cart-update">
                    <Link href="/cart" prefetch={true} // Use router.push instead of href
                        className="tp-cart-update-btn"
                      >
                        Go To Cart
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
