import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layoutComp">
      <Header title="Content Publisher" />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
