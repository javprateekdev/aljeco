"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../main.css";
import "../../../spacing.css";
import Link from "next/link";
import { MdLogin } from "react-icons/md";
import axios from "axios";
import { apiUrl, getToken } from "@/app/api";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ThreeDots } from 'react-loader-spinner';

const SignUp = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.firstname) {
      newErrors.firstname = "First name is required";
      isValid = false;
    }

    if (!formData.lastname) {
      newErrors.lastname = "Last name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only digits";
      isValid = false;
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submissionData = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        mobile: formData.phone,
      };

      try {
        setLoading(true);
        const response = await axios.post(
          `${apiUrl}/auth/register`,
          submissionData
        );
        setLoading(false);
        toast.success("User registered successfully!", {
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
        Cookies.set("is_user_token", response.data.accessToken);
        setIsLoggedIn(true);
        router.push("/");
        if (response.status == 500) {
          toast.error(response.message, {
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
        }
      } catch (error) {
        console.log("error", error);
        const errormessage = error.response?.data;
        console.error("error message", error.response?.data);
        console.error("Error during registration:", errormessage.message);
        toast.error(errormessage.message, {
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
      }finally{
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      router.push("/");
    }
  }, [router]);

  return (
    <section className="tp-login-area p-relative z-index-1 fix pt-100 pb-50">
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
                  <Link className="d-flex align-items-center gap-2" href="/">
                    <img
                      src="/assets/img/logo/logo.png"
                      alt="logo"
                      style={{ width: "80px" }}
                    />
                    <span>Aljeco </span>
                  </Link>
                </h3>
                <h4 className="py-3">Signup</h4>
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link href="/authentication/login">Sign In</Link>
                  </span>
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="tp-login-option">
                  <div className="tp-login-input-wrapper">
                    <div className="tp-login-input-box">
                      <div className="tp-login-input">
                        <input
                          id="firstname"
                          name="firstname"
                          type="text"
                          placeholder="First Name"
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="tp-login-input-title">
                        <label htmlFor="firstname">Your First Name</label>
                      </div>
                      {errors.firstname && (
                        <div className="text-danger">{errors.firstname}</div>
                      )}
                    </div>

                    <div className="tp-login-input-box">
                      <div className="tp-login-input">
                        <input
                          id="lastname"
                          name="lastname"
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="tp-login-input-title">
                        <label htmlFor="lastname">Your Last Name</label>
                      </div>
                      {errors.lastname && (
                        <div className="text-danger">{errors.lastname}</div>
                      )}
                    </div>

                    <div className="tp-login-input-box">
                      <div className="tp-login-input">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="shofy@mail.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="tp-login-input-title">
                        <label htmlFor="email">Your Email</label>
                      </div>
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>

                    <div className="tp-login-input-box d-flex">
                      <span className="input-group-text">+91</span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) =>{
                          setFormData({ ...formData, phone: e.target.value });
                          setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
                        }}
                        maxLength="10"
                        className="tp-login-input"
                      />
                      {errors.phone && (
                        <div className="text-danger">{errors.phone}</div>
                      )}
                    </div>

                    <div className="tp-login-input-box">
                      <div className="tp-login-input">
                        <input
                          id="tp_password"
                          name="password"
                          type="password"
                          placeholder="Min. 6 characters"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="tp-login-input-title">
                        <label htmlFor="tp_password">Password</label>
                      </div>
                      {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </div>
                    <div className="tp-login-input-box">
                    <div className="tp-login-input">
                      <input
                        id="tp_confirm_password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="tp-login-input-title">
                      <label htmlFor="tp_confirm_password">
                        Confirm Password
                      </label>
                    </div>
                    {errors.confirmPassword && (
                      <div className="text-danger">
                        {errors.confirmPassword}
                      </div>
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
      <MdLogin style={{ fontSize: "18px" }} /> Signup
    </>
  )}
</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
