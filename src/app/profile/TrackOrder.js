import React from 'react'

const TrackOrder = () => {
  return (
    <>
         <section className="tp-order-area pb-160">
               <div className="tp-order-inner">
                  <div className="row gx-0">
                     <div className="col-lg-12">
                        <div className="tp-order-details" style={{background:'#ddc0b4'}}>
                           <div className="tp-order-details-top text-center mb-50">
                              <div className="tp-order-details-icon">
                                 <span>
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M46 26V51H6V26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M51 13.5H1V26H51V13.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M26 51V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M26 13.5H14.75C13.0924 13.5 11.5027 12.8415 10.3306 11.6694C9.15848 10.4973 8.5 8.9076 8.5 7.25C8.5 5.5924 9.15848 4.00269 10.3306 2.83058C11.5027 1.65848 13.0924 1 14.75 1C23.5 1 26 13.5 26 13.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M26 13.5H37.25C38.9076 13.5 40.4973 12.8415 41.6694 11.6694C42.8415 10.4973 43.5 8.9076 43.5 7.25C43.5 5.5924 42.8415 4.00269 41.6694 2.83058C40.4973 1.65848 38.9076 1 37.25 1C28.5 1 26 13.5 26 13.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </span>
                              </div>
                              <div className="tp-order-details-content">
                                 <h3 className="tp-order-details-title">Your Order Confirmed</h3>
                                 <p>We will send you a shipping confirmation email as soon <br/> as your order ships</p>
                              </div>
                           </div>
                           <div className="tp-order-details-item-wrapper">
                              <div className="row">
                                 <div className="col-sm-6">
                                    <div className="tp-order-details-item">
                                       <h4>Order Date:</h4>
                                       <p>April 10, 2023</p>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                    <div className="tp-order-details-item">
                                       <h4>Expected Delivery: </h4>
                                       <p>April 16, 2023</p>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                    <div className="tp-order-details-item">
                                       <h4>Order Number:</h4>
                                       <p>#9641</p>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                    <div className="tp-order-details-item">
                                       <h4>Payment Method:</h4>
                                       <p>Credit Card</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-12">
                        <div className="tp-order-info-wrapper">
                           <h4 className="tp-order-info-title">Order Details</h4>
   
                           <div className="tp-order-info-list">
                              <ul>

                                 <li className="tp-order-info-list-header">
                                    <h4>Product</h4>
                                    <h4>Total</h4>
                                 </li>

                                 <li className="tp-order-info-list-desc">
                                    <p>Xiaomi Redmi Note 9 Global V. <span> x 2</span></p>
                                    <span>$274:00</span>
                                 </li>
                                 <li className="tp-order-info-list-desc">
                                    <p>Office Chair Multifun <span> x 1</span></p>
                                    <span>$74:00</span>
                                 </li>
                                 <li className="tp-order-info-list-desc">
                                    <p>Apple Watch Series 6 Stainless  <span> x 3</span></p>
                                    <span>$362:00</span>
                                 </li>
                                 <li className="tp-order-info-list-desc">
                                    <p>Body Works Mens Collection <span> x 1</span></p>
                                    <span>$145:00</span>
                                 </li>

                                 <li className="tp-order-info-list-subtotal">
                                    <span>Subtotal</span>
                                    <span>$507.00</span>
                                 </li>

                                 <li className="tp-order-info-list-total">
                                    <span>Total</span>
                                    <span>$1,476.00</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </section>
    </>
  )
}

export default TrackOrder
