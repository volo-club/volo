
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}
