"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/app/api";

// Create the WishList context
export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);

  // Fetch wishlist items from the API
  const fetchWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found, cannot fetch wishlist.");
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setWishListItems(response.data.wishlistItems || []); // Ensures data is safe even if the response is malformed
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };

  // Add an item to the wishlist
  const addToWishList = async (item) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found, cannot add item to wishlist.");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/wishlist`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        fetchWishlist(); // Refetch wishlist after adding the item
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  };

  // Optionally: Fetch wishlist on mount (when the provider initializes)
  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishListContext.Provider value={{ wishListItems, fetchWishlist, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
