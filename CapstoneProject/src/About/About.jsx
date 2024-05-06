import './About.css'
import React from 'react'
import Image1 from '../assets/images/rectangle.png'
import Image2 from '../assets/images/rectangle2.png'
import { FaCheckCircle } from "react-icons/fa";
export default function () {
  return (
    <div className='a-container'>
        <div className='a-imgcontainer'>
            <div ><img className='image1'src={Image1} alt="" />
            <div className='image2'><img src={Image2} alt="" /></div>
            </div>
        </div>

        <div className='textcontainer'>
            <div className='about-txt'>ABOUT US</div>
            <div>
                <h2>Most trusted ride hailing <br />company in Nigeria</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida quis nisl ut semper. Quisque nibh orci. Lorem ipsum dolor sit amet, 
                quis nisl ut semper. Quisque nibh orci. Lorem ipsum</p>
            </div>
            <div className='txt-container'>
            <div className='spantext'>
                <span className='stj'>STARTED JOURNEY</span>
                <span className='spanctn'>2023</span>
                <button className='btn'>LEARN MORE</button>
            </div>
            <div>
                <div className='circle'> <FaCheckCircle /><span className='spn'>&nbsp;Easy and emergency solution</span></div>
                <div className='circle'> <FaCheckCircle /><span className='spn'>&nbsp;Easy and emergency solution</span></div>
                <div className='circle'> <FaCheckCircle /><span className='spn'>&nbsp;Easy and emergency solution</span>
                </div>
            </div>
            </div>
        </div>
    
    </div>
  )
}
