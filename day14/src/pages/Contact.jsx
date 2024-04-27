import React from "react";
import styled from "styled-components";
import profile from "../assets/images/intro.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return <Wrapper>
      <div className="image">
        <img src={profile} alt=""/>
      </div>
      <div className="details">
        <p>There are several platforms in which
you can contact me:</p>
        <p className="social">WhatsApp &nbsp; <IoLogoWhatsapp style={{color:'#27c95d'}}/></p>
        <span>+91-9900-7841-71</span>
        <p className="social">Email &nbsp; <MdEmail style={{color:'#c5c2c8'}}/></p>
        <span>abc@gmail.com</span>
        <p className="social">LinkedIn &nbsp; <FaLinkedin style={{color:'#2ab8ec'}}/></p>
        <span>www.linkedin.com/in</span>
      </div>
  </Wrapper>;
};


const Wrapper = styled.div`
  display: flex;
  margin: 1rem 2rem;
  .image{
    margin-left: 10rem;
    width: 30%;
    img{
      width: 100%;
      border-radius: 50%;
      border: 1px solid white;
      padding: 4px;
      box-shadow: 4px 8px 8px 4px rgba(129, 120, 120, 0.902);
    }
  }
  .details{
    margin-top: 4rem;
    margin-left: 4rem;
    p{
      width: 80%;
      line-height: 1.5rem;
      font-size: 16px;
      font-weight: bold;
    }
    .social{
      display: flex;
      align-items: center;
      line-height: 1rem;
    }
    span{
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .image{
      width: 95%;
      img{
        width: 100%;
      }
    }
    .image,.details{
      width: 95%;
      margin-left: 0;
    }
    .details{
      margin-top: 20%;
    }
  }
`

export default Contact;
