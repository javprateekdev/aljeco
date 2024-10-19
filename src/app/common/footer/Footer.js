import React from 'react'
import { BiPhone } from 'react-icons/bi';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaRegEnvelope   } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer>
            <div className="tp-footer-area tp-footer-style-2" style={{background:'#F4F7F9'}}>
                <div className="tp-footer-top pt-70 pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                                <div className="tp-footer-widget footer-col-1 mb-50">
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-logo">
                                            <a className='d-flex gap-2 align-items-center' href="#">
                                                <img src="/assets/img/logo/logo.png" alt="logo" />
                                                <span><strong>Aljeco</strong></span>
                                            </a>
                                        </div>
                                        <p>We are a team of designers and developers that create high quality WordPress</p>
                                        <div className="tp-footer-social">
                                            <a href="#" style={{color:'#1877F2'}}><FaFacebookF /></a>
                                            <a href="#" style={{color:'#F56040'}}><BsInstagram /></a>
                                            <a href="#" style={{color:'#25D366'}}><BsWhatsapp /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6">
                                <div className="tp-footer-widget footer-col-3 mb-50">
                                {/* <h4 className="tp-footer-widget-title">Infomation</h4> */}
                                    <div className="tp-footer-widget-content">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul>
                                                    {/* <li><a href="#">Our Story</a></li>
                                                    <li><a href="#">Careers</a></li> */}
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Terms & Conditions</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                    
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
                                            <p><BiPhone/> <a href="tel:+91-9068998591">+91-90689 98591</a></p>
                                        </div>
                                        <div className="tp-footer-contact">
                                            <div className="tp-footer-contact-item d-flex align-items-start">
                                                <div className="tp-footer-contact-icon">
                                                <span>
                                                    <FaRegEnvelope/>
                                                </span>
                                                </div>
                                                <div className="tp-footer-contact-content">
                                                <p><a href="mailto:"></a></p>
                                                </div>
                                            </div>
                                            <div className="tp-footer-contact-item d-flex align-items-start">
                                                <div className="tp-footer-contact-icon">
                                                <span>
                                                <FaMapMarkerAlt/>
                                                </span>
                                                </div>
                                                <div className="tp-footer-contact-content">
                                                <p><a href="#" target="_blank">Fatyahbad road Agra</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-footer-bottom">
                    <div className="container">
                        <div className="tp-footer-bottom-wrapper">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="tp-footer-copyright">
                                        <p>© 2024 All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="tp-footer-payment text-md-end">
                                        <p>
                                            <img src="/assets/img/footer/footer-pay-2.png" alt="" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
