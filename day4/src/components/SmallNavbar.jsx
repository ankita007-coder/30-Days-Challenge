import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const SmallNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
  return <div className="smalls">
    <div className="small">
    <div className="branding">
        <span className="logo">C</span>
      </div>
      <div className="icon" onClick={handleClick}>
        <GiHamburgerMenu />
      </div>
      </div>
      {isOpen ? (
  <div className={`menu smalls ${isOpen ? 'open' : ''}`}>
    <ul className="list">
      <li>About</li>
      <li>30 Days of JavaScript</li>
      <li>Leetcode 150</li>
      <li>DSA Python</li>
      <li>Contact Me</li>
    </ul>
  </div>
) : null}

  </div>;
};

export default SmallNavbar;
