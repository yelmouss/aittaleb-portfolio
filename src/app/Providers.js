import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Providers = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Providers;
