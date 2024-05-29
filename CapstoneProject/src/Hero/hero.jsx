import "./hero.css";
function Hero() {
  return (
    <div className="hero-wrapper" id="hero-wrapper">
      <div className="hero-container">
        <div className="light" />
       
        <div className="hero-ctn">
          <div className="hero-time">24/7 Online Cab Booking Service</div>
          <div className="hero-details">
            <h2>
              Enjoy Comfortable Trips
              <br /> With Quicklift
            </h2>
            <p className="hero-detailsPara">
            QuickLift offers comfortable rides that get you there fast, all at affordable prices.<br/> 
            Book your ride with a few taps and enjoy a hassle-free journey.<br/> Download QuickLift today and experience the difference!
            </p>
          </div>
          <div className="hero-button">
            <button className="button button1"><a href="https://play.google.com/">DOWNLOAD APP</a></button>
            <button className="button button2">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
