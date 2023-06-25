import { Link, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import React from "react";
// import Login from "../LoginSignupPage/Components/UserAuth/UserAuth"

import Cart from "../Cart_and_Payment/Component/Pages/Cart";
import ProductAll from "../ProductSection/ProductAll";
import ProductDetail from "../ProductSection/ProductDetail";
import Success from "../Cart_and_Payment/Success/Success";

function AllRoutes() {
  {
    console.log(Cart);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:category" element={<ProductAll />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;