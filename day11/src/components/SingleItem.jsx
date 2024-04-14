import React from "react";
import { FaStar } from "react-icons/fa6";


const SingleItem = ({title,price,images,rating}) => {

  return <div className="item">
    <img src={images[0]}/>
    <h3 style={{textAlign:'center'}}>{title}</h3>
    <div className="para"><p>${price}</p> <p><FaStar style={{color:'gold'}}/> {rating}</p></div>
  </div>;
};

export default SingleItem;
