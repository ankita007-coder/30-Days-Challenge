import React, { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const SingleItem = ({title,description,price,rating,image}) => {

    const [isWishlist,setWishlist] = useState(false);

    const handleClick=()=>{
        setWishlist(!isWishlist);
    }

  return <div className="details">
        <div className="image">
        <div className="icon">
            <img src={image}/>
            <button className="heart" onClick={handleClick}>
            {isWishlist ? <IoIosHeart />:<IoIosHeartEmpty/>}
            </button>
        </div>
        <div>
            <h4>{title.length > 25 ? `${title.slice(0, 25)}...` : title }</h4>       
        </div>
        </div>
       
    <p className="pricing">
        <span style={{float:'left',display:'flex',alignItems:'center'}}><LiaRupeeSignSolid /> {Math.round(price*85,2)}</span>
        <span style={{float:'right'}}><FaStar style={{color:'gold'}}/> {rating.rate}</span>
    </p>
    </div>
};

export default SingleItem;
