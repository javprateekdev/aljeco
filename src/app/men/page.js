"use client";
import React, { useState, useEffect } from "react";
import ShopContent from "./shopcontent";
import Link from "next/link";
import axios from "axios";
import { apiUrl } from "../api";
import Skeleton from "react-loading-skeleton"; // Import Skeleton from the library
import "react-loading-skeleton/dist/skeleton.css"; // Default styles for skeleton

export default function Page() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${apiUrl}/product`)
      .then((response) => {
        console.log(response);
        setCount(response.data.count);
        setLoading(false); // Stop loading after fetching data
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="breadcrumb__area include-bg inbreadcrumb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">
                  {loading ? (
                    <Skeleton width={200} height={24} /> // Show skeleton when loading
                  ) : (
                    `Mens ${count} Designs` // Show data after loading
                  )}
                </h3>
                <div className="breadcrumb__list">
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span>Mens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Skeleton height={500} count={1} /> // Show a full skeleton for the content while loading
      ) : (
        <ShopContent />
      )}
    </>
  );
}
