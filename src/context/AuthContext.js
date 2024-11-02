"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getToken } from "@/app/api";
import { apiUrl } from "@/app/api";
import axios from 'axios';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token =getToken()
  // Load token from local storage on initial render
  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      fetchUser(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to fetch user data


  
  const fetchUser = async (u) => {
    if (!token) return null;
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
 
  };
 
  // Function to log in
  const login = (authToken) => {
    fetchUser(authToken);
  };

  // Function to log out
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
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
