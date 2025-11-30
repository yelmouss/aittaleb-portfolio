"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
