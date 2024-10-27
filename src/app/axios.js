import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter for redirection
import { getToken, removeToken } from "./auth"; // Utility functions for token management

const axiosInstance = axios.create({
  baseURL: "http://localhost:9001", // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    const router = useRouter();

    // Check for 401 or 403 status codes
    if (response && (response.status === 401 || response.status === 403)) {
      // Log out user and redirect
      console.log("Unauthorized access, logging out...");
      removeToken(); // Function to remove token or clear user session
      router.push("/login"); // Redirect to login page
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
