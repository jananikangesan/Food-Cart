import React, { useContext, useEffect, useState } from 'react';
import "../css/ViewCart.css";
import { cartContext } from './cartContext';

const ViewCart = () => {

    const [total,setTotal]=useState(0);

    const {cart,setCart}=useContext(cartContext);

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
        
    },[cart]);

    const removeCart=(productId)=>{
        setCart(cart.filter((c)=>c.id!==productId));
      }

  return (
    <>
        <h1 className='cart-heading'>Cart Products</h1>
        <div className="cart-container">
            {
                cart.map((product)=>(
                    <div className="cart-product" key={product.id}>
                        <div className="img">
                            <img src={`${product.pic}`} alt="image"/>
                        </div>
                   
                        <div className="cart-product-details">

                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"  onClick={()=>removeCart(product.id)}/>
                                
                            <h3>{product.name}</h3>
                            <p>Price Rs: {product.amt}</p>
                           
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