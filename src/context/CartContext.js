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

  const fetchCart = useCallback(async () => {
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
  }, [token]);

  const addToCart = async (item) => {
    if (!token) return;
    // Optimistically update cart items
    setCartItems((prevItems) => [...prevItems, item]);

    try {
      const response = await axios.post(`${apiUrl}/cart`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 201) {
        throw new Error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
      toast.error("Failed to add item to cart. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const updateCartItemQuantity = async (id, newQuantity) => {
    if (!token) return;
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    
    try {
      await axios.put(`${apiUrl}/cart/items/${id}/quantity`, { quantity: newQuantity }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      fetchCart(); // Fetch cart again to revert changes
    }
  };

  const deleteCartItem = async (id) => {
    if (!token) return;
    // Optimistically update cart items by removing the item immediately
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  
    try {
      await axios.delete(`${apiUrl}/cart/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // If necessary, you could fetch the cart again here, but it's already been updated optimistically
    } catch (error) {
      console.error("Error deleting cart item:", error);
      // If the deletion fails, refetch the cart to revert to the previous state
      fetchCart();
    }
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        fetchCart,
        addToCart,
        updateCartItemQuantity,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
