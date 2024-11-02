"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/app/api";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "@/app/api";

// Create the WishList context
export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);
  const token = getToken();

  const fetchWishlist = async () => {
    if (!token) return;
    try {
      const response = await axios.get(`${apiUrl}/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setWishListItems(response.data.wishlistItems || []);
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };

  const addToWishList = async (item) => {
    if (!token) return;
    setWishListItems((prevItems) => [...prevItems, item]);
    
    try {
      const response = await axios.post(`${apiUrl}/wishlist`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 201) {
        throw new Error("Failed to add item to wishlist");
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      // Re-fetch wishlist to revert optimistic update
      fetchWishlist();
    }
  };

  const deleteWishListItem = async (id) => {
    // Optimistically remove item from wishlist
    if (!token) return;
    setWishListItems((prevItems) => prevItems.filter(item => item.wishlistId !== id));

    try {
      await axios.delete(`${apiUrl}/wishlist/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchWishlist();
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
      // Re-fetch wishlist to revert optimistic update
      fetchWishlist();
    }
  };

  return (
    <WishListContext.Provider
      value={{ wishListItems, fetchWishlist, addToWishList, deleteWishListItem }}
    >
      {children}
    </WishListContext.Provider>
  );
};
