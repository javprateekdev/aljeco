import { FaArrowRightLong } from "react-icons/fa6";
import Banner from "./Banner";
import ProductList from "./productlist/ProductList";
import Featured from "./featured/featured";
import Trending from "./trendingarrivals/trending";
import Testimonials from "../testimonials/Testimonials";
import Link from "next/link";
import MobileSlideMenus from "../common/header/MobileSlideMenus";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
};

export default function HomePage() {
  return (
    <>
      <motion.div
        className="d-block d-lg-none container pt-120 pb-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="tp-search-input mb-10">
          <input type="text" placeholder="Search product..." />
          <span className="searchicon">
            <FaSearch />
          </span>
        </div>
      </motion.div>

      <MobileSlideMenus />

      <motion.div initial="hidden" animate="visible" variants={scaleIn}>
        <Banner />
      </motion.div>

      <motion.section className="productcat py-4" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 leftdimg">
              <Link href="/men">
                <motion.img
                  className="img-fluid rounded-2"
                  src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/08-August/Responsive/09/Responsive-05.jpg"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
            </div>
            <div className="col-xl-6 righsimg">
              <div>
                <Link href="/men">
                  <motion.img
                    className="img-fluid rounded-2"
                    src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/RTS/2x.webp"
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
              </div>
              <div className="pt-2 pt-md-4">
                <Link href="/men">
                  <motion.img
                    className="img-fluid rounded-2"
                    src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/LatestDesigns/01/1X.webp"
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="container-fluid">
          <div className="d-flex">
            <Link href="/men">
              <motion.img
                className="img-fluid rounded-2"
                src="assets/videoframe_1216.png"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-4 py-md-5" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="container-fluid py-md-4">
          <div className="row align-items-center">
            <div className="col-md-4 order-lg-1 mb-3 mb-lg-0">
              <Link href="/men">
                <motion.img
                  className="img-fluid rounded-2"
                  src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/Banner/CollectionBlock/Disney/Collection_disney_11.jpg"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
            </div>
            <div className="col-md-4 order-lg-3 mb-3 mb-lg-0">
              <Link href="/men">
                <motion.img
                  className="img-fluid rounded-2"
                  src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/03_MAR/HPbanner/Collection/Collection_Harry_potter.jpg"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
            </div>
            <div className="col-md-4 text-center order-lg-2 mb-3 mb-lg-0">
              <Link href="/men">
                <motion.img
                  className="img-fluid rounded-2"
                  src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/05_May/Banner/Collection/Utsav.jpg"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
              <Link href={`/men`} className="btn btn-primary py-2 px-4 mt-4">
                View All Collections
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <Trending />
      <Testimonials />
    </>
  );
}
