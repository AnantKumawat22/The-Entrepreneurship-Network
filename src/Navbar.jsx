import React from 'react';
import "./CSS/Navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <button className="chat_btn"><i className="far fa-comment-dots"></i></button>
            <nav className="navbar">
                <div className="nav-1">
                    <div className="head_name">

                        <img src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="The Entrepreneurship Network" />

                        <h1><span>T</span>he <span>E</span>ntrepreneurship <span>N</span>etwork</h1>
                    </div>
                    <div className="head_btn">
                        <div className="head_btn_1">
                            <button className="cart_btn"><i className="fas fa-shopping-cart"></i></button>
                            <button className="login_btn"><i className="fas fa-user-circle"></i> <span>Log in</span></button>
                        </div>
                        <div className="search">
                            <input type="search" name="" id="search_inp" placeholder="Search Here" /> <i className="fas fa-search"></i>
                        </div>

                    </div>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/online">Online Courses</Link></li>
                    <li><Link to="/hiring">We're Hiring</Link></li>
                    <li><span>More</span></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
