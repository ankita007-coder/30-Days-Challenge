import React from "react";
import { faqs } from "./data";
import SingleItem from "./components/SingleItem";
const App = () => {
  return <div className="container">
    <h1>FAQs</h1>
    <div className="content">
    {
      faqs.map((faq,index)=>{
        return <SingleItem key={index} {...faq}/>
      })
    }
    </div>
  </div>;
};

export default App;
