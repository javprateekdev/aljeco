import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductContCard from './productcontcard';
import { MdOutlineStar, MdCurrencyRupee } from 'react-icons/md';

const Filter = ({categories}) => {
  return (
    <>
        <div className="tp-shop-sidebar mr-10">
            <div className="tp-shop-widget mb-50">
                <h3 className="tp-shop-widget-title">Price</h3>
                <ul className="filter-items">
                    <li>
                        <label className='d-flex align-items-center gap-1 '>
                            <input type="checkbox" />
                            <span className='d-flex justify-content-between w-100'> <span><MdCurrencyRupee/>200-500</span> <span>10k</span> </span>
                        </label>
                    </li>
                    <li>
                        <label className='d-flex align-items-center gap-1 '>
                            <input type="checkbox" />
                            <span className='d-flex justify-content-between w-100'> <span><MdCurrencyRupee/>500-1000</span> <span>1300</span> </span>
                        </label>
                    </li>
                    <li>
                        <label className='d-flex align-items-center gap-1 '>
                            <input type="checkbox" />
                            <span className='d-flex justify-content-between w-100'> <span><MdCurrencyRupee/>1000-2000</span> <span>50</span> </span>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="tp-shop-widget mb-50">
                <h3 className="tp-shop-widget-title">Product Status</h3>
                <ul className="filter-items">
                    <li>
                        <label className='d-flex align-items-center gap-1 '>
                            <input type="checkbox" />
                            <span className='d-flex justify-content-between w-100'>On sale </span>
                        </label>
                    </li>
                    <li>
                        <label className='d-flex align-items-center gap-1 '>
                            <input type="checkbox" />
                            <span className='d-flex justify-content-between w-100'>In Stock</span>
                        </label>
                    </li>
                </ul>
            </div>

            <div className="tp-shop-widget mb-50">
                <h3 className="tp-shop-widget-title">Categories</h3>
                <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-categories">
                        <ul>
                            {categories.map((category) => (
                                <li key={category.name} className="infinite-item mb-25">
                                    <label className='d-flex align-items-center gap-1 '>
                                        <input type="checkbox" value={category.name} />
                                            <span className='d-flex justify-content-between w-100'>{category.name} <span>{category.count}</span></span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="tp-shop-widget mb-50">
                <h3 className="tp-shop-widget-title">Top Rated Products</h3>
                <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-product">
                        <div className="tp-shop-widget-product-item d-flex align-items-center">
                            <div className="tp-shop-widget-product-thumb">
                                <a href="#">
                                    <img src="assets/img/product/shop/sm/shop-sm-1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="tp-shop-widget-product-content">
                                <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                                    <div className="tp-shop-widget-product-rating">
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                    </div>
                                    <div className="tp-shop-widget-product-rating-number">
                                        <span>(4.2)</span>
                                    </div>
                                </div>
                                <h4 className="tp-shop-widget-product-title">
                                    <a href="#">Smart watches wood...</a>
                                </h4>
                                <div className="tp-shop-widget-product-price-wrapper">
                                    <span className="tp-shop-widget-product-price">$150.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-product">
                        <div className="tp-shop-widget-product-item d-flex align-items-center">
                            <div className="tp-shop-widget-product-thumb">
                                <a href="#">
                                    <img src="assets/img/product/shop/sm/shop-sm-1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="tp-shop-widget-product-content">
                                <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                                    <div className="tp-shop-widget-product-rating">
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                        <span>
                                            <MdOutlineStar/>
                                        </span>
                                    </div>
                                    <div className="tp-shop-widget-product-rating-number">
                                        <span>(4.2)</span>
                                    </div>
                                </div>
                                <h4 className="tp-shop-widget-product-title">
                                    <a href="#">Smart watches wood...</a>
                                </h4>
                                <div className="tp-shop-widget-product-price-wrapper">
                                    <span className="tp-shop-widget-product-price">$150.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-shop-widget mb-50">
                <h3 className="tp-shop-widget-title">Popular Brands</h3>
                <div className="tp-shop-widget-content ">
                    <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_01.png" alt="" />
                        </a>
                        </div>
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_02.png" alt="" />
                        </a>
                        </div>
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_03.png" alt="" />
                        </a>
                        </div>
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_04.png" alt="" />
                        </a>
                        </div>
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_05.png" alt="" />
                        </a>
                        </div>
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_06.png" alt="" />
                        </a>
                        </div>
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_07.png" alt="" />
                        </a>
                        </div>
                        <div className="tp-shop-widget-brand-item">
                        <a href="#">
                            <img src="assets/img/product/shop/brand/logo_08.png" alt="" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Filter
