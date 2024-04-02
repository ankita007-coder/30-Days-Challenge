import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "./components/SingleItem";


const App = () => {

  const [products,setProducts]=useState([]);
  const getProducts = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;
    setProducts(data)
  }
  useEffect(()=>{
    getProducts();
  },[])
  return <div className="product">
    {
      products.map((product)=>{
        return <SingleItem key={product.id} {...product}/>
      })
    }
  </div>;
};

export default App;
