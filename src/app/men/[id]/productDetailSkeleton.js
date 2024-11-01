// ProductDetailsSkeleton.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <section className="pt-4 pb-60">
      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Skeleton for Product Images */}
          <div className="col-md-8">
            <Skeleton height={400} width="100%" />
          </div>
          {/* Skeleton for Product Details */}
          <div className="col-md-4">
            <div className="tp-product-details-wrapper position-sticky t-10">
              <Skeleton
                height={32}
                width="80%"
                style={{ marginBottom: "16px" }}
              />
              <Skeleton
                height={24}
                width="40%"
                style={{ marginBottom: "12px" }}
              />
              <Skeleton
                height={20}
                width="100%"
                count={3}
                style={{ marginBottom: "8px" }}
              />
              <Skeleton
                height={36}
                width="75%"
                style={{ marginBottom: "20px" }}
              />
              <Skeleton
                height={36}
                width="100%"
                style={{ marginBottom: "16px" }}
              />
              <Skeleton
                height={16}
                width="100%"
                count={4}
                style={{ marginBottom: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
