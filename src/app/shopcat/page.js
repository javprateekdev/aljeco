import React from 'react'
import { BsGrid } from "react-icons/bs";

import Header from '../common/header/page'
import ShopContent from './shopcontent'
import Footer from '../common/footer/Footer';
import Link from 'next/link';

export default function Page() {
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
      <ShopContent />
    </>
  )
}

