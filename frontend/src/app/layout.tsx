import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./redux/provider";
import Navbar from "@/components/navbar/Navbar";
import SwiperComponent from "@/components/swiper/swiper";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <header>
            <Navbar />
          </header>
          <div className="relative top-32 container m-auto">
            <SwiperComponent />
          </div>
          <FeaturedProducts />

          <main className="relative top-40 container m-auto">{children}</main>
        </body>
      </StoreProvider>
    </html>
  );
}
