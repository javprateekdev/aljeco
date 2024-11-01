import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="tp-footer-area tp-footer-style-2 fixed bottom-0"
          style={{ background: "#F4F7F9" }}
        >
          {/* Red SVG Wave at the Top */}
          <div className="wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="w-full h-auto"
            >
              <path
                fill="#ddc0b4" // Red color for the wave
                d="M0,64L30,85.3C60,107,120,149,180,160C240,171,300,149,360,160C420,171,480,213,540,202.7C600,192,660,128,720,112C780,96,840,128,900,144C960,160,1020,160,1080,160C1140,160,1200,160,1260,170.7C1320,181,1380,203,1410,214.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div className="tp-footer-top ">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-1 mb-50">
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-logo">
                        <a className="d-flex gap-2 align-items-center" href="#">
                          <img
                            src="/assets/img/logo/logo.png"
                            alt="logo"
                            className="footer-logo"
                          />
                          <span>
                            <strong>Aljeco</strong>
                          </span>
                        </a>
                      </div>
                      <p>
                        We are a team of designers and developers that create
                        high-quality WordPress solutions.
                      </p>
                      <div className="tp-footer-social">
                        <a href="#">
                          <img
                            src="/assets/img/icon/facebook.png"
                            alt="Facebook"
                            className="social-icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="/assets/img/icon/instagram.png"
                            alt="Instagram"
                            className="social-icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="/assets/img/icon/whatsapp.png"
                            alt="WhatsApp"
                            className="social-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6">
                  <div className="tp-footer-widget footer-col-3 mb-50">
                    <div className="tp-footer-widget-content">
                      <div className="row">
                        <div className="col-md-12">
                          <ul>
                            <li>
                              <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                              <a href="#">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-footer-widget footer-col-4 mb-50">
                    <h4 className="tp-footer-widget-title">Help/Support</h4>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-talk">
                        <p>
                          <img
                            src="/assets/img/contact/phone.png"
                            alt="Phone"
                            className="social-icon"
                          />{" "}
                          <a href="tel:+91-9068998591">+91-90689 98591</a>
                        </p>
                      </div>
                      <div className="tp-footer-contact">
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span>
                              <img
                                src="/assets/img/contact/mail.png"
                                alt="Email"
                                className="social-icon"
                              />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p>
                              <a href="mailto:info@aljeco.com">
                                &nbsp; info@aljeco.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span>
                              <img
                                src="/assets/img/contact/location.png"
                                alt="Location"
                                className="social-icon"
                              />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p>
                              <a href="#" target="_blank">
                                &nbsp; Fatehabad Rd, Agra
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
