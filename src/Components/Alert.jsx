import React from "react";
import "../componentsStyle/alert.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const Alert = () => {
  return (
    <div>
      <div className="alert-box">
        <div className="alert">
         <IoCheckmarkDoneCircle/> <p>Product has been added to cart!</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
