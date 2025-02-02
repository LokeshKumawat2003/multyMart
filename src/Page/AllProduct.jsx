import React, { useState } from "react";
import "../pageStyle/allProducts.css";
import { CiHeart } from "react-icons/ci";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import Alert from "../Components/Alert";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/CartSlice";
import { datile } from "../Redux/datile";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");
  const [alerts, Setalert] = useState(false);
  const dispatch = useDispatch();
const nevigate=useNavigate()
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const arr = [
    {
      id: 1,
      name: "Stone and Beam Westview",
      image: "https://m.media-amazon.com/images/I/71C8fZzC4yL._AC_SY400_.jpg",
      discount: "30% off",
      price: 0.25,
      quantity: 1,
      rating: 1,
    },
    {
      id: 1,
      name: "Stone and Beam Westview",
      image: "https://m.media-amazon.com/images/I/71C8fZzC4yL._AC_SY400_.jpg",
      discount: "30% off",
      price: 0.25,
      quantity: 1,
      rating: 1,
    },
    {
      id:2,
      name: "Stone and Beam Westview",
      image: "https://m.media-amazon.com/images/I/71C8fZzC4yL._AC_SY400_.jpg",
      discount: "30% off",
      price: 0.25,
      quantity: 1,
      rating: 1,
    },
    {
      id: 3,
      name: "Stone and Beam Westview",
      image: "https://m.media-amazon.com/images/I/71C8fZzC4yL._AC_SY400_.jpg",
      discount: "30% off",
      price: 0.25,
      quantity: 1,
      rating: 1,
    },

  ];

  const onAlert = (el) => {
    dispatch(addItemToCart(el));
    Setalert(true);
    setTimeout(() => {
      Setalert(false);
    }, 1000);
  };

  const productDatile=(el)=>{
    
    dispatch(datile(el))
    nevigate("/datile")
  }

  return (
    <div>
      <div className="all-products-container">
        <div className="filter">
          <div className="filter-option">
            <label htmlFor="sort">Sort by Price:</label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
              <option value="">Select</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="category">Filter by Category:</label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
        </div>
      </div>

      <div className="discount-section">
        {alerts ? <Alert /> : ""}
        <div className="header-section">
          <h1>All Products</h1>
        </div>
        <div className="product-grid">
          {arr.map((el, i) => (
            <div className="product-item" key={i} >
              <div className="discount-tag">
                <span>{el.discount}</span>
              </div>
              <div className="favorite-icon">
                <CiHeart />
              </div>
              <div className="image-container" onClick={()=>productDatile(el)}>
                <img src={el.image} alt={el.name} />
              </div>
              <div className="product-title">
                <h4>{el.name}</h4>
              </div>
              <div className="product-rating">
                {[...Array(5)].map((_, index) =>
                  index < el.rating ? (
                    <MdOutlineStar key={index} />
                  ) : (
                    <MdOutlineStarBorder key={index} />
                  )
                )}
              </div>
              <div className="price-section">
                <h3>$ {el.price}</h3>
                <p onClick={() => onAlert(el)}>
                  <BsFillCartPlusFill />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
