import React from "react";
import "./Home.css";
import wallImg from "../../assets/images/tatbwall2.png";
import video from "../../assets/images/videoplayback(1).mp4";

const Home = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="main-content">
          <h1 className="text-white text-center display-5 head1">
            Timeless Creations, Crafted with Soul
          </h1>
          <p className="text-white text-center">
            Discover the essence of heritage and artistry in every masterpiece.
            At Rudra Arts, we bring stories <br />
            to life through intricate designs, preserving tradition while
            embracing creativity.
          </p>
          <div className="buttons mt-5 d-flex align-items-center justify-content-center">
            <button className="btn1">Shop Now</button>
          </div>
        </div>
        {/* <h1 className="text-center heading1">Rudra Arts & Handicrafts</h1> */}
        <video className="backVideo" muted loop autoPlay src={video}></video>
        <img className="wallImg" src={wallImg} alt="wallImg" />
      </div>
    </>
  );
};

export default Home;
