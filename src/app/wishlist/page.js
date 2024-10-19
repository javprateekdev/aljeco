"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { WishListContext } from "../../context/WishListContext";
import { BiPlus, BiMinus } from "react-icons/bi";

const Wishlist = () => {
  const { wishListItems, fetchWishlist } = useContext(WishListContext);
  const deleteWishListItem = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(`${apiUrl}/cart/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the Bearer token for authorization
          "Content-Type": "application/json", // Ensure proper content type
        },
      });
      alert("Cart Item Deleted Succesfully");
      await fetchCart();
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  useEffect(() => {
    fetchWishlist();
  }, []);
  return (
    <>
      <section className="breadcrumb__area include-bg bg-light pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">Wishlist</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span>Wishlist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-cart-area pt-60 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="tp-cart-list mb-25 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="2" className="tp-cart-header-product">
                        Product
                      </th>
                      <th className="tp-cart-header-price">Price</th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th className="tp-cart-header-quantity">Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishListItems.map((item) => (
                      <tr key={item.id}>
                        <td className="tp-cart-img">
                          <a href="#">
                            <img
                              src={item?.productItem?.images[0]?.url}
                              alt={item.productItem.product.productName}
                            />
                          </a>
                        </td>
                        <td className="tp-cart-title">
                          <a href="#">{item.productItem.product.productName}</a>
                        </td>
                        <td className="tp-cart-price">
                          <span>₹{item.productItem.salePrice}</span>
                        </td>
                        <td className="tp-cart-quantity">
                          <div className="tp-product-quantity mt-10 mb-10">
                            <span className="tp-cart-minus">
                              <BiMinus />
                            </span>
                            <input
                              className="tp-cart-input"
                              type="text"
                              value={1}
                              readOnly
                            />
                            <span className="tp-cart-plus">
                              <BiPlus />
                            </span>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            Add To Cart
                          </button>
                        </td>
                        <td className="tp-cart-action">
                          <button
                            className="tp-cart-action-btn"
                            onClick={() => deleteWishListItem(item.wishlistId)}
                          >
                            <span>Remove</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="tp-cart-bottom">
                <div className="row align-items-end">
                  <div className="col-xl-6 col-md-8">
                    <div class="tp-cart-update">
                      <Link href="/cart" class="tp-cart-update-btn">
                        Go To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
