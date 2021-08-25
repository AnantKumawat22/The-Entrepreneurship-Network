import React from "react";
import Navbar from "./Navbar";
import './CSS/Footer.css';

function Footer() {
return (
<>
    <div className="footer">
        <div className="foot_1">
            <i className="fab fa-facebook-square fb"></i>
            <i className="fab fa-twitter-square tw"></i>
            <i className="fab fa-instagram ig"></i>
        </div>
        <div className="foot_2">
            <p>Subscribe to our newsletter</p>
            <div className="input_fields">
                <input type="text" className="inp_form" placeholder="Full Name" name="" id="full_name" />
                <input type="text" className="inp_form" placeholder="College Name" name="" id="clg_name" />
                <input type="tel" className="inp_form" placeholder="Mobile No." name="" id="mobile_no" />
                <input type="email" className="inp_form" placeholder="Email" name="" id="email_id" />
                <input type="checkbox" name="" id="checkbox" />
                <label for="checkbox">Join TEN's Discord Community</label>
            </div>
            <button type="submit" className="submit_btn">Submit</button>
        </div>
        <div className="foot_3">
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
</>
);
}

export default Footer;