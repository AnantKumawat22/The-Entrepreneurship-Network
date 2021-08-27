import React from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';
import "./CSS/Aboutus.css";

function Aboutus() {
  return (
    <>
      <Navbar/>
      <div className="about_container">
          <p className="about_title">About Us</p>
          <h1>Quality Teaching Any Time, Everywhere</h1>
          <p className="about_para">The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.</p>
      </div>
      <Footer/>
    </>
  );
}

export default Aboutus;
