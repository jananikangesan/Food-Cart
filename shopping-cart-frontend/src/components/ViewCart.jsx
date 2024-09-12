import React, { useContext, useEffect, useState } from 'react';
import "../css/ViewCart.css";
import { cartContext } from './cartContext';
import { BiPlusCircle } from "react-icons/bi";
import { FiMinusCircle } from "react-icons/fi";

const ViewCart = () => {

    const [total,setTotal]=useState(0);

    const {cart,setCart}=useContext(cartContext);

    const [count,setCount]=useState({});

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>{
            const productCount=count[curr.id]||1;
            return acc+parseFloat(curr.amt)*productCount;
        },0))
        
    },[cart,count]);

    const removeCart=(productId)=>{
        setCart(cart.filter((c)=>c.id!==productId));
      }

    const handleIncrease=(id)=>{

        setCount((prev)=>({
            ...prev,
            [id]:Math.max((prev[id] || 1)+1,1)
        }));
    }

    const handleDecrease=(id)=>{
        setCount((prev)=>({
            ...prev,
            [id]:Math.max((prev[id] || 1)-1,1)
        }));
    }

  return (
    <>
        <h1 className='cart-heading'>Cart Products</h1>
        <div className="cart-container">
            {
                cart.map((product)=>(
                    <div className="cart-product" key={product.id}>
                        <div className="img">
                            <img src={`images/${product.pic.name}`} alt="image"/>
                        </div>
                   
                        <div className="cart-product-details">

                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"  onClick={()=>removeCart(product.id)}/>
                                
                            <h3>{product.name}</h3>
                            <p>Price Rs: {product.amt*(count[product.id]||1)}</p>
                            <div className='cart-product-count'>
                                <FiMinusCircle size={28} color='#838524' onClick={()=>handleDecrease(product.id)} className="button-click"/>
                                <p>{count[product.id]||1}</p>
                                <BiPlusCircle  size={30} color='#838524' onClick={()=>handleIncrease(product.id)}  className="button-click"/>
                            </div> 
                        </div>
                    </div>
                ))
            }
            
        </div>
        <h2 className='cart-amt'>Total Amount Rs: {total}</h2>
    </>
  )
}

export default ViewCart