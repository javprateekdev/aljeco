import React from 'react'
import Link from 'next/link';
import { BsCartDash, BsEye, BsHeart   } from "react-icons/bs";
import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline } from "react-icons/md";

const ProductContCard = ({product }) => {
    const { rate } = product.rating;
    // Calculate the number of full stars, half stars, and empty stars
    const fullStars = Math.floor(rate);
    const halfStars = rate % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    
  return (
    <>
            <div className="tp-product-item-2">
                <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                    <Link href={`/shopcat/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                    </Link>
                    <div className="tp-product-action-2 tp-product-action-blackStyle">
                        <div className="tp-product-action-item-2 d-flex flex-column">
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                                <BsCartDash/>
                                <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                            </button>
                            <Link href={`/shopcat/${product.id}`} type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                <BsEye />
                                <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                            </Link>
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                                <BsHeart />
                                <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tp-product-content-2 pt-15">
                    <div className="tp-product-tag-2">
                        <Link href={`/shopcat/${product.id}`}>
                           {product.category}
                        </Link>
                    </div>
                    <h3 className="tp-product-title-2">
                        <Link href={`/shopcat/${product.id}`}>
                            {product.title}
                        </Link>
                    </h3>
                    <div className="tp-product-rating-icon tp-product-rating-icon-2">
                        <span title={`Product Rating : ${rate}`}>
                            {Array(fullStars).fill(null).map((_, index) => (
                                <MdOutlineStar key={`full-${index}`} />
                            ))}
                            {halfStars === 1 && <MdOutlineStarHalf key="half" />}
                            {Array(emptyStars).fill(null).map((_, index) => (
                                <MdOutlineStarOutline key={`empty-${index}`} />
                            ))}
                        </span>
                    </div>

                    <div className="tp-product-price-wrapper-2">
                        <span className="tp-product-price-2 new-price">${product.price}</span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProductContCard
