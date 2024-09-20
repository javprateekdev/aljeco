"use client"
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MobileSearch = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="tp-mobile-item text-center">
        <a href="#" className="tp-mobile-item-btn" onClick={handleShow}>
          <FiSearch />
          <span>Search</span>
        </a>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <section className="tp-search-area tp-search-style-secondary opened">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-search-form">
                            <div className="tp-search-close text-center mb-20">
                                <button className="tp-search-close-btn tp-search-close-btn"></button>
                            </div>
                            <form action="#">
                                <div className="tp-search-input mb-10">
                                  <input type="text" placeholder="Search for product..." />
                                </div>
                                <div className="tp-search-category">
                                <span>Search : </span>
                                    <a href="#">Men, </a>
                                    <a href="#">Women, </a>
                                    <a href="#">Trending, </a>
                                    <a href="#">Product name... </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileSearch;
