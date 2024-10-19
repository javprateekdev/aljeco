"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ShopContent from "./shopcontent";
import Link from "next/link";
import { apiUrl } from "../api";
export default function Page() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${apiUrl}/product`)
      .then((response) => {
        console.log(response);
        setCount(response.data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <section className="breadcrumb__area include-bg pt-100 pb-30 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">
                  Women {`${count}`} Designs
                </h3>
                <div className="breadcrumb__list">
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span>Womens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShopContent />
    </>
  );
}
