"use client";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../../context/cartContext";
import { apiUrl } from "../api";

const CheckoutPage = () => {
  const { cartItems, fetchCart } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [user, setUser] = useState({});
  const [discountAmount, setDiscountAmount] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    isDefault: false,
  });
  const [orderid, setOrderId] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");
  const [discountDetails, setDiscountDetails] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user.id) {
      fetchUserAddresses();
    }
  }, [user]);

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${apiUrl}/payments/check`, // Assuming you have an endpoint to validate the coupon
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
        setMessage("Coupon applied successfully.");
        setDiscountDetails({
          discountType: response.data.discountType,
          discountValue: response.data.discountValue,
        });

        // Apply discount directly to the amount
        const discount = calculateDiscountAmount();
        setDiscountAmount(discount);
      } else {
        setMessage(response.data.message || "Invalid coupon code.");
        setDiscountDetails(null);
        setDiscountAmount(0); // Reset the discount amount if the coupon is invalid
      }
    } catch (error) {
      setMessage("An error occurred while validating the coupon.");
      console.error(error);
    }
  };

  const calculateDiscountAmount = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.productItem.salePrice * item.quantity,
      0
    );

    if (discountDetails) {
      if (discountDetails.discountType === "PERCENTAGE") {
        return (subtotal * discountDetails.discountValue) / 100;
      } else if (discountDetails.discountType === "FLAT") {
        return discountDetails.discountValue;
      }
    }
    return 0;
  };

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
  };

  const fetchUserAddresses = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${apiUrl}/users/addresses/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAddresses(response.data[0].Address);
  };

  const handleAddNewAddress = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${apiUrl}/users/${user.id}/address`,
      { ...newAddress, userId: user.id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAddresses([...addresses, response.data]);
    setNewAddress({
      addressLine1: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      isDefault: false,
    });
  };

  const calculateTotalAmount = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.productItem.salePrice * item.quantity,
      0
    );
    const discount = calculateDiscountAmount(); // Recalculate the discount here
    return subtotal - discount; // Subtract the recalculated discount from subtotal
  };
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const verifyPayment = async (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    try {
      const token = localStorage.getItem("token");
      const data = {
        id: orderid,
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id: razorpay_payment_id,
        razorpay_signature: razorpay_signature,
      };
      await axios.post(`${apiUrl}/payments/verify-payment`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }
    const token = localStorage.getItem("token");
    const receiptId = `receipt#${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    const totalAmount = calculateTotalAmount(); // Use the updated total amount after discount
    const orderData = await axios.post(
      `${apiUrl}/payments/create-order`,
      {
        amount: totalAmount,
        receipt: receiptId,
        coupon: couponCode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setOrderId(orderData.data.order);
    const options = {
      key: "rzp_test_c1efGTJCYwaUBg",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Aljeco",
      description: "Clothing Brand",
      order_id: orderData.data.razorpayOrderId,
      handler: async function (response) {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;
        verifyPayment(
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature
        );
      },
      prefill: {
        name: user.firstName || "Your Name",
        email: user.email || "your_email@example.com",
        contact: user.phone || "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>


    <section className="breadcrumb__area include-bg inbreadcrumb ">
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">Checkout</h3>
                     <div className="breadcrumb__list">
                        <span><a href="#">Home</a></span>
                        <span>Checkout</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>


      <section
        className="tp-checkout-area py-4 "
        style={{ background: "#EFF1F5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="tp-checkout-bill-area">
                <h3 className="tp-checkout-bill-title">Billing Details</h3>

                <div className="tp-address-list">
                  <h4>Select an Address</h4>
                  {addresses &&
                    addresses.map((address) => (
                      <div key={address.id}>
                        <input
                          type="radio"
                          value={address.id}
                          checked={selectedAddress === address.id}
                          onChange={() => setSelectedAddress(address.id)}
                        />
                        <label>
                          {address.addressLine1}, {address.city},{" "}
                          {address.state} - {address.postalCode},{" "}
                          {address.country}
                        </label>
                      </div>
                    ))}
                </div>

                <h4>Add New Address</h4>
                <div className="tp-checkout-bill-form">
                  <form>
                    <div className="tp-checkout-bill-inner">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                              <label>Address Line 1</label>
                              <input
                                type="text"
                                placeholder="Address Line 1"
                                value={newAddress.addressLine1}
                                onChange={(e) =>
                                  setNewAddress({
                                    ...newAddress,
                                    addressLine1: e.target.value,
                                  })
                                }
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>City</label>
                            <input
                                type="text"
                                placeholder="City"
                                value={newAddress.city}
                                onChange={(e) =>
                                  setNewAddress({ ...newAddress, city: e.target.value })
                                }
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                              <label>State</label>
                              <input
                                  type="text"
                                  placeholder="State"
                                  value={newAddress.state}
                                  onChange={(e) =>
                                    setNewAddress({ ...newAddress, state: e.target.value })
                                  }
                                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Postal Code</label>
                            <input
                                type="text"
                                placeholder="Postal Code"
                                value={newAddress.postalCode}
                                onChange={(e) =>
                                  setNewAddress({
                                    ...newAddress,
                                    postalCode: e.target.value,
                                  })
                                }
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Country</label>
                            <input
                                type="text"
                                placeholder="Country"
                                value={newAddress.country}
                                onChange={(e) =>
                                  setNewAddress({ ...newAddress, country: e.target.value })
                                }
                              />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary " type="button" onClick={handleAddNewAddress}>
                      Add Address
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tp-checkout-order-details">
                <h3>Your Order</h3>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.productItem.id}>
                      {item.productItem.name} x {item.quantity}{" "}
                      <span>₹{item.productItem.salePrice * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <p>Discount: ₹{discountAmount}</p>
                <p>Total Amount: ₹{calculateTotalAmount()}</p>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex mb-10">
                      <input
                          type="text"
                          placeholder="Coupon Code"
                          value={couponCode}
                          onChange={handleCouponCodeChange}
                          className="coupaninput"
                        />
                        <button className="btn btn-success applycoupan" type="submit">Apply Coupon</button>
                  </div>
                </form>
                <button className="btn btn-primary" onClick={handlePayment}>Place Order</button>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
