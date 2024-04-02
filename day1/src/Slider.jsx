import React, { useState,useEffect } from "react";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Slider = () => {
    const images = [img1, img2, img3, img4,img5];
    const [current, setCurrentIndex] = useState(0);

    const handlePrevious = ()=>{
      
      setCurrentIndex((current - 1 + images.length) % images.length);
    }
    const handleNext = ()=>{
      setCurrentIndex((current + 1) % images.length);
    }
    useEffect(()=>{
      setTimeout(() => {
        handleNext()
      }, 2000);
    },[current])
    
  return <div className="container">

            <div className="carousel">
            <img src={images[current]} alt={`image ${current}`} className="carousel-item inactive left1"/>
            <img src={images[(current + 1) % images.length]} alt={`image ${current}`} className="carousel-item inactive left2"/>
            <img src={images[(current + 2) % images.length]} alt={`image ${current}`} className="carousel-item active"/>
            <img src={images[(current + 3) % images.length]} alt={`image ${current}`} className="carousel-item inactive right1"/>
            <img src={images[(current + 4) % images.length]} alt={`image ${current}`} className="carousel-item inactive right2"/>
            </div> 
    <button type="button" className="prev" onClick={handlePrevious}><GrFormPrevious /></button>
            <button type="button" className="next" onClick={handleNext}><GrFormNext /></button>
  </div>;
};

export default Slider;
