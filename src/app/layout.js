import { Inter } from "next/font/google";
import Header from "./common/header/page";
import Footer from "./common/footer/Footer";
import Head from "next/head";
import { FilterProvider } from "../context/FilterContext";
import { CartProvider } from "../context/cartContext";
import { WishListProvider } from "../context/WishListContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aljeco",
  description: "Ecommerce-Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/img/logo/logo.png" />
      </Head>
      <body className={inter.className}>
        <WishListProvider>
          <CartProvider>
            <FilterProvider>
              <Header />
              {children}
              <Footer />
            </FilterProvider>
          </CartProvider>
        </WishListProvider>
      </body>
    </html>
  );
}
