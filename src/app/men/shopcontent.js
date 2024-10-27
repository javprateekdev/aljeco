"use client";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProductContCard from "./productcontcard";
import { MdOutlineFilterAlt } from "react-icons/md";
import Filter from "./filter";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import { apiUrl } from "../api";
import { useFilter } from "@/context/FilterContext";
import Loader from "../utils/loader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const ShopContent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { checkedFilters } = useFilter(); // Accessing the filters from context
  const [currentPage, setCurrentPage] = useState(0); // Current page index (0-based)
  const itemsPerPage = 10; // Number of items per page

  // Function to build the query parameters from checked filters
  const buildQueryParams = () => {
    const params = new URLSearchParams();
    params.append("skip", currentPage * itemsPerPage); // Calculate skip
    params.append("take", itemsPerPage); // Set take

    for (const filterType in checkedFilters) {
      if (checkedFilters[filterType].length > 0) {
        params.append(filterType, checkedFilters[filterType].join(",")); // Join multiple values with commas
      }
    }

    return params.toString(); // Convert the URLSearchParams object to a query string
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = buildQueryParams();
        // Build query string
        const response = await axios.get(`${apiUrl}/product?${query}`); // Include query in the API call
        setCount(response.data.count);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch data whenever the filters or page number change

  // Function to handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected); // Update current page index based on the clicked page
  };

  if (loading) return <Loader />;

  return (
    <>
      <section className="tp-shop-area pt-40 pb-60">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="all">
            <Nav className="gap-2" variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="all">All</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-40">
              <Tab.Pane eventKey="all">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 d-none d-md-block">
                    <Filter categories={categories} />
                  </div>
                  <div className="col-xl-9 col-lg-8">
                    <div className="tp-shop-main-wrapper">
                      <div className="tp-shop-top mb-45">
                        <div className="row">
                          <div className="col-xl-6">
                            {/* <div className="tp-shop-top-left d-flex align-items-center ">
                              <div className="tp-shop-top-result">
                                <p>
                                  Showing {currentPage * itemsPerPage + 1}–
                                  {Math.min(
                                    count,
                                    (currentPage + 1) * itemsPerPage
                                  )}{" "}
                                  of {`${count}`} results
                                </p>
                              </div>
                            </div> */}
                          </div>
                          <div className="col-xl-6">
                            <div className="tp-shop-top-right d-flex align-items-center justify-content-between justify-content-md-end ">
                              <div className="d-block d-md-none tp-shop-top-filter">
                                <button
                                  onClick={handleShow}
                                  type="button"
                                  className="tp-filter-btn filter-open-btn"
                                >
                                  <span>
                                    <MdOutlineFilterAlt />
                                  </span>
                                  Filter
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-items-wrapper tp-shop-item-primary">
                        <div className="tab-content">
                          <div className="tab-pane fade show active">
                            <div className="row infinite-container">
                              {products.map((product) => (
                                <div
                                  key={product.productId}
                                  className="col-xl-4 col-md-6 col-sm-6 col-6 infinite-item mb-25"
                                >
                                  <div className="product-list">
                                    <ProductContCard product={product} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="tp-shop-top-left d-flex align-items-center justify-content-end ">
                          <div className="tp-shop-top-result">
                            <p>
                              Showing {currentPage * itemsPerPage + 1}–
                              {Math.min(
                                count,
                                (currentPage + 1) * itemsPerPage,
                              )}{" "}
                              of {`${count}`} results
                            </p>
                          </div>
                        </div>

                        <div className="tp-shop-pagination mt-20">
                          <ReactPaginate
                            previousLabel={<FaArrowLeft />}
                            nextLabel={<FaArrowRight />}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={Math.ceil(count / itemsPerPage)} // Total number of pages
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"tp-pagination"}
                            activeClassName={"active"}
                            pageClassName={"page-item"}
                            previousClassName={"page-item"}
                            nextClassName={"page-item"}
                            disabledClassName={"disabled"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Filter categories={categories} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShopContent;
