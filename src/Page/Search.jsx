import React, { useState } from "react";
import "../pageStyle/search.css";
import { CiHeart } from "react-icons/ci";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import Alert from "./../Components/Alert";
import { addItemToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { datile } from "../Redux/datile";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const arr = [
    {
      id: 1,
      name: "Stone and Beam Westview",
      image: "https://m.media-amazon.com/images/I/71C8fZzC4yL._AC_SY400_.jpg",
      discount: "30% off",
      price: 25,
      rating: 5,
      quantity: 1,
    },
    {
      id: 2,
      name: "Modern Armchair",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/double-sofa-02.eac56d9c3869030c478e.png",
      discount: "20% off",
      price: 45,
      rating: 4,
      quantity: 1,
    },
    {
      id: 3,
      name: "Classic Sofa",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/arm-chair-02.43d57539a173865f0923.jpg",
      discount: "15% off",
      price: 80,
      rating: 4,
      quantity: 1,
    },
    {
      id: 4,
      name: "Elegant Dining Chair",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/arm-chair-03.726a783a7751afc13d8e.jpg",
      discount: "25% off",
      price: 30,
      rating: 5,
      quantity: 1,
    },
    {
      id: 5,
      name: "Leather Recliner",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/phone-03.3207c29a5ca1a8cd27cf.png",
      discount: "10% off",
      price: 12,
      rating: 4,
      quantity: 1,
    },
    {
      id: 6,
      name: "Outdoor Lounger",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/phone-01.d86035d9fda1b97694c9.jpg",
      discount: "5% off",
      price: 60,
      rating: 3,
      quantity: 1,
    },
    {
      id: 7,
      name: "Comfy Floor Cushion",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/phone-04.2ba19de791045813aac6.jpg",
      discount: "50% off",
      price: 15,
      rating: 5,
      quantity: 1,
    },
    {
      id: 8,
      name: "Stylish Coffee Table",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/phone-06.9ca83f4b04590be98884.jpg",
      discount: "10% off",
      price: 75,
      rating: 4,
      quantity: 1,
    },
    {
      id: 9,
      name: "Minimalist Bookshelf",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/wireless-01.1a76d777727c50ca0294.png",
      discount: "20% off",
      price: 11,
      rating: 5,
      quantity: 1,
    },
    {
      id: 10,
      name: "Compact Study Desk",
      image:
        "https://multimart-ecommerce.onrender.com/static/media/double-sofa-03.afb74598f1e42c273506.png",
      discount: "15% off",
      price: 85,
      rating: 4,
      quantity: 1,
    },
  ];

  const [alerts, setAlert] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const onAlert = (el) => {
    dispatch(addItemToCart(el));
    setAlert(true);
    setTimeout(() => setAlert(false), 1000);
    console.log(el);
  };

  const productDetail = (el) => {
    dispatch(datile(el));
    navigate("/datile");
  };

  return (
    <div className="search-new-product">
      <div className="search-sell-header">
        <h1>Your Products</h1>
      </div>
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
      {alerts && <Alert />}
      <div className="search-product-box">
        {arr.map((el, i) => (
          <div className="search-product" key={i}>
            <div className="search-like">
              <CiHeart />
            </div>
            <div
              className="search-product-image"
              onClick={() => productDetail(el)}
            >
              <img src={el.image} alt={el.name} />
            </div>
            <div className="search-product-name">
              <h4>{el.name}</h4>
            </div>
            <div className="search-rating">
              {[...Array(5)].map((_, index) =>
                index < el.rating ? (
                  <MdOutlineStar key={index} />
                ) : (
                  <MdOutlineStarBorder key={index} />
                )
              )}
            </div>
            <div className="search-price">
              <h3>$ {el.price}</h3>
              <p onClick={() => onAlert(el)}>
                <BsFillCartPlusFill />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
