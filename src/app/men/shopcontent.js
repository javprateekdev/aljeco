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
import Skeleton from "react-loading-skeleton"; // Import skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Import default styles for skeleton loader
import { generatePageNumbers } from "../utils/generatePageNumbers";
const ShopContent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { checkedFilters } = useFilter(); // Accessing the filters from context
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);
  const [count, setCount] = useState(10);
  const totalPages = Math.ceil(count / itemsPerPage);

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
  }, [currentPage, checkedFilters]); // Fetch data whenever the filters or page number change

  // Function to handle page change
  const siblingCount = 1;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Skeleton loader placeholder for products
  const renderSkeletons = () => {
    return Array.from({ length: itemsPerPage }).map((_, index) => (
      <div
        key={index}
        className="col-xl-4 col-md-6 col-sm-6 col-6 infinite-item mb-25"
      >
        <Skeleton height={250} />
        <Skeleton width={`80%`} />
        <Skeleton width={`60%`} />
      </div>
    ));
  };

  return (
    <>
      <section className="tp-shop-area pt-20">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="all">
            <Tab.Content>
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
                              {loading
                                ? renderSkeletons() // Show skeletons while loading
                                : products.map((product) => (
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

                      {count > itemsPerPage ? (
                        <div className="rounded-b-lg mr-2">
                          <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end gap-1">
                              <li className="page-item">
                                <button
                                  onClick={() => handlePageChange(1)} // First page
                                  disabled={currentPage === 1}
                                  className={`page-link font-bold px-2 ${
                                    currentPage === 1 ? "disabled" : ""
                                  }`}
                                >
                                  {"<<"}
                                </button>
                              </li>

                              {/* Dynamic Pages */}
                              {generatePageNumbers(
                                totalPages,
                                siblingCount,
                                currentPage
                              ).map((page, index) => (
                                <li key={index} className="page-item">
                                  {page === "..." ? (
                                    <span className="page-link disabled">
                                      ...
                                    </span>
                                  ) : (
                                    <button
                                      onClick={() => handlePageChange(page)}
                                      className={`page-link font-bold px-2 ${
                                        currentPage === page ? "active" : ""
                                      }`}
                                    >
                                      {page}
                                    </button>
                                  )}
                                </li>
                              ))}

                              <li className="page-item">
                                <button
                                  onClick={() => handlePageChange(totalPages)} // Last page
                                  disabled={currentPage === totalPages}
                                  className={`page-link font-bold px-2 ${
                                    currentPage === totalPages ? "disabled" : ""
                                  }`}
                                >
                                  {">>"}
                                </button>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      ) : (
                        <></>
                      )}
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
