import React, { useState } from "react";
import "../pageStyle/cart.css";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems1 = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(cartItems1);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    console.log(cartItems);
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

const checkout=(pp)=>{
  alert(`Total Price is  $${pp}`)
}

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="quantity-btn"
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="quantity-btn"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="remove" onClick={() => handleRemoveItem(item.id)}>
                <IoMdClose />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <hr />
        <p>Total: ${calculateTotal()}</p>
        <button className="checkout-btn" onClick={()=>checkout(calculateTotal())}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
