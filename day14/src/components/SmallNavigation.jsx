import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const SmallNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuItems = [
        { label: "Introduction", path: "/introduction" },
        { label: "Skills", path: "/skills" },
        { label: "Work Experience", path: "/experience" },
        { label: "Projects", path: "/projects" },
    ];
  return <Wrapper>
     <div className="navbar">
        <p><span className="brand">S</span> <Link to="/">Sagar</Link></p>
        <button className="icon" onClick={()=>setShowMenu(!showMenu)}>
            <GiHamburgerMenu />
        </button>
     </div>
     {
        showMenu && <div className="links">
        {
            menuItems.map((item,index)=>{
                return <Link to={item.path} 
                            onClick={()=>setShowMenu(false)}
                            key={index}
                        >{item.label}</Link>
            })
        }
    </div>
     }
  </Wrapper>;
};


const Wrapper = styled.div`
    visibility: hidden;
    background-color: #1D2228;
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    padding: 0;
    .icon{
        padding: 0.5rem;
        margin: 1rem;
        background-color: transparent;
        outline: none;
        border-radius: 8px;
        border: 1px solid #FB8122;
        color: #FB8122;

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
    a{
        color: #FB8122;
        text-decoration: none;
    }
    .links{
        margin: 4px 8px;
        display: flex;
        flex-direction: column;
        z-index: 10;
        position: absolute;
        width: 100%;
        background-color: #1D2228;
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
    @media screen and (max-width: 768px) {
        visibility: visible;
    }
`
export default SmallNavigation;
