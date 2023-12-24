import React, { useEffect } from "react";

import MyBag from "../Navbar/MyBag";
import "../Allcss.css/all.css";


import CartShow from "../CartShow/CartShow";
const Cart = () => {
  
  useEffect(() => {
  
   let arr=JSON.parse(localStorage.getItem("cartData"))||[];
   console.log(arr)
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <MyBag />
      <CartShow />
      {/* <Emptycart /> */}
    </div>
  );
};

export default Cart;
