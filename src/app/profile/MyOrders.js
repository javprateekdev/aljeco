"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, getToken } from "../api";
import moment from "moment";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    try {
      const token = getToken();
      const data = await axios.get(`${apiUrl}/users/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getOrders();
  }, []);
  const handleOrderStatus=()=>{

  }
  return (
    <>
      <div className="tp-order-inner">
        <div className="profile__ticket table-responsive p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Placed At</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row"> {item.id}</th>
                    <td data-info="title">
                      {moment(item.createdAt).format("lll")}
                    </td>
                    <td data-info="status pending" onClick={handleOrderStatus}> {item.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
