import React, { useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";


const App = () => {

  const [toggleButton, setToggleButton] = useState(false);
  const handleClick = () => {
    setToggleButton(!toggleButton);
  }
  return <div className={`container ${toggleButton?'dark':''}`}>
    <div className="toggle">     
      <div className="sun" onClick={handleClick}> <MdSunny /></div>
      <button className="circle" onClick={handleClick}></button>
      <div className="moon" onClick={handleClick}><IoMoon /></div>       
    </div>
  </div>;
};

export default App;
