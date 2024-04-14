import React from "react";
import { useState } from "react";

const App = () => {

  const [error,setError]= useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e)=>{
    const value = e.target.value;
    console.log(value)
    setTimeout(()=>{
      if (value.length <8){
        setError("Password must be at least 8 characters")
      }
      else{
        setError("")
      }
    },1000)
    setPassword(value)
  }

  const handleConfirmChange=(e)=>{
    const value = e.target.value;
    setTimeout(()=>{
      if (value!==password){
        setError("Passwords do not match")
      }
      else{
        setError("");
      }
    },2000)
  }

  return <div className="form">
    <form>
      <input type="text" placeholder="Please enter your name"/>
      <input type="text" 
              placeholder="Please enter your password" 
              onChange={handleChange}
              className={error.length>0? 'err':''}/>
      <input type="text" name="" id="" 
              onChange={handleConfirmChange}
              placeholder="Confirm password"
              className={error.length>0? 'err':''}/>
      {
        error && <p className="error">{error}</p>
      }
      <input type="submit" value="Submit"/>
    </form>
  </div>;
};

export default App;
