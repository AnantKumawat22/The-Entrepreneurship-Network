import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import './CSS/Entrepreneurship.css';

function Entrepreneurship() {
  return (
    <>
      <Navbar />
      <div className="Entrepreneurship_div">
        <div className="Entrepreneurship_div_1">
          <img src="https://static.wixstatic.com/media/693073_b24b1806d43c41e2b6e7fc72063fb54e~mv2.jpg/v1/fill/w_857,h_640,al_c,q_85/693073_b24b1806d43c41e2b6e7fc72063fb54e~mv2.webp" alt="Entrepreneurship"/>
        </div>
        <div className="Entrepreneurship_div_2"></div>
      </div>
      <Footer/>
    </>
  );
}

export default Entrepreneurship;
