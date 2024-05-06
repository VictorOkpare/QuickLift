import "./hero.css";
function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="light" />
        <img src="../assets/images/about-1.jpeg" alt="" />
        <div className="hero-ctn">
          <div className="hero-time">24/7 Online Cab Booking Service</div>
          <div className="hero-details">
            <h2>
              Enjoy Comfortable Trips
              <br /> With Quicklift
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida <br /> quis nisl ut semper. Quisque nibh orci. Lorem ipsum
              dolor sit amet,
            </p>
          </div>
          <div className="hero-button">
            <button className="button">DOWNLOAD APP</button>
            <button className="button">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
