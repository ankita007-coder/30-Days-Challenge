import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return <Wrapper>
    <div className="project">
      <h3>WalletXpress</h3>
      <p>Designed a Maven Spring bootapplication 
          micro services architecture with secure APIs 
          for user authentication,
          funds management, 
          transactions, and account reconciliation.</p>
        <p>Integrated Kafka for real-time event-driven
            communication, ensuring high-velocity 
            transaction processing and
            utilized Hibernate
            as an ORM tool for consistent database 
            interactions, and Redis as a caching layer for 
            enhanced
            performance.</p>
        <p>
            Conducted thorough unit testing, including 
            Postman for API testing, to identify and resolve
            issues, ensuring a reliable
            application.
        </p>
        <a>Live site &nbsp; <FaExternalLinkAlt style={{fontSize:'14px'}}/></a>
    </div>
    <div className="project">
      <h3>JobSwipe</h3>
      <p>Developed a web application facilitating job 
          posting and searching.</p>
      <p>Designed user-friendly interfaces and 
      integrated backend APIs for seamless 
      functionality.</p>
      <p>Implemented authentication and authorization
      features for secure user access.</p>
      <p>Conducted extensive testing using Swagger
      and Postman for API testing.</p>
      <p>Ensured efficient data management and 
      optimized performance for enhanced user 
      experience.</p>
      <a>Live site &nbsp; <FaExternalLinkAlt style={{fontSize:'14px'}}/></a>
    </div>
  </Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .project{
    background-color: #2C3238;
    padding: 16px 32px;
    border-radius: 16px;
    width: 23%;
    box-shadow: 0 4px 8px 4px rgba(233, 229, 229, 0.427);
    margin: 16px;
  }
  h3{
    color: #FB8122;
    text-align: center;
  }
  p{
    color: #D9D9D9;
    font-size: 14px;
  }
  a{
    display: flex;
    align-items: center;

  }
  a:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 25%;
    .project{
      width: 75%;
      
    }
  }
`
export default Project;
