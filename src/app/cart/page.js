"use client";
import Link from "next/link";
import React, { useEffect, useContext, useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "../api";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cartItems: initialCartItems, fetchCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const router = useRouter();

  useEffect(() => {
    setCartItems(initialCartItems);
  }, [initialCartItems]);

  const updateCartItemQuantity = async (id, newQuantity) => {
    const token = localStorage.getItem("token");

    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);

    try {
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
      // Optionally refetch cart after the API call
      await fetchCart();
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      // Revert UI update if the API call fails
      setCartItems(initialCartItems);
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
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(`${apiUrl}/cart/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      alert("Cart Item Deleted Successfully");
      await fetchCart();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const calculateSalePrice = (originalPrice, discount) => {
    return originalPrice - (originalPrice * discount) / 100;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/authentication/login");
    }
    fetchCart();
  }, []);

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
                          <span>₹{item.priceAtTime}</span>
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
              <div className="tp-cart-bottom">
                <div className="row align-items-end">
                  <div className="col-xl-6 col-md-8">
                    <div className="tp-cart-coupon">
                      <form action="#">
                        <div className="tp-cart-coupon-input-box">
                          <label>Coupon Code:</label>
                          <div className="tp-cart-coupon-input d-flex align-items-center">
                            <input
                              type="text"
                              placeholder="Enter Coupon Code"
                            />
                            <button type="submit">Apply</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
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
                <div className="tp-cart-checkout-shipping">
                  <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
                  <div className="tp-cart-checkout-shipping-option-wrapper">
                    {/* <div className="tp-cart-checkout-shipping-option">
                      <input id="flat_rate" type="radio" name="shipping" />
                      <label htmlFor="flat_rate">
                        Flat rate: <span>$20.00</span>
                      </label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="local_pickup" type="radio" name="shipping" />
                      <label htmlFor="local_pickup">
                        Local pickup: <span>$25.00</span>
                      </label>
                    </div> */}
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="free_shipping" checked type="radio" name="shipping" />
                      <label htmlFor="free_shipping">Free shipping</label>
                    </div>
                  </div>
                </div>
                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span>
                    {" "}
                    ₹
                    {cartItems.reduce(
                      (total, item) =>
                        total + item.productItem.salePrice * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <div className="tp-cart-checkout-proceed">
                  <Link href="/checkout" className="tp-cart-checkout-btn w-100">
                    Proceed to Checkout
                  </Link>
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
