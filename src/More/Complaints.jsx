import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../CSS/Complaints.css";


function Complaints() {
  return (
    <>
      <Navbar />
      <div className="complaints_div">
          <h1>COMPLAINTS</h1>
          <div className="complaints_div_1">
              <p>For any complaints regarding The Entrepreneurship Network (TEN)  please contact at our email address : <span>hr.contact.ten@gmail.com</span></p>
              <img className="complaints_img" src="https://static.wixstatic.com/media/c4ea0b_473cc6b169f24afa8f0263b312c2963d~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80/c4ea0b_473cc6b169f24afa8f0263b312c2963d~mv2.webp" alt="Complaints" />
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Complaints;
