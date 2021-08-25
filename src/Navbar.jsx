import React from 'react';

function Navbar() {
    return (
        <>
            <button class="chat_btn"><i class="far fa-comment-dots"></i></button>
            <nav class="navbar">
                <div class="nav-1">
                    <div class="head_name">

                        <img src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="The Entrepreneurship Network" />

                        <h1><span>T</span>he <span>E</span>ntrepreneurship <span>N</span>etwork</h1>
                    </div>
                    <div class="head_btn">
                        <div class="head_btn_1">
                            <button class="cart_btn"><i class="fas fa-shopping-cart"></i></button>
                            <button class="login_btn"><i class="fas fa-user-circle"></i> <span>Log in</span></button>
                        </div>
                        <div class="search">
                            <input type="search" name="" id="search_inp" placeholder="Search Here" /> <i class="fas fa-search"></i>
                        </div>

                    </div>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/online">Online Courses</a></li>
                    <li><a href="/hiring">We're Hiring</a></li>
                    <li><span>More</span></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
