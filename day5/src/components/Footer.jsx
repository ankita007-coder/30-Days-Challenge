import React, { useState } from "react";
import { SlSocialGithub,SlSocialInstagram,SlSocialLinkedin,SlSocialPintarest } from "react-icons/sl";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
    const [isClicked,setIsCLicked]=useState(false);
    const handleClick = () => {
        setIsCLicked(true);
    }
    return <footer>
        <div className="about">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
                <li>Home</li>
                <li>30 Days of JS</li>
                <li>Top Interview 150</li>
                <li>About us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="social">
            <h3>Connect with us !!</h3>
            <h4 style={{color:'#E45B56'}}>Subscribe to our newsletter !</h4>
            <div className="news">
                <input type="email" name="email" id="" placeholder=""/>
                <button type="submit" onClick={handleClick}>{isClicked? 'Subscribed':'Subscribe'}</button>
            </div>
            <div className="social-icons">
                <div><SlSocialInstagram/></div>
                <div><FaSquareFacebook/></div>
                <div><SlSocialLinkedin/></div>
                <div><SlSocialPintarest/></div>
                <div>
                    <SlSocialGithub/>
                </div>
                
            </div>
        </div>
    </footer>;
};

export default Footer;
