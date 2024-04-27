import React from "react";
import styled from "styled-components";
import prog from "../assets/images/1.png";
import back from "../assets/images/img2.png";
import vcs from "../assets/images/img3.png";

const Skills = () => {
  return <Wrapper>
    <div className="container">
      <img src={prog} alt="" srcset="" />
      <h4>Programming Languages</h4>
      <p>
        JAVA <br/> JavaScript 
      </p>
    </div>
    <div className="container">
      <img src={back} alt="" srcset="" />
      <h4>Backend Development</h4>
      <p>Spring Boot, Node.js, Redis</p>
      <p>MongoDB, Express.js</p>
      <p>MySQL, Kafka</p>
    </div>
    <div className="container">
    <img src={vcs} alt="" srcset="" />
    <h4>Version Control System</h4>
    <p>GitHub</p>
    </div>
  </Wrapper>;
};


const Wrapper = styled.div`
  display: flex ;
  justify-content: center;
  .container{
    background-color: #31373E;
    margin: 2rem 1rem;
    border-radius: 20px;
    box-shadow: 0px 0px 6px 6px rgba(228, 228, 228, 0.354);
    width: 20%;
    transition: ease 1s;
    img{
      width: auto;
      display: block;
      margin: 0 auto;
      height: 150px;
    }
    h4{
      color:#FB8122;
      text-align: center;
    }
    p{
      text-align: center;
      line-height: 1.25rem;
    }
    &:hover{ 
      margin: 2rem;
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  @media screen and (max-width:768px){
    flex-direction: column;
    align-items: center;
    .container{
      width: 80%;
    }
  }
`
export default Skills;
