"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null, // Store the JWT or session token
  isLoggedIn: false, // Indicates whether the user is logged in
};

// Define the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
    loadUserFromStorage: (state) => {
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedToken) {
        state.user = JSON.parse(storedUser);
        state.token = storedToken;
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
});

export const { login, logout, loadUserFromStorage } = userSlice.actions;

export default userSlice.reducer;
