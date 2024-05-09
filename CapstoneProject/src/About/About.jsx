import "./about.css";
import image1 from '../assets/images/about.png'
import image from '../assets/images/about-1.jpeg'
import { FaCheckCircle } from "react-icons/fa";


function About() {
  return (
    <div className="a-wrapper">
      <div className="a-container">
        <div className="a-left">
          <div className="image-container">
           <img src={image} alt="" />
            <div className="image2">
             <img src={image1} alt="" />
            </div>
          </div>
        </div>
        <div className="a-right">
        <div className="a-inner-right">
          <div className="a-title">About us</div>
          <div className="a-details">
            <h2>Most trusted ride hailing
              <br /> company in Nigeria </h2>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut gravida quis nisl ut
              semper. Quisque nibh orci. <br />
              Lorem ipsum dolor sit amet, quis nisl ut semper. Quisque nibh
              orci. Lorem ipsum
            </p>
          </div>
          <div className="a-lower">
            <div className="l-ctn">
              <span>STARTED JOURNEY</span>
              <span>2023</span>
              <button className="button">LEARN MORE</button>
            </div>
            <div className="r-ctn">
              <div>
              <FaCheckCircle className="icon" />
              <span>Easy and emergency solution</span></div>
              <div>
              <FaCheckCircle className="icon" />
              <span>Easy and emergency solution</span></div>
              <div>
              <FaCheckCircle className="icon" />
              <span>Easy and emergency solution</span></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}


export default About