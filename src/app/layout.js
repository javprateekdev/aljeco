"use client";
import { Inter } from "next/font/google";
import Header from "./common/header/page";
import Footer from "./common/footer/Footer";
import Head from "next/head";
import { FilterProvider } from "../context/FilterContext";
import { CartProvider } from "../context/CartContext";
import { WishListProvider } from "../context/WishListContext";
import { AuthProvider } from "../context/AuthContext";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { store } from "../Redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          <AuthProvider>
            <WishListProvider>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce} // Correct prop assignment for transition
              />
              <CartProvider>
                <FilterProvider>
                  <Header />
                  {children}
                  <Footer />
                </FilterProvider>
              </CartProvider>
            </WishListProvider>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
