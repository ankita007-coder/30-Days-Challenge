import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'


const Navigation = () => {

    const menuItems = [
        { label: "Introduction", path: "/introduction" },
        { label: "Skills", path: "/skills" },
        { label: "Work Experience", path: "/experience" },
        { label: "Projects", path: "/projects" },
    ];
    const [isActive,setActive] = useState(null);
    const [isContact,setContact] = useState(false);
    const handleClick = (index) => {
        setActive(index);
    }

    const handleContactClick = ()=>{
        setContact(true);
        setActive(null)
    }
    const handleBrand = ()=>{
        setContact(false);
        setActive(null)
    }
  return <Wrapper>
    <div className="branding">
        <p><span className="brand">S</span> <Link to="/" onClick={handleBrand}>Sagar</Link></p>
    </div>
    <div className="links">
        {
            menuItems.map((item,index)=>{
                return <Link to={item.path} 
                            onClick={()=>handleClick(index)}
                            className={isActive===index? 'active':''}
                        >{item.label}</Link>
            })
        }
    </div>
    <div className='contact' onClick={handleContactClick}>
                <Link to="/contact-me"
                    className={isContact?'c-active':''}>Contact Me</Link>
            </div>
  </Wrapper>;
};

const Wrapper = styled.div`
    padding : 16px;
    margin: 8px;
    color: #FB8122;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        color: #FB8122;
        text-decoration: none;
    }
    .brand{
        background-color: #FB8122;
        padding: 4px 12px;
        color: #1D2228;
        margin: 4px 8px;
        font-family: "Crimson Text", serif;
        font-weight: 600;
        border-radius: 4px;
    }
    .links{
        margin: 4px 8px;
        a{
           
            margin: 4px 8px;
            padding: 4px 12px;
            font-size: 18px;
            transition: ease 1s;
        }
        &:hover{
            cursor: pointer;
        }
        .active{
            background-color: #FB8122;
            color: #1D2228;
            border-radius: 16px;
        }
    }
    .contact{
        
        a{
            text-decoration: none;
            color: #1D2228;
            font-size: 18px;
            font-weight: 600;
            background-color: #D9D9D9;
            padding: 4px 16px;
            border-radius: 4px;
        }
        &:hover{
            cursor: pointer;
        }
        .c-active{
            border-radius: 16px;
        }
    }

    @media screen and (max-width:768px){
        display: none;
    }
`

export default Navigation;
