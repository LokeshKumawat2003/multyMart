import React from "react";

import "../componentsStyle/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-column">
          <h3>Multimart</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
        </div>

      
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Our Stores</a>
            </li>
            <li>
              <a href="#">Our Cares</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

       
        <div className="footer-column">
          <h4>Customer Care</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">How to Buy</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Corporate & Bulk Purchasing</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>70 Washington Square South, New York, NY 10012, United States</p>
          <p>
            Email:{" "}
            <a href="mailto:uilib.help@gmail.com">uilib.help@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+11123456780">+1 1123 456 780</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Multimart. All Rights Reserved.</p>
        <Link to={"/cart"}>View Cart</Link>
      </div>
    </footer>
  );
};

export default Footer;
