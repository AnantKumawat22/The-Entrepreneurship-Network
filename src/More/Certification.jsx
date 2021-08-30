import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../CSS/Certification.css";

function Certification() {
  return (
    <>
      <Navbar />
      <div className="certification_div">
        <div className="certification_div_1">
          <h2>TEN Certified Expert</h2>
          <span>Dear Intern,</span>

          <p>
            We at TEN not only strive to provide the best guidance to our
            interns but also ensure their experience with us proves to be a
            career milestone.
          </p>

          <p>
            We hereby offer to certify you as an Expert in your domain for a
            paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY). This Internship
            encompasses all the major learnings you gave and received and
            establishes you as a certified professional.We are certain this
            accomplishment will go a long way in building your fledgling career
            and prove instrumental in making you the best in business.
          </p>

          <p>
            The QR code below helps you to make the required payment.The
            certificate would be shared on your email Id registered with us,
            once the payment is successful.Also, fill up the form below that
            helps you subscribe for the required certificate.{" "}
          </p>

          <p>
            We look forward to certifying you and thereby enhancing your skill
            set and enriching your ever-growing profile.
          </p>

          <div className="certificate_subscribe">
            <p>Subscribe here to get Certificates</p>
            <form action="#" class="certificate_subscribe_form">
              <select name="" id="select_internship_track">
                <option class="option_disable" value="1">Internship Track</option>
                <option value="2">Digital Marketing</option>
                <option value="3">Market Research</option>
                <option value="4">Sales</option>
                <option value="5">Product Management</option>
                <option value="6">Project Management</option>
                <option value="7">General Management</option>
                <option value="8">Angular Developer</option>
                <option value="9">React Developer</option>
                <option value="10">Java Developer</option>
                <option value="11">Spring Boot Developer</option>
                <option value="12">WordPress Developer</option>
                <option value="13">UX Designer</option>
                <option value="14">Text Content Preparation</option>
                <option value="15">Audio Content Preparation</option>
                <option value="16">Video Content Preparation</option>
                <option value="17">Graphic Content Preparation</option>
              </select>
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Mobile No." />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Payment Transaction ID" />
              <button class="subscribe_btn">Subscribe</button>
            </form>
          </div>
          <img className="qrscan_img" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_454,h_603,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="QR Code" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Certification;
