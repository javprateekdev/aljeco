"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../main.css";
import "../../../spacing.css";
import Link from "next/link";
import axios from "axios";
import { apiUrl } from "@/app/api";
import { useRouter } from "next/navigation";
import { MdLogin } from "react-icons/md";
const Login = () => {
  // State variables

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loggedin, setLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State to check if component is mounted
  const router = useRouter();

  useEffect(() => {
    // Set the mounted state to true when the component mounts
    setIsMounted(true);
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
    if (loggedin) {
      // Redirect to dashboard after successful login
      router.push("/"); // Navigate the user to the /dashboard route
    }
  }, [loggedin]);

  console.log("email", email);
  console.log("password", password);
  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    try {
      // Send POST request to login
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      // Assuming the token is returned in response.data.token
      const { token } = response.data;
      localStorage.setItem("token", token);
      setLoggedIn(true);
      // Store token in localStorage if remember me is checked
      // if (rememberMe) {
      //   localStorage.setItem("token", token);
      // } else {
      //   sessionStorage.setItem("token", token); // Alternatively, use sessionStorage
      // }

      // Redirect or do something after successful login
      console.log("Login successful", token);
    } catch (err) {
      // Handle error
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <section className="tp-login-area p-relative z-index-1 fix pt-50">
        <div className="tp-login-shape">
          <img
            className="tp-login-shape-1"
            src="/assets/img/login/login-shape-1.png"
            alt=""
          />
          <img
            className="tp-login-shape-2"
            src="/assets/img/login/login-shape-2.png"
            alt=""
          />
          <img
            className="tp-login-shape-3"
            src="/assets/img/login/login-shape-3.png"
            alt=""
          />
          <img
            className="tp-login-shape-4"
            src="/assets/img/login/login-shape-4.png"
            alt=""
          />
          <img
            className="tp-login-shape-6"
            src="/assets/img/login/bubble02.png"
            alt=""
          />
          <img
            className="tp-login-shape-5"
            src="/assets/img/login/bubble01.png"
            alt=""
          />
        </div>
        <div className="container">
          <div
            className="row align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-xl-6 col-lg-8">
              <div className="tp-login-wrapper">
                <div className="tp-login-top text-center mb-50">
                  <h3 className="d-flex align-items-center justify-content-center tp-login-title gap-2 py-2">
                    <Link className="d-block" href="/">
                      <img
                        src="/assets/img/logo/logo.png"
                        alt="logo"
                        style={{ width: "80px" }}
                      /> <br />
                      <span className="mt-2 d-block">Aljeco </span>
                    </Link>
                  </h3>
                  <h4 className="py-3">Login</h4>
                  <p>
                    Don’t have an account?{" "}
                    <span>
                      <Link href="/authentication/signup">
                        Signup
                      </Link>
                    </span>
                  </p>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="tp-login-option">
                    <div className="tp-login-input-wrapper">
                      <div className="tp-login-input-box">
                        <div className="tp-login-input">
                          <input
                            id="email"
                            type="email"
                            placeholder="shofy@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="tp-login-input-title">
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="tp-login-input-box">
                        <div className="tp-login-input">
                          <input
                            id="tp_password"
                            type="password"
                            placeholder="Min. 6 character"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="tp-login-input-title">
                          <label htmlFor="tp_password">Password</label>
                        </div>
                      </div>
                    </div>
                    {/* <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                       <div className="tp-login-remeber">
                        <input
                          id="remember"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember">Remember me</label>
                      </div> 
                      <div className="tp-login-forgot">
                        <Link href="#">Forgot Password?</Link>
                      </div>
                    </div> */}
                    <div className="tp-login-bottom">
                      <button type="submit" className="tp-login-btn w-100">
                      <MdLogin style={{ fontSize: "18px" }} /> Login
                      </button>
                    </div>
                    {error && <p className="text-danger">{error}</p>}{" "}
                    {/* Display error message */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
