import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import "../css/Search.css";
import { listProducts } from '../services/ProductService';

const Search = () => {

  const [product,setProduct]=useState([]);

  const [find,setFind]=useState("");

  useEffect(()=>{
    listProducts().then((response)=>{
      setProduct(response.data);
    }).catch(error=>{
      console.error(error);
    })
  },[])

  return (
    <div className="container mt-5">
      <h4 className='text-primary'>Filter Table Data</h4>
      <form className='col-md-6' >
        <div className="input-group">
        <input type="text" className='form-control' placeholder='Search Text' onChange={(e)=>setFind(e.target.value)}/>
        <CiSearch className='icon'/>
        </div>
       
      </form>
      <table className='table table-bordered table-striped mt-3'>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Shop</th>
            <th>Food Type</th>
            <th>Amount</th>
            <th>Latest</th>
          </tr>
        </thead>
        <tbody>
          {product.filter((item)=>{
            return find==="" ?item:item.name.toLowerCase().includes(find.toLowerCase()) || item.shop.toLowerCase().includes(find.toLowerCase())|| item.ftype.toLowerCase().includes(find.toLowerCase()) ||item.latest.toLowerCase().includes(find.toLowerCase());
          })
          .map((item,index)=>(
            <tr  key={index}>
              <td>{index +1 }</td>
              <td>{item.name}</td>
              <td>{item.shop}</td>
              <td>{item.ftype}</td>
              <td>{item.amt}</td>
              <td>{item.latest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Search