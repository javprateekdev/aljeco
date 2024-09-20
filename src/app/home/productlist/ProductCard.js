import React from 'react';
import { CartIcon, EyeIcon, WishListIcon } from '../../SvgIcons';
import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline } from "react-icons/md";
import Link from 'next/link';

const ProductCard = ({ product }) => {

    const { rate } = product.rating;

    // Calculate the number of full stars, half stars, and empty stars
    const fullStars = Math.floor(rate);
    const halfStars = rate % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<MdOutlineStar key={`full-${i}`} />);
        }

        if (halfStars === 1) {
            stars.push(<MdOutlineStarHalf key="half" />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<MdOutlineStarOutline key={`empty-${i}`} />);
        }

        return stars;
    };

    return (
        <>
            <div className="tp-product-item-2">
                <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                    {/* <Link href={`/product-details`}> */}
                        <img src={product.image} alt={product.title} />
                    {/* </Link> */}
                    <div className="tp-product-action-2 tp-product-action-blackStyle">
                        <div className="tp-product-action-item-2 d-flex flex-column">
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                                <CartIcon />
                                <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                            </button>
                            <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                <EyeIcon />
                                <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                            </button>
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                                <WishListIcon />
                                <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tp-product-content-2 pt-15">
                    <div className="tp-product-tag-2">
                        <a href="#">{product.category}</a>
                    </div>
                    <h3 className="tp-product-title-2">
                        {/* <Link href={`/product-details`}> */}
                            {product.title}
                        {/* </Link> */}
                    </h3>
                    <div className="tp-product-rating-icon tp-product-rating-icon-2">
                        <span title={`Product Rating : ${rate}`}>
                            {renderStars()}
                        </span>
                    </div>
                    <div className="tp-product-price-wrapper-2">
                        <span className="tp-product-price-2 new-price">${product.price}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
