"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../main.css";
import "../../../spacing.css";
import Link from "next/link";
import axios from "axios";
import { login } from "../../../Redux/userSlice";
import { apiUrl, getToken } from "@/app/api";
import { useRouter } from "next/navigation";
import { MdLogin } from "react-icons/md";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../utils/loader";
import { useDispatch } from "react-redux";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import { ThreeDots } from 'react-loader-spinner';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // Error state for email
  const [passwordError, setPasswordError] = useState(""); // Error state for password
  const [error, setError] = useState(""); // General error state
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsMounted(true);
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
      router.push("/"); // Redirect if the user is already logged in
    }
  }, [router, setIsLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");
    setLoading(true);

    if (!email) {
      setEmailError("Email is required");
      setLoading(false);
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      const { token } = response.data;
      if (token) {
        Cookies.set("is_user_token", token);
        setIsLoggedIn(true);
        dispatch(login({ email }));
        setLoading(false);
        router.push("/"); // Redirect after successful login
      }
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  if (!isMounted || isLoggedIn) return <Loader />;

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
                    <Link className="d-block" href="/" prefetch={true}>
                      <img
                        src="/assets/img/logo/logo.png"
                        alt="logo"
                        style={{ width: "80px" }}
                      />{" "}
                      <br />
                      <span className="mt-2 d-block">Aljeco </span>
                    </Link>
                  </h3>
                  <h4 className="py-3">Login</h4>
                  <p>
                    Don’t have an account?{" "}
                    <span>
                      <Link href="/authentication/signup" prefetch={true}>
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
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setEmailError(""); // Reset error when user types
                            }}
                            required
                          />
                        </div>
                        <div className="tp-login-input-title">
                          <label htmlFor="email">Your Email</label>
                        </div>
                        {emailError && (
                          <p className="text-danger">{emailError}</p>
                        )}
                      </div>
                      <div className="tp-login-input-box">
                        <div className="tp-login-input">
                          <input
                            id="tp_password"
                            type="password"
                            placeholder="Min. 6 character"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                              setPasswordError(""); // Reset error when user types
                            }}
                            required
                          />
                        </div>
                        <div className="tp-login-input-title">
                          <label htmlFor="tp_password">Password</label>
                        </div>
                        {passwordError && (
                          <p className="text-danger">{passwordError}</p>
                        )}
                      </div>
                    </div>
                    <div className="tp-login-bottom">
                    <button
  type="submit"
  className="tp-login-btn w-100 d-flex justify-content-center align-items-center"
  disabled={loading}
>
  {loading ? (
    <ThreeDots
      visible={true}
      height="20"
      width="20"
      color="#ffffff"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  ) : (
    <>
      <MdLogin style={{ fontSize: "18px" }} /> Login
    </>
  )}
</button>

                    </div>
                    {error && <p className="text-danger">{error}</p>}{" "}
                    {/* General error */}
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
