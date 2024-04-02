import React from "react";

const BigNavbar = () => {
  return <div className="big">
    <div className="branding">
        <span className="logo">C</span>
      </div>
      <div className="menu">
        <ul>
          <li>About</li>
          <li>30 Days of JavaScript</li>
          <li>Leetcode 150</li>
          <li>DSA Python</li>
        </ul>
      </div>
      <div className="contact">
        <button>Contact Me</button>
      </div>
  </div>;
};

export default BigNavbar;
