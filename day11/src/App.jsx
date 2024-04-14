import React,{ useEffect,useState }  from "react";
import axios from "axios";
import SingleItem from "./components/SingleItem";

const App = () => {

  const [products,setProducts]=useState([]);
  const [sortOption,setSortOption]=useState("rating");

  const getProducts = async()=>{
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response.data)
    const data = await response.data.products;
    setProducts(data)
  }

  const handleChange =(e)=>{
    const value = e.target.value;
    console.log(value)
    setSortOption(value);

  }

  const sortOptions= ()=>{
    switch (sortOption) {
      case "rating":
        return [...products].sort((a,b)=>b.rating-a.rating)
      
      case "lowtohigh":
        return [...products].sort((a,b)=>a.price-b.price)

      case "hightolow":
        return [...products].sort((a,b)=>b.price-a.price)
    
      default:
        return [...products].sort((a,b)=>b.rating-a.rating)
    }
  }
  useEffect(()=>{
    getProducts();
  },[])
  return <div className="container">
    <div className="sort">
      <h1>Products</h1>
      <select name="sort" onChange={handleChange}>
        <option value="rating">Rating high to low</option>
        <option value="lowtohigh">Low to high price</option>
        <option value="hightolow">High to low price</option>
      </select>
    </div>
    <div className="product-container">
      {
        sortOptions().map(product =>{
          return <SingleItem key={product.id} {...product}/>
        })
      }
    </div>
  </div>;
};

export default App;
