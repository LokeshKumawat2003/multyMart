import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../pageStyle/datile.css";
import Alert from "../Components/Alert";
import { addItemToCart } from "../Redux/CartSlice";

const Datile = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.datile.datileItem);
  const [product, setItem] = useState(items);
  const [alerts, Setalert] = useState(false);
  const onAlert = (el) => {
    dispatch(addItemToCart(product));
    Setalert(true);
    setTimeout(() => {
      Setalert(false);
    }, 1000);
  };

  return (
    <div className="container">
      {alerts ? <Alert /> : ""}
      <h1 className="title">{product.name}</h1>
      <div className="imageContainer">
        <img src={product.image} alt={product.name} className="image" />
      </div>
      <p className="discount">{product.discount}</p>
      <p className="price-datile">Price: ${product.price}</p>
      <p className="quantity">Available Quantity: {product.quantity}</p>
      <p className="rating">Rating: {product.rating} / 5</p>
      <button className="button" onClick={() => onAlert(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Datile;
