"use client";
import React, { useState, useEffect } from "react";
import { apiUrl } from "@/app/api";
import { BsHeart, BsShare } from "react-icons/bs";
import RelatedProducts from "./RelatedProducts";
import ProductDetailImages from "./ProductDetailImages";
import { MdLocationPin, MdOutlineStar, MdSunnySnowing } from "react-icons/md";
import Customize from "./Customize";
import axios from "axios";
import { useRouter } from "next/navigation";
import Reviews from "../reviews";

const ProductDetails = ({ params }) => {
  const { id } = params; // Getting the product id from the route parameters
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Function to add product to cart
  const addToCart = async () => {
    const token = localStorage.getItem("token"); // Get the user's token from local storage
    if (!token) {
      router.push("/authentication/login"); // Redirect to login page if not authenticated
      return;
    }

    // Ensure product data is loaded before proceeding
    if (!product?.productItems || !product?.productItems[0]) {
      alert("Product data is not available!");
      return;
    }

    // Prepare the data to be sent to the API
    const data = {
      productItemId: product.productItems[0].itemId, // Use the first product item for demo
      quantity: 1, // Set default quantity to 1
      priceAtTime: product.productItems[0].salePrice || product.productItems[0].originalPrice, // Get the current price
    };

    try {
      const response = await axios.post(`${apiUrl}/cart`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Handle success
      if (response.status === 201) {
        alert("Item added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  // Fetch product details when the component loads
  useEffect(() => {
    axios
      .get(`${apiUrl}/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the product:", error);
        setLoading(false);
      });
  }, [id]); // Dependency array to trigger this effect when the `id` changes

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <section className="pt-4 pb-60">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-8">
              <ProductDetailImages images={product?.productItems[0]?.images} />
            </div>
            <div className="col-md-4">
              <div className="tp-product-details-wrapper position-sticky t-10">
                <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                  <div className="tp-product-details-stock mb-10">
                    <span>In Stock</span>
                  </div>
                  <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                    <div className="tp-product-details-rating">
                      <span title={`Product Rating : ${5}`}>
                        {5}
                        <MdOutlineStar />
                      </span>
                    </div>
                    <div className="tp-product-details-reviews">
                      <span>({20} Ratings)</span>
                    </div>
                  </div>
                </div>
                <div className="tp-product-details-price-wrapper mb-20">
                  <p className="tp-product-details-price new-price mb-0">
                    ₹{product?.productItems[0]?.salePrice || product?.productItems[0]?.originalPrice}
                  </p>
                  <span>MRP inclusive of all taxes</span>
                </div>
                <h1 className="tp-product-details-title">
                  {product.productName}
                </h1>
                <p>{product.productDescription}</p>
                <Customize />
                <div className="tp-product-details-action-wrapper">
                  <div className="d-flex align-items-center gap-3">
                    <div className="tp-product-details-action-item-wrapper w-75">
                      <div className="tp-product-details-add-to-cart">
                        <button
                          className="btn btn-primary w-100"
                          onClick={addToCart} // Attach the addToCart function
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    <button type="button" className="btn btn-outline-primary">
                      <BsHeart />
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      <BsShare />
                    </button>
                  </div>
                </div>
                <div className="tp-product-details-query pt-4">
                  <h5 className="pb-2">Delivery, Stores & Trial</h5>
                  <div className="plocation position-relative">
                    <span className="pin">
                      <MdLocationPin />
                    </span>
                    <input type="text" placeholder="Enter Pincode" />
                    <span className="locateme">Locate Me</span>
                  </div>
                </div>
                <div className="policies d-flex justify-content-evenly py-3">
                  <div className="text-center">
                    <p>100% Certified</p>
                  </div>
                  <div className="text-center">
                    <p>15 days Moneyback</p>
                  </div>
                  <div className="text-center">
                    <p>Lifetime Exchange</p>
                  </div>
                  <div className="text-center">
                    <p>1 year Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />


      <Reviews/>


      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
