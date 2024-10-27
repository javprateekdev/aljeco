"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/app/api";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create the WishList context
export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishListItems, setWishListItems] = useState([]);
  const [token, setToken] = useState("");

  // Fetch wishlist items from the API
  const fetchWishlist = async (t) => {
    console.log("token", token);
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
    try {
      const response = await axios.post(`${apiUrl}/wishlist`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("Item Added To Wishlist!", {
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
        fetchWishlist(); // Refetch wishlist after adding the item
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  };

  useEffect(() => {
    const t = localStorage.getItem("token");

    if (t) {
      setToken(t);
      fetchWishlist(t);
    }
  }, [token]);

  return (
    <WishListContext.Provider
      value={{ wishListItems, fetchWishlist, addToWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
