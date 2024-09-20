"use client";
import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filtered products by category
  const mensWear = products.filter(product => product.category === "men's clothing");
  const womensWear = products.filter(product => product.category === "women's clothing");

  return (
    <>
      <section className="tp-product-area pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-2 text-center mb-35">
                <span className="tp-section-title-pre-2">
                  All Product Shop
                  <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81 14.5798C0.890564 -8.05914 -5.81154 0.0503902 5.00322 21" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" />
                  </svg>
                </span>
                <h3 className="tp-section-title-2">Customer Favorite Style Product</h3>
              </div>
            </div>
          </div>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <div className='container'>
            <div className='row'>
              <div className='tp-product-tab-2 tp-tab mb-50 text-center'>
                <Nav className='nav nav-tabs justify-content-center gap-3'>
                  <Nav.Item>
                    <Nav.Link eventKey="all">All Collection</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="mens">Mens wear</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="womens">Womens wear</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              <Tab.Content>
                <Tab.Pane eventKey="all">
                  <div className='row'>
                    {products.map(product => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-30">
                          <div className="product-list">
                            <ProductCard product={product} />
                          </div>
                        </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="mens">
                  <div className='row'>
                    {mensWear.map(product => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-30">
                          <div className="product-list">
                            <ProductCard product={product} />
                          </div>
                        </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="womens">
                  <div className='row'>
                    {womensWear.map(product => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-30">
                          <div className="product-list">
                            <ProductCard product={product} />
                          </div>
                        </div>
                    ))}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </section>
    </>
  );
};

export default ProductList;
