import React from "react";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot_1">
          <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"><i className="fab fa-facebook-square fb"></i></a>
          <a href="https://twitter.com/We_Are_TEN?s=08"><i className="fab fa-twitter-square tw"></i></a>
          <a href="https://www.instagram.com/theentrepreneurshipnetwork/"><i className="fab fa-instagram ig"></i></a>
        </div>
        <div className="foot_2">
          <p>Subscribe to our newsletter</p>
          <div className="input_fields">
            <input
              type="text"
              className="inp_form"
              placeholder="Full Name"
              name=""
              id="full_name"
            />
            <input
              type="text"
              className="inp_form"
              placeholder="College Name"
              name=""
              id="clg_name"
            />
            <input
              type="tel"
              className="inp_form"
              placeholder="Mobile No."
              name=""
              id="mobile_no"
            />
            <input
              type="email"
              className="inp_form"
              placeholder="Email"
              name=""
              id="email_id"
            />
          </div>
          <div className="jointen">
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox">Join TEN's Discord Community</label>
          </div>

          <button type="submit" className="submit_btn">
            Submit
          </button>
        </div>
        <div className="foot_3">
          <ul>
            <li>
              <a href="/#/aboutus">About Us</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
