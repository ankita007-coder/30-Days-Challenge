import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose} from "react-icons/ai";

const App = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const handleClick = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="dashboard">
        <div className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
          <div className="branding">Coding With<span style={{color:'#E45B56'}}> Ankita</span></div>
          <ul>
            <li>Home</li>
            <li>Analytics</li>
            <li>Security Integration</li>
            <li>Something</li>
            <li>Blah blah</li>
          </ul>
        </div>
        <main className={`${isSidebarOpen? '':'main-body'}`}>
          <button className="menu-icon" onClick={handleClick}>{isSidebarOpen?<AiOutlineClose />:<AiOutlineMenuUnfold />}</button>
        </main>
      </div>
    );
  };


export default App;
