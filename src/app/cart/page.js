"use client";
import Link from "next/link";
import React, { useEffect, useContext, useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "../api";
import { CartContext } from "../../context/cartContext";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../utils/loader";

const Cart = () => {
  const { cartItems: initialCartItems, fetchCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");
  const [discountDetails, setDiscountDetails] = useState(null);

  const router = useRouter();
  const token = localStorage.getItem("token");

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${apiUrl}/payments/check`,
        {
          couponCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.valid) {
        setMessage(response.data.message);
        setDiscountDetails({
          discountType: response.data.discountType,
          discountValue: response.data.discountValue,
        });
      } else {
        setMessage(response.data.message);
        setDiscountDetails(null);
      }
    } catch (error) {
      setMessage("An error occurred while validating the coupon.");
      console.error(error);
    }
  };

  useEffect(() => {
    setCartItems(initialCartItems);
  }, [initialCartItems]);

  const updateCartItemQuantity = async (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);

    try {
      setLoading(true);
      await axios.put(
        `${apiUrl}/cart/items/${id}/quantity`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      await fetchCart();
      toast.success("Cart Updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      setCartItems(initialCartItems);
      setLoading(false);
    }
  };

  const increaseQuantity = (item) => {
    const newQuantity = item.quantity + 1;
    updateCartItemQuantity(item.id, newQuantity);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartItemQuantity(item.id, newQuantity);
    }
  };

  const deleteCartItem = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${apiUrl}/cart/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("Item Deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      await fetchCart();
      setLoading(false);
    } catch (error) {
      console.error("Error deleting cart item:", error);
      setLoading(false);
    }
  };

  const calculateTotalPrice = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.productItem.salePrice * item.quantity,
      0
    );

    if (discountDetails) {
      if (discountDetails.discountType === 'PERCENTAGE') {
        return subtotal - (subtotal * discountDetails.discountValue) / 100;
      } else if (discountDetails.discountType === "FIXED") {
        return Math.max(0, subtotal - discountDetails.discountValue);
      }
    }

    return subtotal;
  };

  const calculateDiscountAmount = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.productItem.salePrice * item.quantity,
      0
    );

    if (discountDetails) {
      if (discountDetails.discountType === 'PERCENTAGE') {
        return (subtotal * discountDetails.discountValue) / 100;
      } else if (discountDetails.discountType === "FIXED") {
        return discountDetails.discountValue;
      }
    }
    return 0;
  };

  useEffect(() => {
    if (!token) {
      router.push("/authentication/login");
    } else {
      fetchCart();
    }
  }, [token]);

  if (loading) return <Loader />;

  return (
    <>
      <section className="breadcrumb__area include-bg bg-light pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">Shopping Cart</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-cart-area pt-60 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="tp-cart-list mb-25 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="2" className="tp-cart-header-product">
                        Product
                      </th>
                      <th className="tp-cart-header-price">Price</th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="tp-cart-img">
                          <a href="#">
                            <img
                              src={item.productItem.images[0].url}
                              alt={item.productItem.product.productName}
                            />
                          </a>
                        </td>
                        <td className="tp-cart-title">
                          <a href="#">{item.productItem.product.productName}</a>
                        </td>
                        <td className="tp-cart-price">
                          <span>₹{item.productItem.salePrice}</span>
                        </td>
                        <td className="tp-cart-quantity">
                          <div className="tp-product-quantity mt-10 mb-10">
                            <span
                              className="tp-cart-minus"
                              onClick={() => decreaseQuantity(item)}
                            >
                              <BiMinus />
                            </span>
                            <input
                              className="tp-cart-input"
                              type="text"
                              value={item.quantity}
                              readOnly
                            />
                            <span
                              className="tp-cart-plus"
                              onClick={() => increaseQuantity(item)}
                            >
                              <BiPlus />
                            </span>
                          </div>
                        </td>
                        <td className="tp-cart-action">
                          <button
                            className="tp-cart-action-btn"
                            onClick={() => deleteCartItem(item.id)}
                          >
                            <span>Remove</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-cart-checkout-wrapper position-sticky t-10">
                <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span className="tp-cart-checkout-top-title">Subtotal</span>
                  <span className="tp-cart-checkout-top-price">
                    {" "}
                    ₹
                    {cartItems.reduce(
                      (total, item) =>
                        total + item.productItem.salePrice * item.quantity,
                      0
                    )}
                  </span>
                </div>
                {discountDetails && (
                  <div className="tp-cart-checkout-discount d-flex align-items-center justify-content-between">
                    <span>Discount</span>
                    <span> - ₹{calculateDiscountAmount().toFixed(2)}</span>
                  </div>
                )}
                <div className="tp-cart-checkout-shipping">
                  <div className="tp-cart-checkout-shipping-option-wrapper">
                    <div className="tp-cart-checkout-shipping-option">
                      <input
                        id="free_shipping"
                        checked
                        type="radio"
                        name="shipping"
                      />
                      <label htmlFor="free_shipping">Free shipping</label>
                    </div>
                  </div>
                </div>
                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span> ₹{calculateTotalPrice().toFixed(2)}</span>
                </div>
                <div className="tp-cart-checkout-proceed">
                  <button
                    className="tp-cart-checkout-btn w-100"
                    onClick={() => router.push("/checkout")}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
