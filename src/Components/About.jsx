import React from "react";
import "../componentsStyle/about.css";
import { FaCarAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
const About = () => {
  return (
    <div className="about-cart">
      <div className="about-home cart1">
        <div className="box1">
          <div className="bout-car">
            <FaCarAlt />
          </div>
          <div className="about-header">
            <h4>Free Shipping</h4>
          </div>
          <div className="about-query">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="about-home cart2">
        <div className="box1">
          <div className="bout-car">
            <FaRegCreditCard />
          </div>
          <div className="about-header">
            <h4>Safe Payment</h4>
          </div>
          <div className="about-query">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="about-home cart3">
        <div className="box1">
          <div className="bout-car">
            <MdOutlineSecurity />
          </div>
          <div className="about-header">
            <h4>Secure Payment</h4>
          </div>
          <div className="about-query">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="about-home cart4">
        <div className="box1">
          <div className="bout-car">
            <SlEarphones />
          </div>
          <div className="about-header">
            <h4>Back Guarantee</h4>
          </div>
          <div className="about-query">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
