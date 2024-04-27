import React from "react";
import { Link } from "react-router-dom";
import cv from "../assets/cv.pdf"
import styled from "styled-components";
import intro from "../assets/images/intro.png";

const Intro = () => {
  return <Wrapper>
    <div className="image">
      <img src={intro}/>
    </div>
    <div className="details">
      <h1>Introduction</h1>
      <h3>A Story of hardwork and profession</h3>
      <p>A highly skilled and passionate software 
          engineer whose journey in the world of
          technology has been nothing short of 
          remarkable. With a deep-rooted love for
          coding and problem-solving, I have 
          dedicated my life to crafting elegant 
          solutions in the digital realm.</p>
          <Link to={cv} target="_blank" download>Download Resume</Link>
    </div>
  </Wrapper>;
};


const Wrapper = styled.div`
  display: flex;
  justify-content:center ;
  .image{

    width: 30%;
    margin-left: 10%;
    img{
      width: 100%;
      border-radius: 50%;
    }
  }
  .details{
    width: 70%;
    h1{
      color: #FB8122;
    }
    p{
      width: 60%;
      margin-bottom: 2rem;
    }
    a{
      text-decoration: none;
      color: white;
      font-weight: 600;
      border: 2px solid #FB8122;
      padding: 8px 16px;
      border-radius: 12px;
      transition: ease 0.5s;
      &:hover{
        background-color: #FB8122;
        color: #1D2228;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin:0;
    align-items: center;
    .image,.details{
      width: 95%;
      margin: 0;
    }
    .details{
      margin: 1rem;
      padding: 1rem;
      p{
        width: 90%;
        text-align: justify;
      }
    }
  }

`

export default Intro;
