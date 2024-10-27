"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken } from "@/app/api";
// Create a context for authentication
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  // Load token from local storage on initial render
  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setToken(storedToken);
      // Optionally, fetch user data if token exists
      fetchUser(storedToken);
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
    localStorage.removeItem("token");
  };

  // Provide the user and authentication functions
  return (
    <AuthContext.Provider value={{ user, token, login, logout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};
