"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Confetti to run only on the client
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });
import { useWindowSize } from "react-use";

const Page = () => {
  const [showDiscount, setShowDiscount] = useState(true);

  const { width, height } = useWindowSize(); // Get window size for confetti rendering

  // Handle the map click to reveal the discount section and show confetti
  const handleMapClick = () => {
    setShowDiscount(true);
  };

  return (
    <section className="breadcrumb__area include-bg inbreadcrumb bg-light py-4 mt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-12 text-center">
            <div className="discount__section my-4">
              <h3>Special Offer!</h3>
              <p>
                Use code <strong>MARRIAGE20</strong> to get 20% off on our new
                website!
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=27.0963267,78.07547" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </div>
            {/* Confetti celebration */}
            <Confetti width={width} height={height} />

            {/* Clickable Google Map */}
            <div
              className="map__container my-4"
              onClick={handleMapClick}
              style={{ cursor: "pointer" }}
            >
              <iframe
                title="Wedding Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49188.784357742334!2d78.05899678293858!3d27.096458590741122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397472506944bcaf%3A0xaa9c9f8f0e90bd1d!2sArmaan%20Farms!5e0!3m2!1sen!2sin!4v1730288640616!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Call to Action */}
            <div className="cta__section my-4">
              <h3>Visit Our New Website!</h3>
              <p>
                Check out our latest updates and services on our new website.
              </p>
              <a
                href="https://aljeco.in"
                className="btn btn-primary"
              >
                Visit New Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
