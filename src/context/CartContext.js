"use client";
import { createContext, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/app/api";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create the context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const response = await axios.get(`${apiUrl}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setCartItems(response.data.cartItems);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const addToCart = async (item) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const response = await axios.post(`${apiUrl}/cart`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("Item Added To Card!", {
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
      if (response.status === 201) {
        fetchCart();
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.success(error.message, {
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
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, fetchCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
