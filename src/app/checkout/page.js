"use client";
import React, { useEffect, useContext, useState } from "react";
import { apiUrl } from "../api";
import axios from "axios";
import { CartContext } from "../../context/cartContext";
const page = () => {
  const { cartItems, fetchCart } = useContext(CartContext);
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    console.log("order created");
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }
    const token = localStorage.getItem("token");
    // Create order on backend
    const receiptId = `receipt#${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    const totalAmount = cartItems.reduce(
      (total, item) => total + item.productItem.salePrice * item.quantity,
      0
    );
    const orderData = await axios.post(
      `${apiUrl}/payments/create-order`,
      {
        amount: totalAmount ,
        receipt: receiptId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the Bearer token here
          "Content-Type": "application/json", // Ensure proper content type
        },
      }
    );
    const options = {
      key: "rzp_test_c1efGTJCYwaUBg",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Aljeco",
      description: "Clothing Brand",
      order_id: orderData.id,
      handler: async function (response) {
        // Handle success, like verifying the payment on your backend
        console.log("Payment successful:", response);
        console.log("Payment successful:", response);

        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;
        console.log(razorpay_payment_id, razorpay_order_id, razorpay_signature);
      },
      prefill: {
        name: "Your Name",
        email: "your_email@example.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <>
      <section
        className="breadcrumb__area include-bg pt-95 pb-50"
        style={{ background: "#EFF1F5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">Checkout</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span>Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="tp-checkout-area pb-120"
        style={{ background: "#EFF1F5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="tp-checkout-bill-area">
                <h3 className="tp-checkout-bill-title">Billing Details</h3>
                <div className="tp-checkout-bill-form">
                  <form action="#">
                    <div className="tp-checkout-bill-inner">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>
                              First Name <span>*</span>
                            </label>
                            <input type="text" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>
                              Last Name <span>*</span>
                            </label>
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Company name (optional)</label>
                            <input type="text" placeholder="Example LTD." />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Country / Region </label>
                            <input
                              type="text"
                              placeholder="United States (US)"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Street address</label>
                            <input
                              type="text"
                              placeholder="House number and street name"
                            />
                          </div>

                          <div className="tp-checkout-input">
                            <input
                              type="text"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Town / City</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Postcode ZIP</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>
                              Phone <span>*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>
                              Email address <span>*</span>
                            </label>
                            <input type="email" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-option-wrapper">
                            <div className="tp-checkout-option">
                              <input id="create_free_account" type="checkbox" />
                              <label for="create_free_account">
                                Create an account?
                              </label>
                            </div>
                            <div className="tp-checkout-option">
                              <input
                                id="ship_to_diff_address"
                                type="checkbox"
                              />
                              <label for="ship_to_diff_address">
                                Ship to a different address?
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Order notes (optional)</label>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tp-checkout-place white-bg">
                <h3 className="tp-checkout-place-title">Your Order</h3>
                <div className="tp-order-info-list">
                  <ul>
                    <li className="tp-order-info-list-header">
                      <h4>Product</h4>
                      <h4>Total</h4>
                    </li>
                    {cartItems.map((item) => (
                      <li className="tp-order-info-list-desc" key={item.id}>
                        <p>
                          {item.productItem.product.productName}
                          <span> x {item.quantity}</span>{" "}
                        </p>
                        <span>
                          ₹{item.productItem.salePrice * item.quantity}
                        </span>{" "}
                        {/* Assuming salePrice is in product */}
                      </li>
                    ))}

                    <li className="tp-order-info-list-subtotal">
                      <span>Subtotal</span>
                      <span>
                        {" "}
                        ₹
                        {cartItems.reduce(
                          (total, item) =>
                            total + item.productItem.salePrice * item.quantity,
                          0
                        )}
                      </span>
                    </li>

                    <li className="tp-order-info-list-shipping">
                      <span>
                        <strong>Shipping</strong>
                      </span>
                      <span>
                        <strong>Free</strong>{" "}
                      </span>
                      {/* <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                                 <span>
                                    <input id="free_shipping" type="radio" name="shipping" />
                                    <label for="free_shipping">Free shipping</label>
                                 </span>
                              </div> */}
                    </li>

                    <li className="tp-order-info-list-total">
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
                    </li>
                  </ul>
                </div>
                <div className="tp-checkout-payment">
                  {/* <div className="tp-checkout-payment-item">
                    <input type="radio" id="back_transfer" name="payment" />
                    <label
                      for="back_transfer"
                      data-bs-toggle="direct-bank-transfer"
                    >
                      Internet Banking
                    </label>
                    <div className="tp-checkout-payment-desc direct-bank-transfer">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div> */}
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="cod" name="payment" />
                    <label for="cod">Cash on Delivery</label>
                    <div className="tp-checkout-payment-desc cash-on-delivery">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="tp-checkout-payment-item paypal-payment">
                    <input type="radio" id="paypal" name="payment" />
                    <label for="paypal">UPI</label>
                  </div>
                </div>
                <div className="tp-checkout-agree">
                  <div className="tp-checkout-option">
                    <input id="read_all" type="checkbox" />
                    <label for="read_all">
                      I have read and agree to the website.
                    </label>
                  </div>
                </div>
                <div className="tp-checkout-btn-wrapper">
                  <button
                    className="tp-checkout-btn w-100"
                    onClick={handlePayment}
                  >
                    Order Now
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

export default page;
