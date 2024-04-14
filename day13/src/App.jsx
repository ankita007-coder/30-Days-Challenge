import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [products,setProducts] = useState([]);

  const [searchTerm,setSearchTerm] = useState("");

  const getProducts =async()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;
    console.log(data)
    
  
    if (searchTerm.length===0){
      setProducts(data)
    }
    else{
    const updatedProduct = products.filter((prod)=>{
      const {title} = prod
      return title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setProducts(updatedProduct)
    }
  }
  useEffect(() => {
    getProducts();
   
  }, [searchTerm]);

  return <>
      <div className="search">
        <input type="search" 
                name="search" 
                placeholder="Search by product name"
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
      </div>
      <div className="container">
        {
          products.map(product =>{
            const {title,id,image,price} = product
            return <div key={id} className="item">
                <img src={image} alt={title}/>
                <p>{title}</p>
              </div>
          }
          )
        }
      </div>
  </>;
};

export default App;
