import React,{useContext} from "react";
import Link from "next/link";
import { BsCartDash, BsEye, BsHeart, BsStarFill } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiUrl } from "../api";
import { CartContext } from "../../context/cartContext";
const ProductContCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();
  // const addToCart = async () => {
  //   const token = localStorage.getItem("token"); // Get the user's token from local storage
  //   if (!token) {
  //     router.push("/authentication/login");
  //   }

  //   // Prepare the data to be sent to the API
  //   const data = {
  //     productItemId: product.productItems[0].itemId,
  //     quantity: 1,
  //     priceAtTime: product.productItems[0].salePrice,
  //   };

  //   try {
  //     const response = await axios.post(`${apiUrl}/cart`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     // Handle success
  //     if (response.status === 201) {
  //       alert("Item added to cart successfully!");
  //     }
  //   } catch (error) {
  //     console.error("Error adding item to cart:", error);
  //     alert("Failed to add item to cart.");
  //   }
  // };
  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/authentication/login");
    } else {
      const item = {
        productItemId: product.productItems[0].itemId,
        quantity: 1,
        priceAtTime: product.productItems[0].salePrice,
      };
      addToCart(item); // Add the product to the cart using the context
    }
  };
  return (
    <div className="tp-product-item-2">
      <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
        <Link href={`/men/${product.productId}`}>
          <img
            src={product?.productItems[0]?.images[0]?.url}
            alt={product.productName}
          />
        </Link>
        <div className="tp-product-action-2 tp-product-action-blackStyle">
          <div className="tp-product-action-item-2 d-flex flex-column">
            <button
              type="button"
              className="tp-product-action-btn-2 tp-product-add-cart-btn"
              onClick={handleAddToCart} // Attach the click event handler
            >
              <BsCartDash />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Add to Cart
              </span>
            </button>
            <Link
              href={`/men/${product.productId}`}
              type="button"
              className="tp-product-action-btn-2 tp-product-quick-view-btn"
              data-bs-toggle="modal"
              data-bs-target="#producQuickViewModal"
            >
              <BsEye />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Quick View
              </span>
            </Link>
            <button
              type="button"
              className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn"
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
            <span><BsStarFill/> 4.5</span>
            <span>(23)</span>
        </div>
        <h3 className="tp-product-title-2 mt-10">
          <Link href={`/men/${product.productId}`}>{product.productName}</Link>
        </h3>
        <div className="tp-product-tag-2">
          <Link href={`/men/${product.productId}`}>
            {product.productDescription}
          </Link>
        </div>
        <div className="tp-product-price-wrapper-2">
          <span class="tp-product-price-2 old-price me-2">₹200.00</span>
          <span className="tp-product-price-2 new-price me-3">
            ₹{product?.productItems[0]?.salePrice}
          </span>
          <span className="tp-product-price-2 text-danger">
              31% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductContCard;
