// "use client"
import React from 'react';
import Link from 'next/link';
import { BsFacebook, BsHeart, BsLinkedin, BsPlus, BsShare, BsTwitter } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import RelatedProducts from './RelatedProducts';
import ProductDetailImages from './ProductDetailImages';
import { MdLocationPin, MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline, MdSunnySnowing } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import Customize from './Customize';

const ProductDetails = async ({ params }) => {
  const { id } = params;

  // Fetch the product data
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  const product = await res.json();


  const { rate } = product.rating;
  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rate);
  const halfStars = rate % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
    
    <section className="breadcrumb__area include-bg pt-100 pb-30 bg-light">
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">Jewellery  433 Designs</h3>
                     <div className="breadcrumb__list">
                        <span><Link href="/">Home</Link></span>
                        <span>Jewellery</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     <section className='pt-4 pb-60'>
        <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-md-8">
                  <ProductDetailImages/>
              </div>
              <div className="col-md-4">
                  <div className="tp-product-details-wrapper position-sticky t-10">
                        <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                           <div className="tp-product-details-stock mb-10">
                              <span>In Stock</span>
                           </div>
                           <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                              <div className="tp-product-details-rating">
                              <span title={`Product Rating : ${rate}`}>
                                 {product.rating.rate}<MdOutlineStar />
                              </span>
                              </div>
                              <div className="tp-product-details-reviews">
                                 <span>({product.rating.count} Ratings)</span>
                              </div>
                           </div>
                        </div>
                        <div className="tp-product-details-price-wrapper mb-20">
                           <p className="tp-product-details-price new-price mb-0">${product.price}</p>
                           <span>MRP inclusive of all taxes</span>
                        </div>
                        <h1 className="tp-product-details-title">{product.title}</h1>
                        <p>{product.description}</p>
                        <Customize/>
                        <div className="tp-product-details-action-wrapper">
                           <div className='d-flex align-items-center gap-3'>
                              <div className="tp-product-details-action-item-wrapper w-75">
                                 <div className="tp-product-details-add-to-cart">
                                    <button className="btn btn-primary w-100">Add To Cart</button>
                                 </div>
                              </div>
                              <button type="button" className="btn btn-outline-primary">
                                 <BsHeart/>
                              </button>
                              <button type="button" className="btn btn-outline-primary">
                                 <BsShare/>
                              </button>
                              {/* <Link href="/cart"  className="tp-product-details-buy-now-btn text-center">Buy Now</Link> */}
                           </div>
                        </div>
                        <div className="tp-product-details-query pt-4">
                           <h5 className='pb-2'>Delivery, Stores & Trial</h5>
                           <div className='plocation position-relative'>
                              <span className='pin'><MdLocationPin /></span>
                              <input type="text" placeholder='Enter Pincode' />
                              <span className='locateme'>Locate Me</span>
                           </div>
                        </div>
                        <div className='policies d-flex justify-content-evenly py-3'>
                           <div className='text-center'>
                              <span width="40px" height="40px" class="common-icon css-1l7t0mg"></span>
                              <p>100% <br />Certified</p>
                           </div>
                           <div className='text-center'>
                              <span width="40px" height="40px" class="common-icon css-1b2zvb0 "></span>
                              <p>15 days<br />Moneyback</p>
                           </div>
                           <div className='text-center'>
                              <span width="40px" height="40px" class="common-icon css-gglao5"></span>
                              <p>Lifetime <br />Exchange</p>
                           </div>
                           <div className='text-center'>
                              <span width="40px" height="40px" class="common-icon css-19nnhma"></span>
                              <p>1 year  <br />Warranty</p>
                           </div>
                        </div>

                        <div className="card mt-20 pdetailcard">
                           <div className="card-header">
                               <h6><MdSunnySnowing/> Gold</h6>
                           </div>
                           <div className="card-body">
                              <div className="d-flex justify-content-between">
                                  <div>
                                      <h6>Type</h6>
                                      <p>GH-SI</p>
                                  </div>
                                  <div>
                                      <h6>Setting</h6>
                                      <p>Setting : Micro Prong</p>
                                      <p>Total No. : 57</p>
                                  </div>
                                  <div>
                                      <h6>Total Weight</h6>
                                      <p>0.314 ct</p>
                                  </div>
                              </div>
                           </div>
                        </div>
                  </div>
              </div>
            </div>
        </div>
     </section>
      <hr />
     <RelatedProducts/>
    </>
  );
};

export default ProductDetails;
