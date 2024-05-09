import './how.css'
import phone from '../assets/images/phonez.png';
import { FaLocationDot } from "react-icons/fa6"; 
import { IoCard } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import car from '../assets/images/car.png'
import red from '../assets/images/red.png'
import yellow from '../assets/images/yellow.png'
import blue from '../assets/images/blue.png'
import darkBlue from '../assets/images/blue.png'


function How(){
  return(
    <div className='how-wrapper'>
      <div className="how-container">
        <div className="how-left">
          <img src={phone} alt="" />
        </div>
        <div className="how-right">
          <h2>How it works</h2>
          <div className="how-ctn">
            <div className="row">
              <div className="how-content">
                <div className="image-ctn">
                  <img src={blue} alt="" />
                  <div className="inner-img">
                  <img src={car} alt="" />
                  </div>
                </div>
                <h4>Set Destination</h4>
                <p>
                You can easily lock in your desired travel location,
                <br /> ensuring a seamless journey from start to finish. 
                <br /> Whether you have a specific city 
                <br />or landmark in mind or simply want to explore a new region.
                </p>
              </div>
              <div className="how-content">
                <div className="image-ctn">
                <img src={red} alt="" />  
                  <div className="inner-img">
                  <FaRegCompass className='how-icon red'/>
                  </div>
                </div>
                <h4>Explore the Ride</h4>
                <p>
                Embrace the thrill of adventure and "Explore the Ride" with our exhilarating travel experiences. 
                <br /> Whether you seek the rush of navigating winding roads through breathtaking landscapes 
                <br />or the excitement of discovering new cultures and cuisines.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="how-content ">
                
                <div className="image-ctn">
                <img src={yellow} alt="" />  
                  <div className="inner-img">
                  <FaLocationDot className='how-icon yellow'/>
                  </div>
                </div>
                <h4>Track Journey</h4>
                <p>
                You can stay connected and informed every step of the way,
                <br />From the moment you embark on your adventure until your safe return, 
                <br />we provide real-time updates and tracking capabilities
                </p>
              </div>
              <div className="how-content">
                  <div className="image-ctn">
                    <img src={darkBlue} alt="pay your" />  
                    <div className="inner-img">
                    <IoCard className='how-icon darkBlue'/>
                  </div>
                </div>
                <h4>Simple Payment</h4>
                <p>
                We understand that travel planning can be stressful, 
                <br /> which is why we've made the payment process
                <br /> as simple and straightforward as possible. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How