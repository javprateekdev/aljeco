"use client";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import { apiUrl } from "../api";
import { useAuth } from "../../context/AuthContext";
import Loader from "../utils/loader";
import { ThreeDots } from 'react-loader-spinner';
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import "react-loading-skeleton/dist/skeleton.css";
import { getToken } from "../api";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [user, setUser] = useState({});
  const router = useRouter()
  const [discountAmount, setDiscountAmount] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
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
  const [addressErrors, setAddressErrors] = useState({});
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [buttonLoading,setButtonLoading]=useState(false)
  const[addressLoading, setAddressLoading]=useState(false)
  const token = getToken()

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

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
        const discount = calculateDiscountAmount(); // Calculate discount amount
        setDiscountAmount(discount); // Update discount amount state
      } else {
        setMessage(response.data.message || "Invalid coupon code.");
        setDiscountDetails(null);
        setDiscountAmount(0); // Reset to 0 for invalid coupon
      }
    } catch (error) {
      setMessage("An error occurred while validating the coupon.");
      console.error(error);
    }
  };

  const calculateDiscountAmount = () => {
    const subtotal =
      cartItems &&
      cartItems.reduce(
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
    if (!token) return null;
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
    fetchUserAddresses(response.data);
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
        setMessage("Please select an address.");
        return;
    }
    setConfirmOrder(true);
}

  const fetchUserAddresses = async (u) => {
    if (!token) return null;
    setAddressLoading(true)
    const response = await axios.get(`${apiUrl}/users/addresses/${u.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAddresses(response.data[0].Address);
    setAddressLoading(false)
  };

  const handleAddNewAddress = async () => {
    const errors = validateAddress(newAddress);
    if (Object.keys(errors).length > 0) {
      setAddressErrors(errors);
      return;
    }

    try {
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
      
      setShowNewAddressForm(false); // Hide the form after adding
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  const calculateTotalAmount = () => {
    const subtotal =
      cartItems &&
      cartItems.reduce(
        (total, item) => total + item.productItem.salePrice * item.quantity,
        0
      );
    const discount = calculateDiscountAmount();
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
    setButtonLoading(true)
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }
    const receiptId = `receipt#${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    const totalAmount = calculateTotalAmount();

    const orderData = await axios.post(
      `${apiUrl}/payments/create-order`,
      {
        amount: totalAmount,
        receipt: receiptId,
        coupon: couponCode,
        addressId: selectedAddress,
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
        router.push(`/orders/${orderData.data.order}`);
      },
      prefill: {
        name: user.firstName || "Your Name",
        email: user.email || "your_email@example.com",
        contact: user.phone || "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setButtonLoading(false)
  };

const renderOrderConfirmation = () => {
  const selectedAddr = addresses.find(addr => addr.id === selectedAddress);
  return (
    <div className="order-confirmation container">
      <h3>Order Confirmation</h3>
      <h4>Selected Address:</h4>
      <p>{`${selectedAddr.addressLine1}, ${selectedAddr.city}, ${selectedAddr.state} - ${selectedAddr.postalCode}, ${selectedAddr.country}`}</p>
      <h4>Your Order:</h4>
      <ul>
        {cartItems.map(item => (
          <li key={item.productItem.id}>
            {item.productItem.product.productName} x {item.quantity} 
            <span> ₹{item.productItem.salePrice * item.quantity}</span>
          </li>
        ))}
      </ul>
      <p>Discount: ₹{calculateDiscountAmount()}</p>
      <p>Total Amount: ₹{calculateTotalAmount()}</p>
      <div  className="button-container">
      <button
  disabled={buttonLoading}
>
  {buttonLoading ? (
    <ThreeDots
      visible={true}
      height="20"
      width="20"
      color="#ffffff"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  ) : (
    <button className="btn btn-primary" onClick={handlePayment}>Proceed to Payment</button>
  )}
</button>
      <button className="btn btn-secondary" onClick={() => setConfirmOrder(false)}>Edit Order</button>
      </div>
      
    </div>
  );
};

if (confirmOrder) {
    return renderOrderConfirmation();
}
  if (!token) return <Loader />;
  return (
    <>
      <section className="breadcrumb__area include-bg inbreadcrumb bg-light ">
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

      <section className="tp-checkout-area py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="tp-checkout-bill-area">
                <h3 className="tp-checkout-bill-title">Billing Details</h3>
                <div className="tp-address-list">
                  <h4>Select an Address</h4>
                  {addressLoading ? (
                    <Skeleton count={3} height={50} /> // Show 3 skeletons for loading
                  ) : (
                    addresses.map((address) => (
                      <div key={address.id} className="custom-address-container">
                        <div className="address-details">
                          <div>
                            <div className="name">
                              <span>{`${user.firstname} ${user.lastname}`}</span>
                            </div>
                            <div>
                              {address.addressLine1}, {address.city} {address.state} - {address.postalCode} {address.country}
                            </div>
                          </div>
                          <div>
                            <button
                              className={`btn ${selectedAddress === address.id ? "btn-success" : "btn-primary"}`}
                              onClick={() => setSelectedAddress(address.id)}
                            >
                              Deliver here
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {addresses.length === 0 && !addressLoading && (
                    <p className="text-danger">No Addresses Found. Add An Address Below</p>
                  )}
                </div>
                <button
                  className="btn btn-primary mb-2"
                  onClick={() => setShowNewAddressForm(!showNewAddressForm)}
                >
                  {showNewAddressForm ? "Cancel" : "Add New Address"}
                </button>

                {showNewAddressForm && (
                  <div className="tp-checkout-bill-form">
                    <form>
                      <div className="tp-checkout-bill-inner">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="tp-checkout-input">
                              <label>First Name</label>
                              <input
                                type="text"
                                placeholder="First Name"
                                value={newAddress.firstName || ""}
                                onChange={(e) =>
                                  setNewAddress({
                                    ...newAddress,
                                    firstName: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="tp-checkout-input">
                              <label>Last Name</label>
                              <input
                                type="text"
                                placeholder="Last Name"
                                value={newAddress.lastName || ""}
                                onChange={(e) =>
                                  setNewAddress({
                                    ...newAddress,
                                    lastName: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

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
                              {addressErrors.addressLine1 && (
                                <p className="text-danger">{addressErrors.addressLine1}</p>
                              )}
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
                                  setNewAddress({
                                    ...newAddress,
                                    city: e.target.value,
                                  })
                                }
                              />
                              {addressErrors.city && (
                                <p className="text-danger">{addressErrors.city}</p>
                              )}
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
                                  setNewAddress({
                                    ...newAddress,
                                    state: e.target.value,
                                  })
                                }
                              />
                              {addressErrors.state && (
                                <p className="text-danger">{addressErrors.state}</p>
                              )}
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
                              {addressErrors.postalCode && (
                                <p className="text-danger">{addressErrors.postalCode}</p>
                              )}
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
                                  setNewAddress({
                                    ...newAddress,
                                    country: e.target.value,
                                  })
                                }
                              />
                              {addressErrors.country && (
                                <p className="text-danger">{addressErrors.country}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleAddNewAddress}
                      >
                        Add Address
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tp-checkout-place white-bg">
                <h3>Your Order</h3>
                <div className="tp-order-info-list">
                  <ul>
                    {cartItems &&
                      cartItems.map((item) => (
                        <li
                          className="tp-order-info-list-header"
                          key={item.productItem.id}
                        >
                          {item.productItem.product.productName} x{" "}
                          {item.quantity}{" "}
                          <span>
                            ₹{item.productItem.salePrice * item.quantity}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>

                <p>Discount: ₹{calculateDiscountAmount()}</p>
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
                    <button
                      className="btn btn-success applycoupan"
                      type="submit"
                    >
                      Apply Coupon
                    </button>
                  </div>
                </form>
                {message && <p className="text-danger">{message}</p>}
                <button
                  className="btn btn-primary mt-20"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
