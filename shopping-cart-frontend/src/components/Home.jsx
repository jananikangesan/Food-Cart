import React, { useEffect, useState } from 'react';
import Product from './Product';
import '../css/Home.css';
import { listProducts } from '../services/ProductService';

const Home = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      listProducts().then((response)=>{
        setProducts(response.data);
      }).catch(error=>{
        console.error(error);
      });
      
    },[])

  return (

    <div className="product-container">
        {products.map((item)=>(
          <Product key={item.id} product={item}/>
        ))}
    </div>
  )
}

export default Home