"use client";
import React, { useState, useEffect } from "react";
import ShopContent from "./shopcontent";
import Link from "next/link";
import axios from "axios";
import { apiUrl } from "../api";
import Skeleton from "react-loading-skeleton"; // Import Skeleton from the library
import "react-loading-skeleton/dist/skeleton.css"; // Default styles for skeleton

export default function Page() {
  return (
    <>
      <section className="breadcrumb__area include-bg inbreadcrumb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <div className="breadcrumb__list">
                  <span>
                    <Link href="/" prefetch={true} >Home</Link>
                  </span>
                  <span>Mens</span>
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
