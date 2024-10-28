"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getToken } from "@/app/api";
// Create a context for authentication
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
export const useIsLoggedIn = () => {
  const { token } = useAuth();
  return !!token; // Returns true if the token exists, false otherwise
};
// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Load token from local storage on initial render
  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to fetch user data
  const fetchUser = async (authToken) => {
    try {
      const response = await fetch(`${apiUrl}/users/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("userdata", data);
      if (response.ok) {
        setUser(data);
      } else {
        console.error("Failed to fetch user:", data.message);
        logout();
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Function to log in
  const login = (authToken) => {
    setToken(authToken);
    localStorage.setItem("token", authToken);
    fetchUser(authToken);
  };

  // Function to log out
  const logout = () => {
    setToken("");
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    Cookies.remove("is_user_token");
  };

  // Provide the user and authentication functions
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        fetchUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
