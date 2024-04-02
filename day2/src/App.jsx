import React from "react";
import FormRow from "./components/FormRow";
import { IoIosPin } from "react-icons/io";
import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const App = () => {
  return <div className="container">
    <div className="contact">
      <div className="info">
      <IoIosPin className="icon"/> <span >Somewhere on the Earth</span>
      </div>
      <div className="info">
      <FaPhoneAlt className="icon"/><span>9876543210</span>
      </div>
      <div className="info">
      <MdEmail className="icon"/><span>hello@gmail.com</span>
      </div>
      <div className="social-icons">
        <div>
        <FaFacebookSquare/>
        </div>
        <div>
        <FaInstagramSquare />
        </div>
        <div></div>
        
      </div>
    </div>
    <div className="message">
      <div>
        <div className="row">
          <FormRow type="text" name="fname" id="name" placeholder="First Name"/>
          <FormRow type="text" name="lname" id="lname" placeholder="Last Name"/>
        </div>
        <FormRow type="email" name="email" id="email" placeholder="Email address"/>
        <textarea name="message" ></textarea>
        <button type="submit">Send Message</button>
      </div>
    </div>
  </div>
};

export default App;
