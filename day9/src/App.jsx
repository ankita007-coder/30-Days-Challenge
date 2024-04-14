import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "./components/SingleItem";

const App = () => {

  const [categories,setCategories] = useState([]);
  const [meals,setMeals] = useState([])

  const getCategories = async()=>{
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.data.categories;
    
    setCategories(data);
  }
  const handleClick = async(cateogry="Seafood")=>{
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateogry}`);  
      const data = await response.data.meals;
      setMeals(data)
      console.log(data)
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    getCategories();
    handleClick();
  },[])
  return <>
    <h1>Food Menu</h1>
    <div className="row">
    {
      categories.slice(1).map((category)=>{
        return <div key={category.idCategory}>
          <button className="btn" onClick={()=>handleClick(category.strCategory)}>{category.strCategory}</button>
        </div>
      })
    }
  </div>
  <div className="meal-row">
    {
      meals.map((meal)=>{
        return <SingleItem key={meal.idMeal} {...meal}/>
      })
    }
  </div>
  </>
};

export default App;
