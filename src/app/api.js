"use client";
import Cookies from "js-cookie";
// export const apiUrl = "https://api.aljeco.in";
export const apiUrl = "https://api.zenithdigital.shop";
// utils/axiosInstance.js

export const setAuthCookie = () => {
  return Cookies.set("user__isLoggedIn", "true", { expires: 1 });
};

export const removeAuthCookie = () => {
  return Cookies.remove("user__isLoggedIn", "true", { expires: 1 });
};

export const getToken = () => {
  return Cookies.get("is_user_token");
};
