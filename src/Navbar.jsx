import React from "react";
import "./CSS/Navbar.css";
import { DropdownButton, Dropdown, Item } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <button className="chat_btn">
        <i className="far fa-comment-dots"></i>
      </button>
      <nav className="navbar">
        <div className="nav-1">
          <div className="head_name">
            <img
              src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp"
              alt="The Entrepreneurship Network"
            />

            <h1>
              <span>T</span>he <span>E</span>ntrepreneurship <span>N</span>
              etwork
            </h1>
          </div>
          <div className="head_btn">
            <div className="head_btn_1">
              <Link to="/cart" className="cart_link">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <Link className="login_link">
                <i className="fas fa-user-circle"></i> <span>Log in</span>
              </Link>
            </div>
            <div className="search">
              <input
                type="search"
                name=""
                id="search_inp"
                placeholder="Search Here"
              />{" "}
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        <div className="nav_menu">
          <ul className="nav_ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/online">Online Courses</Link>
            </li>
            <li>
              <Link to="/hiring">We're Hiring</Link>
            </li>
          </ul>
          <DropdownButton id="dropdown-basic-button" title="More">
            <Dropdown.Item href="#/action-1">Blog</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Certification</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Alumni Team</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Forum</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Hackathon</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Membership Registration</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Campus Ambassador Program</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mentorship</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Social Media</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Testimonials</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Complaints</Dropdown.Item>
          </DropdownButton>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
