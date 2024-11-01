"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { apiUrl } from "@/app/api";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "@/app/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = getToken();

  // Memoize fetchCart to prevent multiple re-renders from triggering it
  const fetchCart = useCallback(async () => {
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
  }, [token]); // Depend on `token` to update only when it changes

  const addToCart = async (item) => {
    try {
      const response = await axios.post(`${apiUrl}/cart`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        // Update cart items locally without refetching
        setCartItems((prevItems) => [...prevItems, response.data.item]);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart. Please try again.", {
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

  useEffect(() => {
    fetchCart();
  }, [fetchCart]); // Call only once on mount with memoized `fetchCart`

  return (
    <CartContext.Provider value={{ cartItems, fetchCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
