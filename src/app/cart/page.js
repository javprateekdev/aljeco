import Link from 'next/link';
import React from 'react';
import { BiPlus, BiMinus  } from "react-icons/bi";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07863-1YP900_11_listfront.jpg',
      title: "SUNSHINE Diamond Band",
      price: 76.00,
      quantity: 1,
    },
    {
      id: 2,
      image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03349-WGP600_11_listfront.jpg',
      title: "Anna Quad Diamond Ring",
      price: 76.00,
      quantity: 1,
    },
    {
      id: 3,
      image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR01466-YG0000_11_listfront.jpg',
      title: "Car Kids Ring",
      price: 76.00,
      quantity: 1,
    },
  ];

  return (
    <>
      <section className="breadcrumb__area include-bg bg-light pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">Shopping Cart</h3>
                <div className="breadcrumb__list">
                  <span><a href="#">Home</a></span>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-cart-area pt-60 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="tp-cart-list mb-25 mr-30">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="2" className="tp-cart-header-product">Product</th>
                      <th className="tp-cart-header-price">Price</th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="tp-cart-img"><a href="#"><img src={item.image} alt={item.title} /></a></td>
                        <td className="tp-cart-title"><a href="#">{item.title}</a></td>
                        <td className="tp-cart-price"><span>${item.price.toFixed(2)}</span></td>
                        <td className="tp-cart-quantity">
                          <div className="tp-product-quantity mt-10 mb-10">
                            <span className="tp-cart-minus">
                              <BiMinus />
                            </span>
                            <input className="tp-cart-input" type="text" value={item.quantity} readOnly />
                            <span className="tp-cart-plus">
                               <BiPlus/>
                            </span>
                          </div>
                        </td>
                        <td className="tp-cart-action">
                          <button className="tp-cart-action-btn">
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
                    <div className="tp-cart-coupon">
                      <form action="#">
                        <div className="tp-cart-coupon-input-box">
                          <label>Coupon Code:</label>
                          <div className="tp-cart-coupon-input d-flex align-items-center">
                            <input type="text" placeholder="Enter Coupon Code" />
                            <button type="submit">Apply</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-cart-checkout-wrapper position-sticky t-10">
                <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span className="tp-cart-checkout-top-title">Subtotal</span>
                  <span className="tp-cart-checkout-top-price">$742.00</span>
                </div>
                <div className="tp-cart-checkout-shipping">
                  <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
                  <div className="tp-cart-checkout-shipping-option-wrapper">
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="flat_rate" type="radio" name="shipping" />
                      <label htmlFor="flat_rate">Flat rate: <span>$20.00</span></label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="local_pickup" type="radio" name="shipping" />
                      <label htmlFor="local_pickup">Local pickup: <span>$25.00</span></label>
                    </div>
                    <div className="tp-cart-checkout-shipping-option">
                      <input id="free_shipping" type="radio" name="shipping" />
                      <label htmlFor="free_shipping">Free shipping</label>
                    </div>
                  </div>
                </div>
                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span>$742.00</span>
                </div>
                <div className="tp-cart-checkout-proceed">
                  <Link href="/checkout" className="tp-cart-checkout-btn w-100">Proceed to Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
