import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
