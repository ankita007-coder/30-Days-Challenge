import React, { useState } from "react";
import FormRow from "./components/FormRow";
import SubmitBtn from "./components/SubmitBtn";


const App = () => {
  const [isLoginOpen, setLoginOpen] = useState(true);

  const handleClick = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <div className="container">
      <div className="card">
      <div className={`login ${isLoginOpen ? "slide" : "slide-opposite"}`}>
          {isLoginOpen ? (
            <>
            <h2>Log In Form</h2>
              <FormRow type="email" name="email" placeholder="Please enter your email address" />
              <FormRow type="password" name="password" placeholder="Password" />
              <SubmitBtn text="Login" />
            </>
          ) : (
            <>
              <h2>Already a member?</h2>
              <button onClick={handleClick}>Click to login</button>
            </>
          )}
        </div>
        <div className={`signup ${isLoginOpen ? "" : "slide-opposite"}`}>
          {isLoginOpen ? (
            <>
              <h2>Not a part of our community?</h2>
              <h3>Want to create a new account?</h3>
              <button onClick={handleClick}>Click to Sign up</button>
            </>
          ) : (
            <>
            <h2>Sign Up Form</h2>
              <FormRow type="text" name="name" placeholder="Please enter your name" />
              <FormRow type="email" name="email" placeholder="Please enter your email address" />
              <FormRow type="password" name="password" placeholder="Password" />
              <SubmitBtn text="Sign Up" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
