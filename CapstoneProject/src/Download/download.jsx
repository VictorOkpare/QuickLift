import "./download.css";
import phone2 from '../assets/images/iphone2.png' 
import appStore from '../assets/images/apple-store.png'
import playstore from '../assets/images/playstore.png'
function Download() {
  return (
    <div className="d-wrapper">
      <div className="d-container">
        <div className="left">
          <div className="img-container">
            <img src={phone2} alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Download the free mobile App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida
             <br />quis nisl ut semper. nisl ut semper nisl ut semper
          </p>
          <div className="d-where">
              <img src={playstore} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Download;
