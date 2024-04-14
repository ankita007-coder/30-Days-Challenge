import React from "react";
import Wrapper from "../assets/wrappers/Home";
import Profile from "../assets/images/dummy.jpg";
const Home = () => {
  return <Wrapper>
        <div className="text">
          <p>HELLO I'M A</p>
          <h2>SOFTWARE <span>ENGINEER</span></h2>
          <p>Hello, I’m Sagar a professional software engineer having expertise in. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam. 
           </p>
          <button type="button">Hire Me</button>
        </div>
        <div className="image">
          <img src={Profile}/>
        </div>
        <h1></h1>
    </Wrapper>;
};

export default Home;
