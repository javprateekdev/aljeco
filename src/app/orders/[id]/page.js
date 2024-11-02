'use client';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { apiUrl, getToken } from "@/app/api";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TrackOrder = ({ params }) => {
  const { id } = params; 
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);

  const getOrderDetails = async () => {
    try {
      const token = getToken();
      const data = await axios.get(`${apiUrl}/users/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrder(data.data);
    } catch (error) {
      console.error("Error fetching order details:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, [id]);
  
  return (
    <div className="container pt-100">
      <section className="tp-order-area pb-160">
        <div className="tp-order-inner">
          <div className="row gx-0">
            <div className="col-lg-12">
              <div className="tp-order-details" style={{ background: "#ddc0b4" }}>
                <div className="tp-order-details-top text-center mb-50">
                  <div className="tp-order-details-icon">
                    {/* Your existing SVG icon */}
                  </div>
                  <div className="tp-order-details-content">
                    <h3 className="tp-order-details-title">Your Order Confirmed</h3>
                    <p>We will send you a shipping confirmation email as soon <br /> as your order ships</p>
                  </div>
                  <a href="#" className="text-success">Track your order here</a>
                </div>
                <div className="tp-order-details-item-wrapper">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="tp-order-details-item">
                        <h4>Order Date:</h4>
                        <p>{loading ? <Skeleton /> : new Date(order.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="tp-order-details-item">
                        <h4>Expected Delivery:</h4>
                        <p>{loading ? <Skeleton /> : "TBD"}</p> {/* Adjust based on your logic for expected delivery */}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="tp-order-details-item">
                        <h4>Order Number:</h4>
                        <p>{loading ? <Skeleton /> : `#${order.id}`}</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="tp-order-details-item">
                        <h4>Payment Method:</h4>
                        <p>{loading ? <Skeleton /> : "Credit Card"}</p> {/* Adjust based on your logic for payment method */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tp-order-info-wrapper">
                <h4 className="tp-order-info-title">Order Details</h4>
                <div className="tp-order-info-list">
                  <ul>
                    <li className="tp-order-info-list-header">
                      <h4>Product</h4>
                      <h4>Total</h4>
                    </li>
                    {loading ? (
                      <>
                        <li className="tp-order-info-list-desc"><Skeleton count={2} /></li>
                        <li className="tp-order-info-list-desc"><Skeleton count={2} /></li>
                      </>
                    ) : (
                      order.orderItems.map((item) => (
                        <li key={item.id} className="tp-order-info-list-desc">
                          <p>{item.productItem.product.productName} <span>x {item.quantity}</span></p>
                          <span>{item.priceAtTime}</span>
                        </li>
                      ))
                    )}
                    <li className="tp-order-info-list-subtotal">
                      <span>Subtotal</span>
                      <span>{order?.totalPrice}</span>
                    </li>
                    <li className="tp-order-info-list-total">
                      <span>Total</span>
                      <span>{order?.totalPrice}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrder;
