import React from "react";

const SingleItem = ({strMeal,
    strMealThumb}) => {
  return <div className="container">
    <img src={strMealThumb}/>
    <h3>{strMeal}</h3>
  </div>;
};

export default SingleItem;
