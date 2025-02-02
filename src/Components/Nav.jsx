import React, { useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { IoMenuSharp } from "react-icons/io5";
import "../componentsStyle/nav.css";
import Search from "../Page/Search";
const Nav = () => {
  const [sidebar, Setsidebar] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const siedbar = () => {
    Setsidebar((pre) => !pre);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  };
  return (
    <div>
      <nav>
        <div className="sid-serch">
          <div className="nav-logo">
            <BsHandbagFill />
            <h2>Multimart</h2>
          </div>
          <div className="nav-serch navSerch">
            <CiSearch />
            <input
              type="text"
              placeholder=" Search Some..."
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div
            onClick={siedbar}
            className="nav-links"
            style={{ top: sidebar ? "86px" : "-600px" }}
          >
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
          </div>

          <div className="user-box">
            <Link to={"/Login"}>
              <FaUser />
            </Link>
            <Link to={"/cart"}>
              <ImCart />
            </Link>

            <div className="mobile-icons" onClick={siedbar}>
              <IoMenuSharp />
            </div>
          </div>
        </div>
        <div className="x-serch">
          <div className="nav-serch serch2">
            <CiSearch />
            <input type="text" placeholder=" Search Some..."   value={inputValue}
              onChange={handleChange}/>
          </div>
          
        </div>
      </nav>
     <div className="serch-coponet">
     {inputValue?<Search/>:""}
     </div>
    </div>
  );
};

export default Nav;
