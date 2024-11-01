"use-client";
import React, { useContext } from "react";
import { BsCartDash, BsEye, BsHeart, BsStarFill } from "react-icons/bs";
import Link from "next/link";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "@/context/WishListContext";
import { useAuth } from "@/context/AuthContext";
import { getToken } from "../api";
import { useRouter } from "next/navigation";

const ProductContCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);
  const token = getToken();
  const router = useRouter();
  
  const handleAddToCart = () => {
    if (!token) {
      router.push("/authentication/login");
    } else {
      const item = {
        productItemId: product.productItems[0].itemId,
        quantity: 1,
        priceAtTime: product.productItems[0].salePrice,
      };
      addToCart(item);
    }
  };

  const handleAddToWishList = () => {
    if (!token) {
      router.push("/authentication/login");
    } else {
      const item = {
        productItemId: product.productItems[0].itemId,
        quantity: 1,
        priceAtTime: product.productItems[0].salePrice,
      };
      addToWishList(item);
    }
  };

  return (
    <div className="tp-product-item-2">
      <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
        <Link href={`/men/${product.productId}`} prefetch={true}>
          <button type="button" className="tp-product-image-button">
            <img
              src={product?.productItems[0]?.images[0]?.url}
              alt={product.productName}
            />
          </button>
        </Link>
        <div className="tp-product-action-2 tp-product-action-blackStyle">
          <div className="tp-product-action-item-2 d-flex flex-column">
            <button
              type="button"
              className="tp-product-action-btn-2 tp-product-add-cart-btn"
              onClick={handleAddToCart}
            >
              <BsCartDash />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Add to Cart
              </span>
            </button>
            <Link href={`/men/${product.productId}`} prefetch={true}>
              <button
                type="button"
                className="tp-product-action-btn-2 tp-product-quick-view-btn"
                data-bs-toggle="modal"
                data-bs-target="#producQuickViewModal"
              >
                <BsEye />
                <span className="tp-product-tooltip tp-product-tooltip-right">
                  Quick View
                </span>
              </button>
            </Link>
            <button
              type="button"
              className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn"
              onClick={handleAddToWishList}
            >
              <BsHeart />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Add To Wishlist
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="tp-product-content-2 pt-15">
        <div className="ratings">
          <span>
            <BsStarFill /> 4.5
          </span>
          <span>(23)</span>
        </div>
        <h3 className="tp-product-title-2 mt-10">
          <Link href={`/men/${product.productId}`} prefetch={true}>
            <button type="button" className="tp-product-title-button">
              {product.productName}
            </button>
          </Link>
        </h3>
        <div className="tp-product-tag-2">
          <Link href={`/men/${product.productId}`} prefetch={true}>
            <button type="button" className="tp-product-description-button">
              {product.productDescription}
            </button>
          </Link>
        </div>
        <div className="tp-product-price-wrapper-2">
          <span className="tp-product-price-2 old-price me-2">₹200.00</span>
          <span className="tp-product-price-2 new-price me-3">
            ₹{product?.productItems[0]?.salePrice}
          </span>
          <span className="tp-product-price-2 text-danger">31% off</span>
        </div>
      </div>
    </div>
  );
};

export default ProductContCard;
