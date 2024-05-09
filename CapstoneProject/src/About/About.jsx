import "./About.css";
import React from "react";
import Image1 from "../assets/images/rectangle.png";
import Image2 from "../assets/images/rectangle2.png";
import { FaCheckCircle } from "react-icons/fa";
export default function () {
  return (
    <div className="a-wrapper">
      <div className="a-container">
        <div className="a-left">
          <div className=" image-container">
            <img className="image1" src={Image1} alt="" />
            <div className="image2">
              <img src={Image2} alt="" />
            </div>
          </div>
        </div>

        <div className="right">
            <div className="a-inner-right">
          <div className="a-title">ABOUT US</div>
          <div className="a-details">
            <h2>
              Most trusted ride hailing <br />
              company in Nigeria
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida quis nisl ut semper. Quisque nibh orci. Lorem ipsum dolor
              sit amet, quis nisl ut semper. Quisque nibh orci. Lorem ipsum
            </p>
          </div>
          
          <div className="a-lower">
            <div className="l-ctn">
              <span >STARTED JOURNEY</span>
              <span>2023</span>
              <button className="button">LEARN MORE</button>
            </div>
            <div className="r-ctn">
              <div>
               <FaCheckCircle className="icon" />
                <span >Easy and emergency solution</span>
              </div>
              <div className="circle">
              <FaCheckCircle className="icon" />
                <span >Easy and emergency solution</span>
              </div>
              <div className="circle">
              <FaCheckCircle className="icon" />
                <span >Easy and emergency solution</span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
