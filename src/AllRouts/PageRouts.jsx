import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../Components/Nav";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import Footer from "../Components/Footer";
import Login from "../Page/Login";
import Signup from "../Page/Signp";
import AllProduct from "../Page/AllProduct";
import Datile from "../Page/Datile";

const PageRouts = () => {
  return (
    <div>
      <Nav />
      <div className="routs" style={{ marginTop: "100px", maxWidth: "1300px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datile" element={<Datile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<AllProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default PageRouts;
