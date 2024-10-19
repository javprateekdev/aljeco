"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/app/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create the context
export const CartContext = createContext();
const notify = () => toast("Wow so easy!");

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
      if (response.status === 201) {
        fetchCart(); // Refetch cart after adding an item
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, fetchCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
